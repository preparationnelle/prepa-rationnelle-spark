import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Instagram, Linkedin, Globe } from "lucide-react";
import OffersSection from "@/components/OffersSection";

export default function ContactPage() {
  return (
    <div className="container max-w-3xl py-10 animate-fade-in" id="contact">
      {/* NOUVEAU : Section Nos offres bien mise en évidence */}
      <OffersSection />

      <Card>
        <CardHeader>
          <CardTitle className="text-primary text-3xl">
            Contactez-nous
          </CardTitle>
          <p className="text-muted-foreground mt-2">
            Pour toute question, n’hésitez pas à nous contacter via ce formulaire ou via nos différents moyens de contact.
          </p>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-10">
          {/* Formulaire de contact avec champ téléphone */}
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
              <Input
                id="name"
                name="name"
                placeholder="Votre nom"
                required
                className="bg-[#FFFAEC] placeholder:text-gray-400"
              />
            </div>
            <div>
              <label className="font-medium mb-1 block" htmlFor="email">
                E-mail
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="mon@email.com"
                required
                className="bg-[#FFFAEC] placeholder:text-gray-400"
              />
            </div>
            {/* Champ téléphone : bordure orange au focus */}
            <div>
              <label className="font-medium mb-1 block" htmlFor="phone">
                Téléphone
              </label>
              <div className="relative">
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  pattern="^[0-9+\s().-]{6,}$"
                  placeholder="06 12 34 56 78"
                  className="bg-[#FFFAEC] placeholder:text-gray-400 pr-10 focus:outline-none focus:ring-2 focus:ring-[#FF7900] focus:border-[#FF7900] border-2 border-transparent"
                  style={{ boxShadow: "none" }}
                />
                {/* Icone utilisateur / chevron, en option — à droite du champ */}
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                  <Phone className="w-5 h-5" />
                </span>
              </div>
            </div>
            <div>
              <label className="font-medium mb-1 block" htmlFor="message">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                required
                placeholder="Votre message"
                className="resize-none bg-[#FFFAEC] placeholder:text-gray-400"
              />
            </div>
            <Button
              type="submit"
              className="w-full mt-2 bg-[#FF7900] hover:bg-[#ff8e2b] text-white text-lg font-bold py-2"
              style={{ background: "#FF7900" }}
            >
              Envoyer
            </Button>
          </form>

          {/* Informations de contact mises à jour */}
          <div className="flex flex-col gap-6 justify-center">
            <div className="flex items-center gap-3">
              <Mail className="text-[#FF7900]" />
              <span>
                <a href="mailto:preparationnelle@gmail.com" className="underline text-[#FF7900]">
                  preparationnelle@gmail.com
                </a>
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-[#FF7900]" />
              <span>
                <a href="tel:+33609164668" className="underline text-[#FF7900]">
                  06 09 16 46 68
                </a>
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Globe className="text-[#FF7900]" />
              <a
                href="https://preparationnelle.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-[#FF7900]"
              >
                preparationnelle.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="text-[#FF7900]" />
              <span className="text-black">
                50 rue des 3 frères, 75018 Paris
              </span>
            </div>
            <div className="flex items-center gap-4 mt-4">
              <a
                href="https://www.instagram.com/prepa_rationnelle/"
                target="_blank"
                rel="noopener"
                className="hover:scale-110 transition"
                aria-label="Instagram"
              >
                <Instagram size={28} className="text-[#FF7900]" />
              </a>
              <a
                href="https://www.linkedin.com/in/dimitar-dimitrov-372348200/"
                target="_blank"
                rel="noopener"
                className="hover:scale-110 transition"
                aria-label="LinkedIn"
              >
                <Linkedin size={28} className="text-[#FF7900]" />
              </a>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Google Maps intégré — adresse mise à jour */}
      <div className="mt-8 rounded-lg overflow-hidden shadow-lg w-full" style={{ minHeight: 360 }}>
        <iframe
          title="Localisation"
          src="https://www.google.com/maps?q=50+rue+des+3+frères,+75018+Paris,+France&output=embed"
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
