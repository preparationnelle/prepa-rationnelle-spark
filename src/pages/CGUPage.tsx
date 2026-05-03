import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileCheck, Users, AlertTriangle, Shield, Scale, Globe } from "lucide-react";
import Navigation from '@/components/Navigation';

export default function CGUPage() {
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
              <FileCheck className="w-10 h-10" />
              Conditions Générales d'Utilisation
            </h1>
            <p className="text-muted-foreground text-lg">
              Règles d'utilisation de la plateforme Prépa Rationnelle
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
                    Les présentes Conditions Générales d'Utilisation (CGU) régissent l'utilisation du site internet Prépa Rationnelle et de ses services associés.
                  </p>
                  <p>
                    En accédant à notre plateforme et en utilisant nos services, vous acceptez d'être lié par ces CGU. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser notre site.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Dernière mise à jour : 15 décembre 2024
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Définitions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <FileCheck className="w-6 h-6 text-primary" />
                  Définitions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium">"Prépa Rationnelle" ou "nous" :</p>
                    <p className="text-muted-foreground">La plateforme de formation et ses services associés.</p>
                  </div>
                  <div>
                    <p className="font-medium">"Utilisateur" ou "vous" :</p>
                    <p className="text-muted-foreground">Toute personne utilisant notre site et nos services.</p>
                  </div>
                  <div>
                    <p className="font-medium">"Contenu" :</p>
                    <p className="text-muted-foreground">Tous les éléments pédagogiques, textes, exercices, vidéos disponibles sur la plateforme.</p>
                  </div>
                  <div>
                    <p className="font-medium">"Services" :</p>
                    <p className="text-muted-foreground">L'ensemble des fonctionnalités offertes par Prépa Rationnelle (formations, exercices, quiz, etc.).</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Accès au service */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Globe className="w-6 h-6 text-primary" />
                  Accès au service
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p>L'accès à Prépa Rationnelle est gratuit pour la plupart des contenus. Certains services peuvent nécessiter une inscription ou un abonnement.</p>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">Conditions d'accès :</h3>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>Être majeur ou mineur émancipé</li>
                      <li>Disposer d'une connexion internet</li>
                      <li>Utiliser un navigateur web compatible</li>
                      <li>Accepter ces CGU et notre politique de confidentialité</li>
                    </ul>
                  </div>

                  <p>
                    Nous nous réservons le droit de suspendre ou refuser l'accès à tout utilisateur ne respectant pas ces conditions.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Utilisation des services */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Users className="w-6 h-6 text-primary" />
                  Utilisation des services
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p>Vous vous engagez à utiliser Prépa Rationnelle de manière loyale et responsable.</p>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">Vous êtes autorisé à :</h3>
                    <ul className="list-disc list-inside space-y-1 text-green-700">
                      <li>Utiliser les contenus pour votre formation personnelle</li>
                      <li>Partager les liens vers nos ressources publiques</li>
                      <li>Contacter notre équipe pour obtenir de l'aide</li>
                      <li>Participer aux exercices et quiz disponibles</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">Il est strictement interdit de :</h3>
                    <ul className="list-disc list-inside space-y-1 text-red-700">
                      <li>Copier, reproduire ou distribuer nos contenus sans autorisation</li>
                      <li>Utiliser des robots ou scripts automatisés</li>
                      <li>Tenter de pirater ou compromettre la sécurité du site</li>
                      <li>Publier des contenus offensants ou illégaux</li>
                      <li>Usurper l'identité d'autres utilisateurs</li>
                      <li>Perturber le fonctionnement normal du service</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Propriété intellectuelle */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Shield className="w-6 h-6 text-primary" />
                  Propriété intellectuelle
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p>
                    Tous les contenus présents sur Prépa Rationnelle (textes, exercices, vidéos, graphismes, logos, logiciels) sont protégés par le droit d'auteur et la propriété intellectuelle.
                  </p>
                  <p>
                    Prépa Rationnelle est titulaire des droits de propriété intellectuelle sur l'ensemble du site et de son contenu, sauf mention contraire.
                  </p>
                  <p>
                    Toute reproduction, modification, distribution ou exploitation commerciale de nos contenus est strictement interdite sans autorisation préalable écrite.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Responsabilité */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <AlertTriangle className="w-6 h-6 text-primary" />
                  Responsabilité
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Responsabilité de Prépa Rationnelle :</h3>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>Nous nous efforçons d'assurer l'exactitude des contenus pédagogiques</li>
                      <li>Nous garantissons la disponibilité de nos services dans la limite du raisonnable</li>
                      <li>Nous protégeons vos données personnelles selon notre politique de confidentialité</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">Limitations de responsabilité :</h3>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>Prépa Rationnelle ne peut garantir l'atteinte de résultats spécifiques dans vos études</li>
                      <li>Nous ne sommes pas responsables des interruptions de service dues à des causes externes</li>
                      <li>Notre responsabilité est limitée aux dommages directs et prévisibles</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">Votre responsabilité :</h3>
                    <p className="text-muted-foreground">
                      Vous êtes responsable de l'utilisation que vous faites de nos services et des conséquences de vos actions.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Données personnelles */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Shield className="w-6 h-6 text-primary" />
                  Données personnelles
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p>
                    Le traitement de vos données personnelles est régi par notre <a href="/politique-confidentialite" className="text-primary hover:underline">Politique de confidentialité</a>.
                  </p>
                  <p>
                    En utilisant nos services, vous consentez à la collecte et au traitement de vos données dans les conditions décrites dans cette politique.
                  </p>
                  <p>
                    Vous disposez de droits d'accès, de rectification, d'effacement et de portabilité de vos données.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Modifications des CGU */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <FileCheck className="w-6 h-6 text-primary" />
                  Modifications des CGU
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p>
                    Prépa Rationnelle se réserve le droit de modifier ces CGU à tout moment pour s'adapter aux évolutions de nos services ou des réglementations.
                  </p>
                  <p>
                    Les modifications seront notifiées aux utilisateurs par email ou via une notification sur le site.
                  </p>
                  <p>
                    L'utilisation continue de nos services après modification vaut acceptation des nouvelles conditions.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Résiliation */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Users className="w-6 h-6 text-primary" />
                  Résiliation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p>
                    Vous pouvez cesser d'utiliser nos services à tout moment sans préavis.
                  </p>
                  <p>
                    Prépa Rationnelle peut suspendre ou résilier votre accès en cas de violation de ces CGU, après vous avoir informé des motifs de cette décision.
                  </p>
                  <p>
                    En cas de résiliation, vos données personnelles seront supprimées selon les délais prévus par notre politique de confidentialité.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Droit applicable */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Scale className="w-6 h-6 text-primary" />
                  Droit applicable et règlement des litiges
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p>
                    Ces CGU sont régies par le droit français. Tout litige relatif à leur interprétation ou exécution sera soumis à la compétence exclusive des tribunaux français.
                  </p>
                  <p>
                    En cas de litige, nous privilégions une résolution amiable. Contactez-nous d'abord à l'adresse : preparationnelle@gmail.com
                  </p>
                  <p>
                    Si aucun accord n'est trouvé, le litige sera porté devant les tribunaux de Paris.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Contact</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p>
                    Pour toute question concernant ces CGU ou signalement d'un problème, contactez-nous :
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-muted-foreground">preparationnelle@gmail.com</p>
                    </div>
                    <div>
                      <p className="font-medium">Adresse postale</p>
                      <p className="text-muted-foreground">Prépa Rationnelle<br />50 rue des 3 frères<br />75018 Paris</p>
                    </div>
                  </div>
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
