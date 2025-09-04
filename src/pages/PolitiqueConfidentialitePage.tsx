import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Database, Eye, Lock, Mail, User, Calendar } from "lucide-react";
import Navigation from '@/components/Navigation';

export default function PolitiqueConfidentialitePage() {
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
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-primary mb-4 flex items-center justify-center gap-3">
              <Shield className="w-10 h-10" />
              Politique de Confidentialité
            </h1>
            <p className="text-muted-foreground text-lg">
              Comment nous protégeons vos données personnelles
            </p>
          </div>

          <div className="space-y-6">

            {/* Introduction */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Introduction</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p>
                    Prépa Rationnelle s'engage à protéger la confidentialité et la sécurité de vos données personnelles. Cette politique de confidentialité explique comment nous collectons, utilisons, stockons et protégeons vos informations.
                  </p>
                  <p>
                    En utilisant notre site web et nos services, vous acceptez les pratiques décrites dans cette politique.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Dernière mise à jour : 15 décembre 2024
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Données collectées */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Database className="w-6 h-6 text-primary" />
                  Données personnelles collectées
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Informations que vous nous fournissez directement :</h3>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>Nom et prénom</li>
                      <li>Adresse e-mail</li>
                      <li>Numéro de téléphone</li>
                      <li>Messages envoyés via nos formulaires de contact</li>
                      <li>Informations relatives à vos objectifs d'études et niveau actuel</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">Informations collectées automatiquement :</h3>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>Adresse IP</li>
                      <li>Type de navigateur et version</li>
                      <li>Pages visitées et durée de consultation</li>
                      <li>Source de trafic (référencement, réseaux sociaux, etc.)</li>
                      <li>Données de performance du site</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Finalités du traitement */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Eye className="w-6 h-6 text-primary" />
                  Finalités du traitement de vos données
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p>Vos données personnelles sont collectées et traitées pour :</p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li><strong>Répondre à vos demandes :</strong> Traiter vos messages et questions via nos formulaires de contact</li>
                    <li><strong>Vous fournir nos services :</strong> Accès aux formations, exercices et contenus pédagogiques</li>
                    <li><strong>Personnaliser votre expérience :</strong> Adapter les recommandations selon votre profil et vos objectifs</li>
                    <li><strong>Améliorer notre site :</strong> Analyser l'utilisation du site pour optimiser les fonctionnalités</li>
                    <li><strong>Communications marketing :</strong> Vous informer de nos actualités et offres (avec votre consentement)</li>
                    <li><strong>Sécurité et conformité :</strong> Prévenir les fraudes et assurer la sécurité de notre plateforme</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Base légale */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Shield className="w-6 h-6 text-primary" />
                  Base légale du traitement
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p>Le traitement de vos données personnelles repose sur :</p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li><strong>Votre consentement :</strong> Pour les communications marketing et l'utilisation de cookies non essentiels</li>
                    <li><strong>L'exécution d'un contrat :</strong> Pour fournir les services que vous avez demandés</li>
                    <li><strong>Notre intérêt légitime :</strong> Pour améliorer nos services et assurer la sécurité</li>
                    <li><strong>Une obligation légale :</strong> Pour nous conformer aux réglementations en vigueur</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Partage des données */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <User className="w-6 h-6 text-primary" />
                  Partage de vos données personnelles
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p>Nous ne vendons, n'échangeons ni ne louons vos données personnelles à des tiers.</p>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">Nous pouvons partager vos données avec :</h3>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li><strong>Nos prestataires techniques :</strong> Hébergeur (Vercel), services d'analyse (PostHog)</li>
                      <li><strong>Autorités légales :</strong> Si requis par la loi ou pour protéger nos droits</li>
                      <li><strong>Vos communications WhatsApp :</strong> Lorsque vous utilisez notre formulaire de contact</li>
                    </ul>
                  </div>

                  <p>
                    Tous nos partenaires sont contractuellement tenus de respecter la confidentialité de vos données et de les traiter uniquement selon nos instructions.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Cookies et technologies similaires */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Database className="w-6 h-6 text-primary" />
                  Cookies et technologies similaires
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Cookies essentiels :</h3>
                    <p className="text-muted-foreground">
                      Nécessaires au fonctionnement du site (authentification, sécurité). Ces cookies sont activés par défaut et ne peuvent pas être désactivés.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">Cookies analytiques :</h3>
                    <p className="text-muted-foreground">
                      Utilisés pour comprendre comment vous utilisez notre site et améliorer nos services (PostHog). Ces données sont anonymisées.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">Gestion des cookies :</h3>
                    <p className="text-muted-foreground">
                      Vous pouvez gérer vos préférences de cookies via les paramètres de votre navigateur ou en nous contactant.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Sécurité des données */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Lock className="w-6 h-6 text-primary" />
                  Sécurité de vos données
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p>Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données :</p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Chiffrement des données en transit (HTTPS)</li>
                    <li>Stockage sécurisé chez des hébergeurs certifiés</li>
                    <li>Accès limité aux données personnelles</li>
                    <li>Surveillance et mise à jour régulières de sécurité</li>
                    <li>Sauvegardes régulières des données</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Durée de conservation */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Calendar className="w-6 h-6 text-primary" />
                  Durée de conservation des données
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p>Nous conservons vos données personnelles uniquement le temps nécessaire aux finalités pour lesquelles elles ont été collectées :</p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li><strong>Données de contact :</strong> 3 ans après votre dernier contact</li>
                    <li><strong>Données d'inscription :</strong> Durée de votre abonnement plus 3 ans</li>
                    <li><strong>Cookies analytiques :</strong> 13 mois maximum</li>
                    <li><strong>Données de facturation :</strong> 10 ans (obligation légale)</li>
                  </ul>
                  <p>
                    Au-delà de ces délais, vos données sont supprimées ou anonymisées.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Vos droits */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <User className="w-6 h-6 text-primary" />
                  Vos droits concernant vos données
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p>Conformément au RGPD, vous disposez des droits suivants :</p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li><strong>Droit d'accès :</strong> Connaître les données personnelles que nous détenons sur vous</li>
                    <li><strong>Droit de rectification :</strong> Corriger des données inexactes ou incomplètes</li>
                    <li><strong>Droit à l'effacement :</strong> Demander la suppression de vos données</li>
                    <li><strong>Droit à la portabilité :</strong> Recevoir vos données dans un format structuré</li>
                    <li><strong>Droit d'opposition :</strong> Refuser certains traitements de vos données</li>
                    <li><strong>Droit à la limitation :</strong> Demander la limitation du traitement de vos données</li>
                  </ul>

                  <div className="mt-4 p-4 bg-orange-50 rounded-lg">
                    <p className="font-medium text-orange-800 mb-2">Pour exercer vos droits :</p>
                    <p className="text-orange-700">
                      Contactez-nous par email : <a href="mailto:preparationnelle@gmail.com" className="underline">preparationnelle@gmail.com</a>
                    </p>
                    <p className="text-orange-700 text-sm mt-2">
                      Nous répondrons à votre demande dans un délai d'un mois maximum.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Mail className="w-6 h-6 text-primary" />
                  Contact et réclamations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p>
                    Pour toute question concernant cette politique de confidentialité ou pour exercer vos droits, contactez-nous :
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

                  <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                    <p className="font-medium text-blue-800 mb-2">Réclamation auprès de la CNIL :</p>
                    <p className="text-blue-700 text-sm">
                      Si vous estimez que vos droits ne sont pas respectés, vous pouvez adresser une réclamation à la Commission Nationale de l'Informatique et des Libertés (CNIL) :
                    </p>
                    <p className="text-blue-700 text-sm mt-2">
                      Site web : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="underline">www.cnil.fr</a>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Modifications */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Modifications de cette politique</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p>
                    Nous pouvons modifier cette politique de confidentialité à tout moment pour refléter les évolutions de nos pratiques ou des réglementations.
                  </p>
                  <p>
                    Les modifications significatives vous seront notifiées par email ou via une notification sur notre site.
                  </p>
                  <p>
                    La version la plus récente est toujours disponible sur cette page.
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
