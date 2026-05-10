// Shared CORS helper. Replaces the per-function `Access-Control-Allow-Origin: *`
// pattern with an allow-list. Reflect the request Origin only when it matches.

const ALLOWED_ORIGINS = [
  "https://www.preparationnelle.com",
  "https://preparationnelle.com",
  "https://www.preparationnelle.fr",
  "https://preparationnelle.fr",
  // Local dev
  "http://localhost:8080",
  "http://localhost:5173",
  "http://127.0.0.1:8080",
  "http://127.0.0.1:5173",
];

export function corsHeaders(req: Request): Record<string, string> {
  const origin = req.headers.get("origin") ?? "";
  const allowed = ALLOWED_ORIGINS.includes(origin) ? origin : "null";
  return {
    "Access-Control-Allow-Origin": allowed,
    "Access-Control-Allow-Headers":
      "authorization, x-client-info, apikey, content-type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Vary": "Origin",
  };
}

export function handleCorsPreflight(req: Request): Response | null {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders(req) });
  }
  return null;
}
