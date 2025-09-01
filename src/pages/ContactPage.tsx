import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Instagram, Linkedin, Globe, MessageCircle, Target, BookOpen, GraduationCap, Calculator, Code, TrendingUp, Users, Calendar, Gift } from "lucide-react";
import Navigation from '@/components/Navigation';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  
  // QCM states
  const [objective, setObjective] = useState('');
  const [subject, setSubject] = useState('');
  const [level, setLevel] = useState('');
  const [qcmEmail, setQcmEmail] = useState('');

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const whatsappMessage = `Bonjour ! 👋

Voici mes informations de contact :

📋 *Nom :* ${name}
📧 *Email :* ${email}
📱 *Téléphone :* ${phone}

💬 *Mon message :*
${message}

Merci de me recontacter dès que possible !`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappNumber = "33609164668";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  const handleQcmSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const qcmMessage = `Bonjour ! 👋

J'ai complété le mini-QCM et souhaiterais recevoir des tips personnalisés :

🎯 *Mon objectif principal :* ${objective}
📚 *Matière à travailler :* ${subject}  
📊 *Mon niveau actuel :* ${level}
📧 *Email pour le plan gratuit :* ${qcmEmail}

Merci de m'envoyer une recommandation personnalisée !`;

    const encodedMessage = encodeURIComponent(qcmMessage);
    const whatsappNumber = "33609164668";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-accent py-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Floating bubbles - Blue and Orange mix like landing page */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-200 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-blue-200 rounded-full opacity-10 animate-pulse-slow"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-orange-100 rounded-full opacity-10 animate-pulse-slow"></div>
        <div className="absolute bottom-40 left-20 w-56 h-56 bg-orange-200 rounded-full opacity-5 animate-pulse"></div>
        <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-orange-50 rounded-full opacity-10 animate-pulse-slow"></div>
        <div className="absolute top-3/4 right-1/4 w-40 h-40 bg-blue-100 rounded-full opacity-5 animate-pulse"></div>
        <div className="absolute top-1/2 left-10 w-24 h-24 bg-orange-100 rounded-full opacity-10 animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-5 w-36 h-36 bg-blue-50 rounded-full opacity-5 animate-pulse"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          
          {/* Section Contact Principal */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-primary text-3xl">
                Contactez-nous via WhatsApp
              </CardTitle>
              <p className="text-muted-foreground mt-2">
                Remplissez ce formulaire et vous serez redirigé vers WhatsApp pour nous envoyer votre message directement. Nous vous répondrons rapidement !
              </p>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-10">
              {/* Formulaire de contact */}
              <form className="space-y-4" onSubmit={handleContactSubmit}>
                <div>
                  <label className="font-medium mb-1 block" htmlFor="name">
                    Nom
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Votre nom"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="bg-white"
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-white"
                  />
                </div>
                <div>
                  <label className="font-medium mb-1 block" htmlFor="phone">
                    Téléphone
                  </label>
                  <div className="relative">
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="06 12 34 56 78"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="bg-white pr-10"
                    />
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
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="resize-none bg-white"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full mt-2 bg-[#25D366] hover:bg-[#22c55e] text-white text-lg font-bold py-2 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Envoyer via WhatsApp
                </Button>
              </form>

              {/* Informations de contact */}
              <div className="flex flex-col gap-6 justify-center">
                <div className="flex items-center gap-3">
                  <MessageCircle className="text-[#25D366]" />
                  <span>
                    <a href="https://wa.me/33609164668" className="underline text-[#25D366]">
                      WhatsApp : 06 09 16 46 68
                    </a>
                  </span>
                </div>
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

          {/* Google Maps */}
          <div className="mb-8 rounded-lg overflow-hidden shadow-lg w-full" style={{ minHeight: 360 }}>
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

          {/* Mini-QCM Section */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center">
                Quelle Est Ta Situation Actuelle ? Trouve la Solution Parfaite pour Booster Ta Prépa
              </CardTitle>
              <p className="text-muted-foreground text-center">
                Réponds à ce Mini‑QCM et reçois des tips personnalisés gratuits.
              </p>
            </CardHeader>
            <CardContent>
              <form className="space-y-6" onSubmit={handleQcmSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="font-medium mb-2 block">
                      Quel est ton objectif principal ?
                    </label>
                    <Select value={objective} onValueChange={setObjective} required>
                      <SelectTrigger className="bg-white">
                        <SelectValue placeholder="Choisir…" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="integrer-top3">Intégrer le TOP 3</SelectItem>
                        <SelectItem value="integrer-top5">Intégrer le TOP 5</SelectItem>
                        <SelectItem value="ameliorer-notes">Améliorer mes notes</SelectItem>
                        <SelectItem value="rattraper-retard">Rattraper mon retard</SelectItem>
                        <SelectItem value="preparation-concours">Préparation concours</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="font-medium mb-2 block">
                      Quelle matière veux‑tu travailler ?
                    </label>
                    <Select value={subject} onValueChange={setSubject} required>
                      <SelectTrigger className="bg-white">
                        <SelectValue placeholder="Choisir…" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="maths">Mathématiques</SelectItem>
                        <SelectItem value="python">Python</SelectItem>
                        <SelectItem value="anglais">Anglais</SelectItem>
                        <SelectItem value="espagnol">Espagnol</SelectItem>
                        <SelectItem value="allemand">Allemand</SelectItem>
                        <SelectItem value="geopolitique">Géopolitique</SelectItem>
                        <SelectItem value="entretiens">Entretiens de personnalité</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="font-medium mb-2 block">
                      Ton niveau actuel
                    </label>
                    <Select value={level} onValueChange={setLevel} required>
                      <SelectTrigger className="bg-white">
                        <SelectValue placeholder="Choisir…" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="debutant">Débutant</SelectItem>
                        <SelectItem value="intermediaire">Intermédiaire</SelectItem>
                        <SelectItem value="avance">Avancé</SelectItem>
                        <SelectItem value="expert">Expert</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="font-medium mb-2 block">
                      Ton email pour recevoir un plan gratuit
                    </label>
                    <Input
                      type="email"
                      placeholder="ton@email.com"
                      value={qcmEmail}
                      onChange={(e) => setQcmEmail(e.target.value)}
                      required
                      className="bg-white"
                    />
                  </div>
                </div>

                <div className="text-center">
                  <Button
                    type="submit"
                    className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg font-semibold"
                  >
                    Voir ma recommandation
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Offres Section */}
          <div className="grid md:grid-cols-2 gap-6">
            
            {/* Offre LIBRE */}
            <Card className="border-2 border-primary">
              <CardHeader className="text-center">
                <div className="bg-primary text-white px-3 py-1 rounded-full inline-block text-sm font-bold mb-2">
                  LIBRE
                </div>
                <CardTitle className="text-xl">Chapitres Maths Gratuits !</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Suites, Séries, Intégrales impropres - Cours + Exercices + Quiz
                </p>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-2xl font-bold text-primary mb-4">GRATUIT</div>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Accéder gratuitement
                </Button>
              </CardContent>
            </Card>

            {/* Sessions Live */}
            <Card className="border-2 border-orange-500">
              <CardHeader className="text-center">
                <div className="bg-orange-500 text-white px-3 py-1 rounded-full inline-block text-sm font-bold mb-2">
                  GRATUIT
                </div>
                <CardTitle className="text-xl">Sessions Live Gratuites !</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Préparation rentrée ECG1/ECG2 - 15 & 16 août 2025
                </p>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-lg font-semibold text-orange-600 mb-4">
                  <Calendar className="w-5 h-5 inline mr-2" />
                  15 & 16 août 2025
                </div>
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                  <Users className="w-4 h-4 mr-2" />
                  S'inscrire gratuitement
                </Button>
              </CardContent>
            </Card>

            {/* Organisation été */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Target className="w-5 h-5 mr-2 text-primary" />
                  Tu veux t'organiser mieux cet été ?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Planning personnalisé + méthodes pour une rentrée sans stress.
                </p>
                <Button variant="outline" className="w-full">
                  Découvrir
                </Button>
              </CardContent>
            </Card>

            {/* Coaching Maths */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Calculator className="w-5 h-5 mr-2 text-primary" />
                  Besoin de coaching en Maths ?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Suivi personnalisé pour +5 points — progression garantie.
                </p>
                <Button variant="outline" className="w-full">
                  En savoir plus
                </Button>
              </CardContent>
            </Card>

          </div>

        </div>
      </div>
    </>
  );
}