import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.3';
import { Resend } from "npm:resend@2.0.0";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface ContactLeadRequest {
  firstName: string;
  lastName?: string; // Now optional
  email: string;
  phoneStudent: string;
  phoneParent?: string;
  city?: string;
  studentLevel: 'prepa' | 'lycee' | 'college';
  studentType: 'eleve' | 'parent';
  serviceType: 'stages_intensifs' | 'cours_particuliers';
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const leadData: ContactLeadRequest = await req.json();

    // Validate required fields (lastName is now optional)
    if (!leadData.firstName || !leadData.email || !leadData.phoneStudent) {
      throw new Error('Missing required fields: firstName, email, phoneStudent');
    }

    // Initialize Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Insert lead into database
    const { data: newLead, error: dbError } = await supabase
      .from('contact_leads')
      .insert({
        first_name: leadData.firstName,
        last_name: leadData.lastName,
        email: leadData.email,
        phone_student: leadData.phoneStudent,
        phone_parent: leadData.phoneParent || null,
        city: leadData.city || null,
        student_level: leadData.studentLevel,
        student_type: leadData.studentType,
        service_type: leadData.serviceType,
        status: 'new',
        priority: 'normal',
        source: 'homepage_form',
        utm_source: leadData.utmSource || null,
        utm_medium: leadData.utmMedium || null,
        utm_campaign: leadData.utmCampaign || null,
      })
      .select()
      .single();

    if (dbError) {
      console.error('Database error:', dbError);
      throw new Error(`Failed to save lead: ${dbError.message}`);
    }

    console.log('✅ Lead saved to database:', newLead.id);

    // Prepare notification content
    const studentLevelLabel = {
      'prepa': 'Prépa',
      'lycee': 'Lycée',
      'college': 'Collège'
    }[leadData.studentLevel];

    const studentTypeLabel = {
      'eleve': 'Un élève',
      'parent': 'Un parent'
    }[leadData.studentType];

    const serviceLabel = {
      'stages_intensifs': 'Stages intensifs',
      'cours_particuliers': 'Cours particuliers'
    }[leadData.serviceType];

    // === 1. SEND SMS NOTIFICATION VIA TWILIO ===
    const twilioAccountSid = Deno.env.get('TWILIO_ACCOUNT_SID');
    const twilioAuthToken = Deno.env.get('TWILIO_AUTH_TOKEN');
    const twilioPhoneNumber = Deno.env.get('TWILIO_PHONE_NUMBER'); // Your Twilio number
    const adminPhoneNumber = Deno.env.get('ADMIN_PHONE_NUMBER'); // Your personal phone

    if (twilioAccountSid && twilioAuthToken && twilioPhoneNumber && adminPhoneNumber) {
      try {
        const smsBody = `🔔 NOUVEAU LEAD!\n\n` +
          `${leadData.firstName} ${leadData.lastName}\n` +
          `${studentTypeLabel} - ${studentLevelLabel}\n` +
          `Service: ${serviceLabel}\n\n` +
          `📞 ${leadData.phoneStudent}\n` +
          `📧 ${leadData.email}\n\n` +
          `Ville: ${leadData.city || 'Non précisée'}\n\n` +
          `⚡ Lead ID: ${newLead.id}`;

        const smsUrl = `https://api.twilio.com/2010-04-01/Accounts/${twilioAccountSid}/Messages.json`;

        const smsResponse = await fetch(smsUrl, {
          method: 'POST',
          headers: {
            'Authorization': 'Basic ' + btoa(`${twilioAccountSid}:${twilioAuthToken}`),
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams({
            To: adminPhoneNumber,
            From: twilioPhoneNumber,
            Body: smsBody,
          }),
        });

        if (smsResponse.ok) {
          console.log('✅ SMS sent successfully via Twilio');
        } else {
          const errorText = await smsResponse.text();
          console.error('❌ Twilio SMS error:', errorText);
        }
      } catch (smsError) {
        console.error('❌ Error sending SMS:', smsError);
        // Don't fail the entire request if SMS fails
      }
    } else {
      console.warn('⚠️ Twilio credentials not configured - skipping SMS');
    }

    // === 2. SEND EMAIL NOTIFICATION TO ADMIN ===
    const resendApiKey = Deno.env.get('RESEND_API_KEY');

    if (resendApiKey) {
      const resend = new Resend(resendApiKey);

      try {
        const adminEmailHtml = `
          <!DOCTYPE html>
          <html>
            <head>
              <style>
                body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: #f5f5f5; padding: 20px; }
                .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); overflow: hidden; }
                .header { background: linear-gradient(135deg, #f97316 0%, #fb923c 100%); color: white; padding: 30px; text-align: center; }
                .header h1 { margin: 0; font-size: 28px; }
                .content { padding: 30px; }
                .info-row { margin: 15px 0; padding: 15px; background: #f9fafb; border-radius: 8px; border-left: 4px solid #f97316; }
                .label { font-weight: 600; color: #374151; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 5px; }
                .value { color: #111827; font-size: 16px; }
                .cta { text-align: center; margin: 30px 0; }
                .cta a { display: inline-block; background: #f97316; color: white; padding: 14px 32px; text-decoration: none; border-radius: 8px; font-weight: 600; }
                .footer { background: #f9fafb; padding: 20px; text-align: center; color: #6b7280; font-size: 14px; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h1>🎯 Nouveau Lead !</h1>
                  <p style="margin: 10px 0 0 0; opacity: 0.95;">Un nouveau prospect vient de remplir le formulaire</p>
                </div>
                
                <div class="content">
                  <div class="info-row">
                    <div class="label">👤 Contact</div>
                    <div class="value">${leadData.firstName} ${leadData.lastName}</div>
                  </div>

                  <div class="info-row">
                    <div class="label">📧 Email</div>
                    <div class="value"><a href="mailto:${leadData.email}" style="color: #f97316;">${leadData.email}</a></div>
                  </div>

                  <div class="info-row">
                    <div class="label">📱 Téléphone élève</div>
                    <div class="value"><a href="tel:${leadData.phoneStudent}" style="color: #f97316;">${leadData.phoneStudent}</a></div>
                  </div>

                  ${leadData.phoneParent ? `
                  <div class="info-row">
                    <div class="label">📱 Téléphone parent</div>
                    <div class="value"><a href="tel:${leadData.phoneParent}" style="color: #f97316;">${leadData.phoneParent}</a></div>
                  </div>
                  ` : ''}

                  <div class="info-row">
                    <div class="label">🎓 Profil</div>
                    <div class="value">${studentTypeLabel} - ${studentLevelLabel}</div>
                  </div>

                  <div class="info-row">
                    <div class="label">🎯 Service demandé</div>
                    <div class="value">${serviceLabel}</div>
                  </div>

                  ${leadData.city ? `
                  <div class="info-row">
                    <div class="label">📍 Ville</div>
                    <div class="value">${leadData.city}</div>
                  </div>
                  ` : ''}

                  <div class="cta">
                    <a href="tel:${leadData.phoneStudent}">📞 Appeler maintenant</a>
                  </div>

                  <div style="margin-top: 30px; padding: 15px; background: #fef3c7; border-radius: 8px; border-left: 4px solid #fbbf24;">
                    <p style="margin: 0; color: #78350f; font-size: 14px;">
                      <strong>💡 Conseil :</strong> Rappeler dans les 5 minutes augmente vos chances de conversion de 800% !
                    </p>
                  </div>
                </div>

                <div class="footer">
                  <p style="margin: 0;">Lead ID: ${newLead.id}</p>
                  <p style="margin: 10px 0 0 0;">Prépa Rationnelle - Système de gestion des leads</p>
                </div>
              </div>
            </body>
          </html>
        `;

        await resend.emails.send({
          from: 'Prépa Rationnelle <onboarding@resend.dev>',
          to: ['preparationnelle@gmail.com'],
          subject: `🔔 NOUVEAU LEAD - ${leadData.firstName} ${leadData.lastName} (${serviceLabel})`,
          html: adminEmailHtml,
          reply_to: leadData.email,
        });

        console.log('✅ Admin email sent successfully');

        // === 3. SEND CONFIRMATION EMAIL TO CLIENT ===
        const clientEmailHtml = `
          <!DOCTYPE html>
          <html>
            <head>
              <style>
                body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: #f5f5f5; padding: 20px; }
                .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); overflow: hidden; }
                .header { background: linear-gradient(135deg, #f97316 0%, #fb923c 100%); color: white; padding: 40px 30px; text-align: center; }
                .content { padding: 40px 30px; }
                .checkmark { font-size: 64px; margin-bottom: 20px; }
                h1 { margin: 0 0 10px 0; font-size: 28px; }
                p { color: #374151; line-height: 1.8; margin: 15px 0; }
                .highlight { background: #fef3c7; padding: 20px; border-radius: 8px; border-left: 4px solid #f97316; margin: 25px 0; }
                .cta { text-align: center; margin: 30px 0; }
                .cta a { display: inline-block; background: #f97316; color: white; padding: 16px 40px; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 16px; }
                .footer { background: #f9fafb; padding: 30px; text-align: center; color: #6b7280; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <div class="checkmark">✅</div>
                  <h1>Demande bien reçue !</h1>
                  <p style="margin: 0; color: white; opacity: 0.95;">Nous vous recontacterons sous 24h</p>
                </div>
                
                <div class="content">
                  <p>Bonjour <strong>${leadData.firstName}</strong>,</p>
                  
                  <p>Merci d'avoir choisi <strong>Prépa Rationnelle</strong> pour votre accompagnement !</p>
                  
                  <p>Nous avons bien reçu votre demande pour <strong>${serviceLabel}</strong>.</p>

                  <div class="highlight">
                    <p style="margin: 0; font-size: 16px;">
                      <strong>🎯 Prochaines étapes :</strong><br><br>
                      1️⃣ Un de nos conseillers va vous rappeler dans les <strong>prochaines 24h</strong><br>
                      2️⃣ Nous analyserons ensemble vos besoins et objectifs<br>
                      3️⃣ Nous vous proposerons un programme 100% personnalisé
                    </p>
                  </div>

                  <p>En attendant, n'hésitez pas à :</p>
                  <ul style="color: #374151; line-height: 2;">
                    <li>Explorer nos <a href="https://preparationnelle.com/formations" style="color: #f97316;">formations gratuites</a></li>
                    <li>Rejoindre notre <a href="https://www.instagram.com/prepa_rationnelle/" style="color: #f97316;">Instagram</a> pour des conseils quotidiens</li>
                    <li>Réserver un <a href="https://calendly.com/preparationnelle/30min" style="color: #f97316;">cours d'essai gratuit</a></li>
                  </ul>

                  <div class="cta">
                    <a href="https://preparationnelle.com">Découvrir nos formations</a>
                  </div>

                  <p style="margin-top: 30px;">À très bientôt,<br><strong>L'équipe Prépa Rationnelle</strong></p>
                </div>

                <div class="footer">
                  <p><strong>📞 06 09 16 46 68</strong> | <strong>📧 preparationnelle@gmail.com</strong></p>
                  <p style="margin: 10px 0;">50 rue des 3 frères, 75018 Paris</p>
                  <p style="margin: 10px 0; font-size: 12px;">
                    <a href="https://www.instagram.com/prepa_rationnelle/" style="color: #f97316; text-decoration: none; margin: 0 10px;">Instagram</a>
                    <a href="https://preparationnelle.com" style="color: #f97316; text-decoration: none; margin: 0 10px;">Site Web</a>
                  </p>
                </div>
              </div>
            </body>
          </html>
        `;

        await resend.emails.send({
          from: 'Prépa Rationnelle <onboarding@resend.dev>',
          to: [leadData.email],
          subject: `✅ Demande bien reçue - Prépa Rationnelle`,
          html: clientEmailHtml,
        });

        console.log('✅ Client confirmation email sent successfully');

      } catch (emailError) {
        console.error('❌ Error sending emails:', emailError);
        // Don't fail the request if email fails
      }
    } else {
      console.warn('⚠️ Resend API key not configured - skipping emails');
    }

    // Return success response
    return new Response(
      JSON.stringify({
        success: true,
        message: 'Lead submitted successfully',
        leadId: newLead.id
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200
      }
    );

  } catch (error) {
    console.error('❌ Error in submit-contact-lead function:', error);

    return new Response(
      JSON.stringify({
        success: false,
        error: error.message
      }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );
  }
});
