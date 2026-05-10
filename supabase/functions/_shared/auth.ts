import { createClient, SupabaseClient, User } from "https://esm.sh/@supabase/supabase-js@2.49.4";
import { corsHeaders } from "./cors.ts";

// Returns the authenticated user, or null if the request has no valid bearer
// token. Intended for edge functions that previously had no auth check.
export async function getAuthenticatedUser(
  req: Request,
): Promise<{ user: User; supabase: SupabaseClient } | null> {
  const authHeader = req.headers.get("Authorization") ?? "";
  if (!authHeader.startsWith("Bearer ")) return null;

  const token = authHeader.slice("Bearer ".length).trim();
  if (!token) return null;

  const supabase = createClient(
    Deno.env.get("SUPABASE_URL") ?? "",
    Deno.env.get("SUPABASE_ANON_KEY") ?? "",
    { global: { headers: { Authorization: authHeader } } },
  );

  const { data, error } = await supabase.auth.getUser(token);
  if (error || !data.user) return null;
  return { user: data.user, supabase };
}

// Reject the request with 401 when there is no authenticated user.
// Use as the first line of every protected edge function.
export async function requireAuth(req: Request): Promise<
  | { user: User; supabase: SupabaseClient; response?: never }
  | { user?: never; supabase?: never; response: Response }
> {
  const session = await getAuthenticatedUser(req);
  if (!session) {
    return {
      response: new Response(
        JSON.stringify({ error: "Authentification requise" }),
        {
          status: 401,
          headers: { ...corsHeaders(req), "Content-Type": "application/json" },
        },
      ),
    };
  }
  return session;
}

// Escape user-supplied strings before interpolating them into HTML email bodies.
export function escapeHtml(input: unknown): string {
  return String(input ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
