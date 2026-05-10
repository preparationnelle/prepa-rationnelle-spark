// SSRF guard. Resolves a URL's hostname to its IPs and rejects any address
// that is loopback, link-local, private, or otherwise non-routable on the
// public internet. Use before any server-side fetch driven by user input.

const PRIVATE_V4 = [
  /^0\./,                 // 0.0.0.0/8
  /^10\./,                // 10.0.0.0/8
  /^127\./,               // 127.0.0.0/8 loopback
  /^169\.254\./,          // 169.254.0.0/16 link-local (AWS metadata)
  /^172\.(1[6-9]|2[0-9]|3[01])\./, // 172.16.0.0/12
  /^192\.0\.0\./,         // 192.0.0.0/24
  /^192\.168\./,          // 192.168.0.0/16
  /^198\.1[89]\./,        // 198.18.0.0/15 (benchmarking)
  /^100\.(6[4-9]|[7-9][0-9]|1[01][0-9]|12[0-7])\./, // 100.64.0.0/10 CGNAT
  /^224\./,               // multicast
  /^255\.255\.255\.255$/, // broadcast
];

function isPrivateIPv4(ip: string): boolean {
  return PRIVATE_V4.some((re) => re.test(ip));
}

function isPrivateIPv6(ip: string): boolean {
  const lower = ip.toLowerCase();
  if (lower === "::1" || lower === "::") return true;
  if (lower.startsWith("fe80:") || lower.startsWith("fe80::")) return true; // link-local
  if (lower.startsWith("fc") || lower.startsWith("fd")) return true;        // ULA fc00::/7
  // IPv4-mapped IPv6 — reject if the embedded v4 is private
  if (lower.startsWith("::ffff:")) {
    const v4 = lower.slice(7);
    if (/^\d+\.\d+\.\d+\.\d+$/.test(v4)) return isPrivateIPv4(v4);
  }
  return false;
}

export async function isUrlPublic(rawUrl: string): Promise<{
  ok: boolean;
  reason?: string;
  parsed?: URL;
}> {
  let parsed: URL;
  try {
    parsed = new URL(rawUrl);
  } catch {
    return { ok: false, reason: "INVALID_URL" };
  }
  if (!["http:", "https:"].includes(parsed.protocol)) {
    return { ok: false, reason: "INVALID_PROTOCOL" };
  }

  const hostname = parsed.hostname.replace(/^\[|\]$/g, "");

  // Bare IP literal — check directly without DNS.
  if (/^\d+\.\d+\.\d+\.\d+$/.test(hostname)) {
    if (isPrivateIPv4(hostname)) return { ok: false, reason: "PRIVATE_IP" };
    return { ok: true, parsed };
  }
  if (hostname.includes(":")) {
    if (isPrivateIPv6(hostname)) return { ok: false, reason: "PRIVATE_IP" };
    return { ok: true, parsed };
  }

  // localhost variants
  const lowerHost = hostname.toLowerCase();
  if (lowerHost === "localhost" || lowerHost.endsWith(".localhost")) {
    return { ok: false, reason: "PRIVATE_HOST" };
  }
  if (lowerHost.endsWith(".internal") || lowerHost.endsWith(".local")) {
    return { ok: false, reason: "PRIVATE_HOST" };
  }

  // DNS resolve and check every returned address.
  try {
    const records = await Promise.all([
      Deno.resolveDns(hostname, "A").catch(() => [] as string[]),
      Deno.resolveDns(hostname, "AAAA").catch(() => [] as string[]),
    ]);
    const addresses = records.flat();
    if (addresses.length === 0) {
      return { ok: false, reason: "DNS_FAILED" };
    }
    for (const addr of addresses) {
      if (addr.includes(":") ? isPrivateIPv6(addr) : isPrivateIPv4(addr)) {
        return { ok: false, reason: "PRIVATE_IP" };
      }
    }
  } catch {
    return { ok: false, reason: "DNS_FAILED" };
  }

  return { ok: true, parsed };
}

// Manual-redirect fetch that re-validates each hop against the SSRF guard.
// Caps at maxHops to avoid loops.
export async function fetchPublicUrl(
  rawUrl: string,
  init: RequestInit = {},
  maxHops = 5,
): Promise<Response> {
  let current = rawUrl;
  for (let hop = 0; hop < maxHops; hop++) {
    const check = await isUrlPublic(current);
    if (!check.ok) {
      throw new Error(`Blocked URL: ${check.reason}`);
    }
    const res = await fetch(current, { ...init, redirect: "manual" });
    if (res.status >= 300 && res.status < 400) {
      const loc = res.headers.get("location");
      if (!loc) return res;
      current = new URL(loc, current).toString();
      continue;
    }
    return res;
  }
  throw new Error("Too many redirects");
}
