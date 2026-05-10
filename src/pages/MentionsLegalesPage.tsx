import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Building, User, Mail, MapPin, Globe } from "lucide-react";

export default function MentionsLegalesPage() {
  return (
    <>
      <div className="min-h-screen bg-accent py-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Floating bubbles - Blue and Orange mix like landing page */}

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-primary mb-4 flex items-center justify-center gap-3">
              <FileText className="w-10 h-10" />
              Mentions Légales
            </h1>
            <p className="text-muted-foreground text-lg">
              Informations légales concernant Prépa Rationnelle
            </p>
          </div>

          <div className="space-y-6">

            {/* Éditeur du site */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Building className="w-6 h-6 text-primary" />
                  Éditeur du site
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Prépa Rationnelle</h3>
                  <p className="text-muted-foreground">
                    Société individuelle
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <User className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">Représentant légal</p>
                      <p className="text-muted-foreground">Dimitar Dimitrov</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-muted-foreground">preparationnelle@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">Adresse</p>
                      <p className="text-muted-foreground">50 rue des 3 frères, 75018 Paris</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">SIRET</p>
                      <p className="text-muted-foreground">Non assujetti (activité non commerciale)</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Hébergement */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Globe className="w-6 h-6 text-primary" />
                  Hébergement
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Vercel Inc.</h3>
                    <p className="text-muted-foreground mb-2">
                      Plateforme d'hébergement web
                    </p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="font-medium">Adresse</p>
                      <p className="text-muted-foreground">440 N Barranca Ave #4133, Covina, CA 91723, États-Unis</p>
                    </div>
                    <div>
                      <p className="font-medium">Site web</p>
                      <a
                        href="https://vercel.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        vercel.com
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Propriété intellectuelle */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <FileText className="w-6 h-6 text-primary" />
                  Propriété intellectuelle
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p>
                    L'ensemble du contenu de ce site (textes, images, graphismes, logos, icônes, sons, logiciels) est la propriété exclusive de Prépa Rationnelle ou de ses partenaires.
                  </p>
                  <p>
                    Toute reproduction, distribution, modification ou exploitation, même partielle, de ces éléments est strictement interdite sans l'autorisation préalable et écrite de Prépa Rationnelle.
                  </p>
                  <p>
                    Les marques citées sur ce site sont déposées par leurs propriétaires respectifs.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Responsabilité */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Building className="w-6 h-6 text-primary" />
                  Responsabilité
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p>
                    Prépa Rationnelle s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site. Cependant, des erreurs ou omissions peuvent survenir.
                  </p>
                  <p>
                    Prépa Rationnelle ne peut être tenu responsable des dommages directs ou indirects résultant de l'utilisation de ce site ou des informations qu'il contient.
                  </p>
                  <p>
                    L'utilisateur est seul responsable de l'utilisation qu'il fait des informations fournies sur ce site.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Liens externes */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Globe className="w-6 h-6 text-primary" />
                  Liens externes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p>
                    Ce site peut contenir des liens vers d'autres sites web. Prépa Rationnelle n'exerce aucun contrôle sur ces sites externes et ne peut être tenu responsable de leur contenu ou de leur fonctionnement.
                  </p>
                  <p>
                    L'existence d'un lien vers un site externe ne constitue pas une validation de ce site ou de son contenu par Prépa Rationnelle.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Protection des données */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <FileText className="w-6 h-6 text-primary" />
                  Protection des données personnelles
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p>
                    Conformément à la loi Informatique et Libertés du 6 janvier 1978 modifiée et au RGPD (Règlement Général sur la Protection des Données), vous disposez d'un droit d'accès, de rectification, d'effacement et de portabilité de vos données.
                  </p>
                  <p>
                    Pour exercer ces droits ou pour toute question relative à la protection de vos données, contactez-nous à l'adresse : preparationnelle@gmail.com
                  </p>
                  <p>
                    Consultez notre <a href="/politique-confidentialite" className="text-primary hover:underline">Politique de confidentialité</a> pour plus d'informations sur le traitement de vos données.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Cookies */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <FileText className="w-6 h-6 text-primary" />
                  Cookies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p>
                    Ce site utilise des cookies techniques nécessaires à son fonctionnement. Ces cookies ne collectent pas de données personnelles sans votre consentement.
                  </p>
                  <p>
                    Pour plus d'informations sur l'utilisation des cookies, consultez notre <a href="/politique-confidentialite" className="text-primary hover:underline">Politique de confidentialité</a>.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Droit applicable */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Building className="w-6 h-6 text-primary" />
                  Droit applicable et juridiction
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p>
                    Les présentes mentions légales sont régies par le droit français. En cas de litige, les tribunaux français seront seuls compétents.
                  </p>
                  <p>
                    Tout différend relatif à l'utilisation de ce site sera soumis à la compétence exclusive des tribunaux du ressort de Paris.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Mise à jour */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Dernière mise à jour</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Ces mentions légales ont été mises à jour le 15 décembre 2024.
                </p>
              </CardContent>
            </Card>

            {/* Section Liens utiles */}
            <div className="mt-6 space-y-4">
              <Card className="bg-gradient-to-r from-carnet-paper-2 to-pr-orange-pale border-2 border-carnet-red/30">
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
                        className="text-xs text-carnet-red hover:text-carnet-red-deep font-medium"
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
                        className="text-xs text-carnet-red hover:text-carnet-red-deep font-medium"
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
                        className="text-xs text-carnet-red hover:text-carnet-red-deep font-medium"
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
                        className="text-xs text-carnet-red hover:text-carnet-red-deep font-medium"
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
                        className="text-xs text-carnet-red hover:text-carnet-red-deep font-medium"
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
                        className="text-xs text-carnet-red hover:text-carnet-red-deep font-medium"
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
              <Card className="bg-gradient-to-r from-pr-orange-pale to-carnet-paper-2 border-2 border-orange-200">
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
                      className="inline-block bg-pr-orange text-white px-4 py-2 rounded-lg hover:bg-pr-orange-dark transition-colors font-semibold text-sm"
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
