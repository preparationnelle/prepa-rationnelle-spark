import React, { useState, useEffect } from 'react';
import { ArrowLeft, Calendar, Users, Award, Mail, Phone, Download, CheckCircle, Play, ExternalLink, HelpCircle, CreditCard } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';

const PreRentreePage = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'stripe' | 'virement'>('stripe');
  const [showRIBModal, setShowRIBModal] = useState(false);
  const [formData, setFormData] = useState({
    prenom: '',
    nom: '',
    email: '',
    telephone: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sendRIBEmail = async (userData: typeof formData) => {
    try {
      // Envoi d'email de notification à preparationnelle@gmail.com
      const response = await fetch('/api/send-rib-notification', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: 'preparationnelle@gmail.com',
          subject: 'Nouvelle inscription par virement - Stage de Pré-entrée',
          userData,
          amount: '199€',
          reference: `PRENTREE-${userData.nom.toUpperCase()}-${userData.email.split('@')[0]}`
        }),
      });

      if (response.ok) {
        toast.success("Inscription enregistrée ! Nous vous enverrons le RIB par email sous 24h.");
        setShowRIBModal(true);
      } else {
        throw new Error('Erreur lors de l\'envoi');
      }
    } catch (error) {
      toast.error("Erreur lors de l'enregistrement. Contactez-nous directement.");
      console.error('Erreur envoi notification:', error);
    }
  };

  const handleStripePayment = async (userData: typeof formData) => {
    try {
      // Créer une session de paiement Stripe
      const response = await fetch('/api/create-stripe-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userData,
          amount: 19900, // 199€ en centimes
          description: 'Stage de Pré-entrée - 18-23 août 2025',
          successUrl: `${window.location.origin}/offres/pre-rentree?success=true`,
          cancelUrl: `${window.location.origin}/offres/pre-rentree?canceled=true`,
        }),
      });

      if (response.ok) {
        const { sessionUrl } = await response.json();
        // Redirection vers Stripe Checkout
        window.location.href = sessionUrl;
      } else {
        throw new Error('Erreur lors de la création de la session de paiement');
      }
    } catch (error) {
      toast.error("Erreur lors de la redirection vers le paiement. Contactez-nous directement.");
      console.error('Erreur Stripe:', error);
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (paymentMethod === 'stripe') {
      // Redirection vers Stripe Checkout
      toast.success("Redirection vers le paiement sécurisé Stripe...");
      await handleStripePayment(formData);
    } else {
      // Envoi de notification pour virement manuel
      await sendRIBEmail(formData);
    }
  };

  const handleVideoPlay = () => {
    setIsVideoLoaded(true);
  };

  const scrollToInscription = () => {
    document.getElementById('inscription')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContactSupport = () => {
    document.getElementById('contact-support')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Vérifier les paramètres URL pour les messages de paiement
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const success = urlParams.get('success');
    const canceled = urlParams.get('canceled');

    if (success === 'true') {
      toast.success("Paiement réussi ! Votre inscription au stage est confirmée. Vous recevrez un email de confirmation sous 24h.");
      // Nettoyer l'URL
      window.history.replaceState({}, document.title, window.location.pathname);
    } else if (canceled === 'true') {
      toast.error("Paiement annulé. Vous pouvez réessayer ou nous contacter pour un paiement par virement.");
      // Nettoyer l'URL
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#F0F8FF]">
      {/* Navigation de retour */}
      <nav className="pt-6 pb-4 px-4">
        <div className="max-w-6xl mx-auto">
          <Button variant="ghost" asChild className="text-gray-600 hover:text-gray-900">
            <Link to="/stage-accompagnement">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour aux offres
            </Link>
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pb-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Stage de Pré-entrée
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            18-23 août 2025 • 6 jours intensifs • 199€
          </p>
        </div>
      </section>

      {/* Section Vidéo d'explication du stage */}
      <section id="video" className="pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="p-6 bg-gray-50/50 border border-gray-200/50 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">
              Vidéo d'explication du stage
            </h2>
            
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-orange-500 to-red-500 rounded-xl overflow-hidden">
                {!isVideoLoaded ? (
                  // Overlay avec bouton play (avant chargement)
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-orange-500 to-red-500 relative">
                    <div className="absolute inset-0 bg-black/20"></div>
                    <Button
                      onClick={handleVideoPlay}
                      size="lg"
                      className="relative z-10 bg-white/90 hover:bg-white text-gray-900 border-0 shadow-lg"
                      aria-label="Lire la vidéo de présentation du stage"
                    >
                      <Play className="w-8 h-8 mr-2" />
                      Regarder la présentation
                    </Button>
                  </div>
                ) : (
                  // Iframe chargée au clic (lazy-load)
                  <iframe
                    className="w-full h-full rounded-xl"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                    title="Vidéo — Stage de Pré-entrée"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                )}
              </div>
            </div>
            
            <p className="text-gray-600 text-center mt-4">
              Découvrez en 2 min le déroulé du stage
            </p>
          </Card>
        </div>
      </section>

      {/* Section Résumé & prochaines étapes */}
      <section id="resume" className="pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 bg-white border border-gray-200/50 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
              Pourquoi ce stage change la donne
            </h2>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <p className="text-gray-700">
                  <strong>Méthode validée concours :</strong> on remplace l'impro totale par un plan clair, des entraînements ciblés et un suivi après le stage.
                </p>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <p className="text-gray-700">
                  <strong>Programme en 6 jours :</strong> hacks de copie, analyse concours, proba, algèbre, Python appliqué, sujet live corrigé.
                </p>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <p className="text-gray-700">
                  <strong>Tout est prêt :</strong> fiches PDF, scripts Python à copier-coller, WhatsApp réactif, appel individuel post-stage.
                </p>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <p className="text-gray-700">
                  <strong>Garantie 48 h :</strong> tu essaies la première séance, remboursement intégral si tu n'es pas convaincu.
                </p>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <p className="text-gray-700">
                  <strong>Places limitées :</strong> session du 18–23 août.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
              <Button
                asChild
                variant="outline"
                className="border-orange-500 text-orange-600 hover:bg-orange-50"
              >
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Download className="w-4 h-4 mr-2" />
                  Télécharger le PDF
                </a>
              </Button>
              
              <Button
                onClick={scrollToInscription}
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white"
              >
                S'inscrire maintenant
              </Button>
            </div>

            <p className="text-sm text-gray-500 text-center">
              199 € tout compris (supports + suivi). Prochaine session en octobre si complet.
            </p>
          </Card>
        </div>
      </section>



      {/* Section 1 - Inscription au stage */}
      <section id="inscription" className="py-8 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Inscription au Stage de Pré-entrée
          </h2>

          <Card className="p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Informations personnelles
            </h3>
            
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Prénom *
                  </label>
                  <input
                    type="text"
                    name="prenom"
                    value={formData.prenom}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Votre prénom"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nom *
                  </label>
                  <input
                    type="text"
                    name="nom"
                    value={formData.nom}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Votre nom"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="votre.email@exemple.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Téléphone *
                </label>
                <input
                  type="tel"
                  name="telephone"
                  value={formData.telephone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="06 XX XX XX XX"
                />
              </div>

              {/* Options de paiement */}
              <div className="mt-6">
                <h4 className="text-lg font-medium text-gray-900 mb-4">
                  Mode de paiement
                </h4>
                
                <div className="space-y-3">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="payment"
                      value="stripe"
                      checked={paymentMethod === 'stripe'}
                      onChange={(e) => setPaymentMethod(e.target.value as 'stripe')}
                      className="mr-3 text-orange-600 focus:ring-orange-500"
                    />
                    <span className="text-gray-700">Paiement par carte (Stripe) - <strong>Recommandé</strong></span>
                  </label>
                  
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="payment"
                      value="virement"
                      checked={paymentMethod === 'virement'}
                      onChange={(e) => setPaymentMethod(e.target.value as 'virement')}
                      className="mr-3 text-orange-600 focus:ring-orange-500"
                    />
                    <span className="text-gray-700">Paiement par virement bancaire (RIB)</span>
                  </label>
                </div>
              </div>

              <Button 
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white min-h-[44px] mt-6"
              >
                Procéder au paiement
              </Button>
            </form>
          </Card>
        </div>
      </section>

      {/* Section 2 - Besoin d'aide ? */}
      <section id="contact-support" className="py-8 px-4 bg-[#F0F8FF]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Besoin d'aide ?
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contacts */}
            <Card className="p-6 bg-white">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                <HelpCircle className="w-5 h-5 text-orange-500 mr-2" />
                Contacts & support
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-orange-500" />
                  <a 
                    href="mailto:preparationnelle@gmail.com"
                    className="text-gray-700 hover:text-orange-600 underline"
                  >
                    preparationnelle@gmail.com
                  </a>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-orange-500" />
                  <a 
                    href="tel:+33609164668"
                    className="text-gray-700 hover:text-orange-600 underline"
                  >
                    06 09 16 46 68
                  </a>
                </div>
                
                <div className="pt-4">
                  <Button
                    asChild
                    className="w-full bg-green-500 hover:bg-green-600 text-white"
                  >
                    <a 
                      href="https://wa.me/33609164668"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Rejoindre le groupe WhatsApp
                    </a>
                  </Button>
                </div>

                <div className="pt-4">
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-orange-500 text-orange-600 hover:bg-orange-50"
                  >
                    <a href="mailto:preparationnelle@gmail.com?subject=Question Stage Pré-entrée">
                      <Mail className="w-4 h-4 mr-2" />
                      Poser une question
                    </a>
                  </Button>
                </div>
              </div>
            </Card>

            {/* FAQ */}
            <Card className="p-6 bg-white">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                💡 Questions fréquentes
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">Horaires</p>
                    <p className="text-sm text-gray-600">9h-17h chaque jour</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">Support technique</p>
                    <p className="text-sm text-gray-600">Inclus dans le stage</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">Replays</p>
                    <p className="text-sm text-gray-600">Enregistrements disponibles</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">Garantie</p>
                    <p className="text-sm text-gray-600">Satisfaction 48h</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Modal RIB */}
      {showRIBModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Card className="p-6 max-w-lg w-full">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              ✅ Inscription enregistrée !
            </h3>
            <div className="space-y-4 mb-6">
              <p className="text-gray-700">
                Merci pour votre inscription ! Nous avons bien reçu votre demande de paiement par virement.
              </p>
              
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h4 className="font-medium text-blue-800 mb-2">📋 Prochaines étapes :</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Nous vous enverrons notre RIB par email sous 24h</li>
                  <li>• Montant à régler : <strong>199€</strong></li>
                  <li>• Référence : <strong>PRENTREE-{formData.nom.toUpperCase()}-{formData.email.split('@')[0]}</strong></li>
                  <li>• Votre place sera confirmée après réception du paiement</li>
                </ul>
              </div>
              
              <p className="text-sm text-gray-600">
                Si vous avez des questions, contactez-nous directement par email ou téléphone.
              </p>
            </div>
            
            <div className="flex space-x-3">
              <Button
                onClick={() => setShowRIBModal(false)}
                className="flex-1 bg-orange-500 hover:bg-orange-600 text-white"
              >
                Compris
              </Button>
              <Button
                asChild
                variant="outline"
                className="flex-1"
              >
                <a href="mailto:preparationnelle@gmail.com?subject=Question Inscription Stage Pré-entrée">
                  Nous contacter
                </a>
              </Button>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};

export default PreRentreePage;