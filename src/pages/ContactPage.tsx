
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Instagram, Linkedin, Globe } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="container max-w-3xl py-10 animate-fade-in">
      {/* MISE EN ÉVIDENCE - Bannière visible */}
      <div className="mb-8 p-6 bg-gradient-to-r from-primary/90 to-secondary rounded-2xl shadow-lg flex flex-col sm:flex-row items-center sm:justify-between gap-4 border-2 border-primary/60">
        <div>
          <span className="text-xl sm:text-2xl font-bold text-primary-foreground">
            Contactez-nous ou découvrez nos partenaires !
          </span>
        </div>
        <a
          href="https://stephanepreteseille.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white shadow px-5 py-2 rounded-lg font-semibold text-primary border-2 border-primary transition hover:bg-primary hover:text-white hover:border-white"
          style={{ textDecoration: "none" }}
        >
          Partenaire : Stephane Preteseille
        </a>
      </div>

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

          {/* Informations de contact mises à jour */}
          <div className="flex flex-col gap-6 justify-center">
            <div className="flex items-center gap-3">
              <Mail className="text-primary" />
              <span>
                <a href="mailto:preparationnelle@gmail.com" className="underline text-primary">
                  preparationnelle@gmail.com
                </a>
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-primary" />
              <span>
                <a href="tel:+33609164668" className="underline text-primary">
                  06 09 16 46 68
                </a>
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Globe className="text-primary" />
              <a
                href="https://preparationnelle.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-primary"
              >
                preparationnelle.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="text-primary" />
              <span>
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
                <Instagram size={28} className="text-primary" />
              </a>
              <a
                href="https://www.linkedin.com/in/dimitar-dimitrov-372348200/"
                target="_blank"
                rel="noopener"
                className="hover:scale-110 transition"
                aria-label="LinkedIn"
              >
                <Linkedin size={28} className="text-primary" />
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
