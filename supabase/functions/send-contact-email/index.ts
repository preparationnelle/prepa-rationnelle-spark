
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

// Initialize Resend with API key
const resend = new Resend(Deno.env.get('RESEND_API_KEY'));

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface ContactRequest {
  name: string;
  email: string;
  question: string;
  recipient: string;
  subject: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, question, recipient, subject } = await req.json() as ContactRequest;
    
    if (!name || !email || !question) {
      throw new Error('Missing required fields');
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Prépa Rationnelle <onboarding@resend.dev>',
      to: [recipient || 'preparationnelle@gmail.com'],
      subject: subject || 'Nouvelle question via le widget de chat',
      html: `
        <h2>Nouvelle question de ${name}</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Question:</strong></p>
        <p>${question}</p>
      `,
      reply_to: email,
    });

    if (error) {
      throw new Error(`Failed to send email: ${error.message}`);
    }

    return new Response(
      JSON.stringify({ success: true, message: 'Email sent successfully' }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error in send-contact-email function:', error);
    
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  }
});
