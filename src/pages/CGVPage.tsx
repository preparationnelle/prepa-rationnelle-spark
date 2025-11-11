import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CreditCard, Euro, FileText, AlertTriangle, RefreshCw, Shield, Truck } from "lucide-react";
import Navigation from '@/components/Navigation';

export default function CGVPage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-accent py-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Floating bubbles - Blue and Orange mix like landing page */}
        <div className="absolute -z-10 top-20 left-10 w-32 h-32 bg-orange-200 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute -z-10 bottom-20 right-10 w-28 h-28 bg-blue-200 rounded-full opacity-10 animate-pulse-slow"></div>
        <div className="absolute -z-10 top-40 right-20 w-48 h-48 bg-orange-100 rounded-full opacity-10 animate-pulse-slow"></div>
        <div className="absolute -z-10 bottom-40 left-20 w-56 h-56 bg-orange-200 rounded-full opacity-5 animate-pulse"></div>
        <div className="absolute -z-10 top-1/4 left-1/3 w-64 h-64 bg-orange-50 rounded-full opacity-10 animate-pulse-slow"></div>
        <div className="absolute -z-10 top-3/4 right-1/4 w-40 h-40 bg-blue-100 rounded-full opacity-5 animate-pulse"></div>
        <div className="absolute -z-10 top-1/2 left-10 w-24 h-24 bg-orange-100 rounded-full opacity-10 animate-pulse-slow"></div>
        <div className="absolute -z-10 bottom-1/3 right-5 w-36 h-36 bg-blue-50 rounded-full opacity-5 animate-pulse"></div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-primary mb-4 flex items-center justify-center gap-3">
              <CreditCard className="w-10 h-10" />
              Conditions Générales de Vente
            </h1>
            <p className="text-muted-foreground text-lg">
              Règles applicables aux achats sur Prépa Rationnelle
            </p>
          </div>

          <div className="space-y-6">

            {/* Préambule */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Préambule</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p>
                    Les présentes Conditions Générales de Vente (CGV) s'appliquent à tous les achats effectués sur la plateforme Prépa Rationnelle.
                  </p>
                  <p>
                    En passant commande sur notre site, vous acceptez pleinement et sans réserve ces CGV. Elles prévalent sur toutes autres conditions, sauf dérogation préalable et écrite de notre part.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Dernière mise à jour : 15 décembre 2024
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Produits et services */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <FileText className="w-6 h-6 text-primary" />
                  Produits et services
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p>Prépa Rationnelle propose les services suivants :</p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li><strong>Contenus gratuits :</strong> Accès libre à certains cours, exercices et ressources pédagogiques</li>
                    <li><strong>Contenus premium :</strong> Accès complet aux formations complètes, exercices avancés et quiz personnalisés</li>
                    <li><strong>Coaching individuel :</strong> Sessions de coaching personnalisées en maths, Python et autres matières</li>
                    <li><strong>Organisation d'été :</strong> Planning personnalisé et méthodes pour une préparation efficace</li>
                    <li><strong>Stages et accompagnements :</strong> Programmes intensifs de préparation aux concours</li>
                  </ul>

                  <p>
                    Les descriptions détaillées de chaque service sont disponibles sur les pages dédiées de notre site.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Prix et paiement */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Euro className="w-6 h-6 text-primary" />
                  Prix et paiement
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Tarification :</h3>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>Les prix sont affichés en euros TTC (Toutes Taxes Comprises)</li>
                      <li>Les prix peuvent être modifiés à tout moment, sans préavis</li>
                      <li>Le prix applicable est celui en vigueur au moment de la commande</li>
                      <li>Les frais de port sont offerts pour tous nos services numériques</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">Moyens de paiement acceptés :</h3>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>Carte bancaire (Visa, MasterCard, American Express)</li>
                      <li>Virement bancaire</li>
                      <li>PayPal</li>
                      <li>Autres moyens de paiement selon les offres disponibles</li>
                    </ul>
                  </div>

                  <p>
                    Le paiement est exigible immédiatement à la commande. En cas de retard de paiement, des pénalités de retard pourront être appliquées.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Commande */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <CreditCard className="w-6 h-6 text-primary" />
                  Processus de commande
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Étapes de commande :</h3>
                    <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                      <li>Sélection du service souhaité</li>
                      <li>Vérification du panier et des informations</li>
                      <li>Saisie des coordonnées de facturation</li>
                      <li>Choix du mode de paiement</li>
                      <li>Validation définitive de la commande</li>
                      <li>Réception d'un email de confirmation</li>
                    </ol>
                  </div>

                  <p>
                    Toute commande passée constitue une acceptation ferme et définitive des prix, des descriptions des produits et des CGV.
                  </p>

                  <p>
                    Un email de confirmation vous sera envoyé récapitulant les détails de votre commande.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Droit de rétractation */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <RefreshCw className="w-6 h-6 text-primary" />
                  Droit de rétractation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p>
                    Conformément à l'article L.221-18 du Code de la consommation, vous disposez d'un délai de 14 jours francs à compter de la date de conclusion du contrat pour exercer votre droit de rétractation.
                  </p>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">Exceptions au droit de rétractation :</h3>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>Contenus numériques fournis sur support immatériel (formations en ligne)</li>
                      <li>Services d'accompagnement personnalisé déjà commencés</li>
                      <li>Sessions de coaching déjà réalisées</li>
                    </ul>
                  </div>

                  <p>
                    Pour exercer votre droit de rétractation, contactez-nous par email à : preparationnelle@gmail.com
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Livraison et exécution */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Truck className="w-6 h-6 text-primary" />
                  Livraison et exécution des services
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Services numériques :</h3>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>Accès immédiat après paiement confirmé</li>
                      <li>Accès par email et identifiants personnels</li>
                      <li>Disponibilité 24h/24, 7j/7</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">Services de coaching :</h3>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>Planification des séances selon vos disponibilités</li>
                      <li>Réalisation via visioconférence ou en présentiel</li>
                      <li>Confirmation des créneaux 48h à l'avance</li>
                    </ul>
                  </div>

                  <p>
                    En cas de retard dans l'exécution d'un service, nous vous informerons dans les plus brefs délais et conviendrons d'une solution adaptée.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Garantie et responsabilité */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Shield className="w-6 h-6 text-primary" />
                  Garantie et responsabilité
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Garantie de satisfaction :</h3>
                    <p className="text-muted-foreground">
                      Nous nous engageons à fournir des services de qualité. Si vous n'êtes pas satisfait, contactez-nous pour trouver une solution adaptée.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">Limitations de responsabilité :</h3>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>Prépa Rationnelle ne garantit pas l'atteinte de résultats spécifiques dans vos études</li>
                      <li>Notre responsabilité est limitée au montant payé pour le service concerné</li>
                      <li>Nous ne sommes pas responsables des interruptions dues à des causes externes</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Protection des données */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Shield className="w-6 h-6 text-primary" />
                  Protection des données personnelles
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p>
                    Le traitement de vos données personnelles est régi par notre <a href="/politique-confidentialite" className="text-primary hover:underline">Politique de confidentialité</a>.
                  </p>
                  <p>
                    Nous nous engageons à protéger vos données et à ne les utiliser que pour les finalités liées à l'exécution de votre commande.
                  </p>
                  <p>
                    Vous disposez des droits d'accès, de rectification et d'effacement de vos données.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Résiliation et remboursement */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <AlertTriangle className="w-6 h-6 text-primary" />
                  Résiliation et remboursement
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Politique de remboursement :</h3>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li><strong>Services numériques :</strong> Remboursement possible dans les 14 jours si non utilisé</li>
                      <li><strong>Coaching individuel :</strong> Remboursement partiel si annulation 48h à l'avance</li>
                      <li><strong>Stages intensifs :</strong> Remboursement selon conditions spécifiques</li>
                    </ul>
                  </div>

                  <p>
                    Pour demander un remboursement, contactez-nous par email avec votre numéro de commande.
                  </p>

                  <p>
                    Les remboursements sont traités dans un délai de 14 jours ouvrés après validation de votre demande.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Service client */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <FileText className="w-6 h-6 text-primary" />
                  Service client et réclamations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p>
                    Notre équipe est à votre disposition pour toute question ou réclamation concernant vos achats.
                  </p>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-muted-foreground">preparationnelle@gmail.com</p>
                    </div>
                    <div>
                      <p className="font-medium">Téléphone</p>
                      <p className="text-muted-foreground">06 09 16 46 68</p>
                    </div>
                  </div>

                  <p>
                    Nous nous engageons à répondre à vos demandes dans un délai de 48h ouvrées.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Droit applicable */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Droit applicable et juridiction</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p>
                    Ces CGV sont régies par le droit français. Tout litige sera soumis à la compétence exclusive des tribunaux français.
                  </p>
                  <p>
                    En cas de litige, nous privilégions une résolution amiable avant toute action judiciaire.
                  </p>
                  <p>
                    Tout différend non résolu sera porté devant les tribunaux de Paris.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Modifications */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Modifications des CGV</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p>
                    Prépa Rationnelle se réserve le droit de modifier ces CGV à tout moment.
                  </p>
                  <p>
                    Les modifications s'appliquent aux commandes passées après leur publication.
                  </p>
                  <p>
                    Les CGV applicables sont celles en vigueur au moment de votre commande.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Section Liens utiles */}
            <div className="mt-6 space-y-4">
              <Card className="bg-gradient-to-r from-blue-50 to-orange-50 border-2 border-blue-200">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl text-center text-primary">
                    🌟 Découvrez nos formations
                  </CardTitle>
                  <p className="text-center text-muted-foreground text-sm">
                    Préparez-vous efficacement aux concours ECG avec nos formations complètes
                  </p>
                </CardHeader>
                <CardContent className="pt-2">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                    <div className="bg-white p-3 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                      <h3 className="font-semibold text-primary mb-1 text-sm">📊 Python en Prépa ECG</h3>
                      <p className="text-xs text-muted-foreground mb-2">
                        Maîtrisez Python pour réussir vos épreuves informatiques
                      </p>
                      <a
                        href="/pourquoi-python-prepa-ecg"
                        className="text-xs text-blue-600 hover:text-blue-800 font-medium"
                      >
                        En savoir plus →
                      </a>
                    </div>

                    <div className="bg-white p-3 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                      <h3 className="font-semibold text-primary mb-1 text-sm">🇬🇧 Anglais ECG</h3>
                      <p className="text-xs text-muted-foreground mb-2">
                        Formation complète grammaire et civilisation anglaise
                      </p>
                      <a
                        href="/formation/anglais"
                        className="text-xs text-blue-600 hover:text-blue-800 font-medium"
                      >
                        En savoir plus →
                      </a>
                    </div>

                    <div className="bg-white p-3 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                      <h3 className="font-semibold text-primary mb-1 text-sm">🇪🇸 Espagnol ECG</h3>
                      <p className="text-xs text-muted-foreground mb-2">
                        Grammaire et civilisation hispanique
                      </p>
                      <a
                        href="/formation/espagnol"
                        className="text-xs text-blue-600 hover:text-blue-800 font-medium"
                      >
                        En savoir plus →
                      </a>
                    </div>

                    <div className="bg-white p-3 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                      <h3 className="font-semibold text-primary mb-1 text-sm">🇩🇪 Allemand ECG</h3>
                      <p className="text-xs text-muted-foreground mb-2">
                        Formation complète grammaire et civilisation allemande
                      </p>
                      <a
                        href="/formation/allemand"
                        className="text-xs text-blue-600 hover:text-blue-800 font-medium"
                      >
                        En savoir plus →
                      </a>
                    </div>

                    <div className="bg-white p-3 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                      <h3 className="font-semibold text-primary mb-1 text-sm">🗺️ Géopolitique</h3>
                      <p className="text-xs text-muted-foreground mb-2">
                        Comprendre les enjeux mondiaux contemporains
                      </p>
                      <a
                        href="/formation/geopolitique"
                        className="text-xs text-blue-600 hover:text-blue-800 font-medium"
                      >
                        En savoir plus →
                      </a>
                    </div>

                    <div className="bg-white p-3 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                      <h3 className="font-semibold text-primary mb-1 text-sm">📚 Mathématiques</h3>
                      <p className="text-xs text-muted-foreground mb-2">
                        Maths Approfondies et Appliquées
                      </p>
                      <a
                        href="/formation/maths-choix"
                        className="text-xs text-blue-600 hover:text-blue-800 font-medium"
                      >
                        En savoir plus →
                      </a>
                    </div>
                  </div>

                  <div className="text-center mt-4">
                    <a
                      href="/formations"
                      className="inline-block bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors font-semibold text-sm"
                    >
                      Voir toutes nos formations
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Cours gratuit */}
              <Card className="bg-gradient-to-r from-orange-50 to-blue-50 border-2 border-orange-200">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-center text-primary">
                    🎁 Réservez votre cours gratuit !
                  </CardTitle>
                  <p className="text-center text-muted-foreground text-sm">
                    Découvrez notre pédagogie avec une première séance offerte
                  </p>
                </CardHeader>
                <CardContent className="text-center space-y-2 pt-2">
                  <div className="bg-white p-4 rounded-lg shadow-sm border">
                    <h3 className="font-semibold text-base text-primary mb-2">
                      💡 Session découverte gratuite
                    </h3>
                    <p className="text-muted-foreground mb-3 text-sm">
                      Évaluez votre niveau et découvrez nos méthodes avec un professeur expérimenté
                    </p>
                    <div className="space-y-1 text-xs text-muted-foreground mb-3">
                      <p>✓ Diagnostic personnalisé</p>
                      <p>✓ Conseils méthodologiques adaptés</p>
                      <p>✓ Aperçu de nos formations</p>
                      <p>✓ Sans engagement</p>
                    </div>
                    <a
                      href="/offre/gratuite"
                      className="inline-block bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors font-semibold text-sm"
                    >
                      📅 Cours gratuit
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
