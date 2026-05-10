import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";
import { corsHeaders, handleCorsPreflight } from "../_shared/cors.ts";
import { escapeHtml } from "../_shared/auth.ts";

const resend = new Resend(Deno.env.get('RESEND_API_KEY'));

const INTERNAL_RECIPIENT = "preparationnelle@gmail.com";
const SUBJECT = "Nouvelle question via le widget de chat";

interface ContactRequest {
  name: string;
  email: string;
  question: string;
}

serve(async (req) => {
  const preflight = handleCorsPreflight(req);
  if (preflight) return preflight;

  try {
    const { name, email, question } = await req.json() as ContactRequest;

    if (!name || !email || !question) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        {
          status: 400,
          headers: { ...corsHeaders(req), "Content-Type": "application/json" },
        },
      );
    }

    const { error } = await resend.emails.send({
      from: 'Prépa Rationnelle <onboarding@resend.dev>',
      to: [INTERNAL_RECIPIENT],
      subject: SUBJECT,
      html: `
        <h2>Nouvelle question de ${escapeHtml(name)}</h2>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Question:</strong></p>
        <p>${escapeHtml(question)}</p>
      `,
      reply_to: email,
    });

    if (error) {
      throw new Error(`Failed to send email: ${error.message}`);
    }

    return new Response(
      JSON.stringify({ success: true, message: 'Email sent successfully' }),
      { headers: { ...corsHeaders(req), "Content-Type": "application/json" } },
    );
  } catch (error) {
    console.error('Error in send-contact-email function:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders(req), "Content-Type": "application/json" },
      },
    );
  }
});
