
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Instagram, Linkedin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="container max-w-3xl py-10 animate-fade-in">
      <Card>
        <CardHeader>
          <CardTitle className="text-primary text-3xl">Contactez-nous</CardTitle>
          <p className="text-muted-foreground mt-2">
            Pour toute question, n’hésitez pas à nous contacter via ce formulaire ou via nos réseaux.
          </p>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-10">
          {/* Formulaire de contact */}
          <form
            className="space-y-4"
            onSubmit={e => {
              e.preventDefault();
              alert("Message envoyé ! (simulation)");
            }}
          >
            <div>
              <label className="font-medium mb-1 block" htmlFor="name">
                Nom
              </label>
              <Input id="name" name="name" placeholder="Votre nom" required />
            </div>
            <div>
              <label className="font-medium mb-1 block" htmlFor="email">
                E-mail
              </label>
              <Input id="email" name="email" type="email" placeholder="mon@email.com" required />
            </div>
            <div>
              <label className="font-medium mb-1 block" htmlFor="message">
                Message
              </label>
              <Textarea id="message" name="message" required placeholder="Votre message" className="resize-none" />
            </div>
            <Button type="submit" className="w-full mt-2">
              Envoyer
            </Button>
          </form>

          {/* Infos contact et réseaux */}
          <div className="flex flex-col gap-6 justify-center">
            <div className="flex items-center gap-3">
              <Mail className="text-primary" />
              <span>
                <a href="mailto:preparationnelle@gmail.com" className="underline text-primary">preparationnelle@gmail.com</a>
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-primary" />
              <span>
                <a href="tel:+33612345678" className="underline text-primary">+33 6 12 34 56 78</a>
              </span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="text-primary" />
              10 Rue du Progrès, 75000 Paris, France
            </div>
            <div className="flex items-center gap-4 mt-4">
              <a href="https://www.instagram.com/prepa_rationnelle/" target="_blank" rel="noopener" className="hover-scale" aria-label="Instagram">
                <Instagram size={28} className="text-primary" />
              </a>
              <a href="https://www.linkedin.com/in/dimitar-dimitrov-372348200/" target="_blank" rel="noopener" className="hover-scale" aria-label="LinkedIn">
                <Linkedin size={28} className="text-primary" />
              </a>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Google Maps intégré */}
      <div className="mt-8 rounded-lg overflow-hidden shadow-lg w-full" style={{ minHeight: 360 }}>
        <iframe
          title="Localisation"
          src="https://www.google.com/maps?q=10+Rue+du+Progrès,+Paris,+France&output=embed"
          width="100%"
          height="360"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          style={{ border: 0 }}
        />
      </div>
    </div>
  );
}
