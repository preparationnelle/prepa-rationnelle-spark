import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Home, 
  ChevronRight, 
  BookOpen,
  ArrowLeft,
  Target,
  Lightbulb,
  CheckCircle,
  Eye,
  FileText,
  MessageSquare,
  Users,
  Zap,
  Clock
} from 'lucide-react';

const ThemeGrammaticalPage = () => {
  const [showHints, setShowHints] = useState<{ [key: string]: boolean }>({});
  const [showCorrections, setShowCorrections] = useState<{ [key: string]: boolean }>({});

  const toggleHints = (exerciseId: string) => {
    setShowHints(prev => ({ ...prev, [exerciseId]: !prev[exerciseId] }));
  };

  const toggleCorrections = (exerciseId: string) => {
    setShowCorrections(prev => ({ ...prev, [exerciseId]: !prev[exerciseId] }));
  };

  const exercises = [
    {
      id: "1",
      title: "Thème grammatical - Exercice 1",
      french: "De nos jours, nous essayons de tout concilier, d'autant plus que les sociétés modernes nous imposent de plus en plus d'activités.",
      hints: [
        "Traduction de tout (cod) = todo + lo",
        "D'autant plus que = tanto más …cuanto que",
        "De plus en plus = cada vez más",
        "De nos jours = hoy (en) día ; maintenant = ahora ; concilier = compaginar ; essayer de = tratar de, intentar ø ; procurar = chercher à, fournir (fig = faciliatar datos)"
      ],
      correction: "Hoy (en) día, procuramos (intentamos – tratamos de) compaginarlo todo tanto más cuanto que las sociedades modernas nos imponen cada vez más actividades."
    },
    {
      id: "2",
      title: "Thème grammatical - Exercice 2",
      french: "Il aura beau être ambitieux cet homme d'affaires ne pourra pas continuer à racheter toutes les entreprises qui feront faillite.",
      hints: [
        "Avoir beau = por más que/ por mucho que/ por muy…que",
        "Continuer à = seguir + gérondif",
        "Racheter = rescatar - redimir a una persona/ comprar – volver a comprar // racheter ses péchés = ganar el perdón por sus pecados",
        "Faire faillite = quebrar; déposer le bilan = declararse en quiebra/ el concurso de acreedores = la cessation de paiement"
      ],
      correction: "Por más (muy) ambicioso que sea, ese hombre de negocios no podrá seguir comprando todas las empresas (cada) que quiebren."
    },
    {
      id: "3",
      title: "Thème grammatical - Exercice 3",
      french: "Mademoiselle, veuillez entrer. Enlevez votre manteau et votre écharpe. Asseyez-vous et écoutez attentivement et tranquillement ce que va vous dire le médecin.",
      hints: [
        "Impératif",
        "Les possessifs",
        "Formation et emploi de l'adverbe",
        "La politesse : rogar que + subj = prier de…, tener la amabilidad de = avoir l'amabilité de…, sírvase - sírvanse / tenga - tengan a bien + infinitif = veuillez…, por favor = SVP",
        "Le manteau = el abrigo ; la veste = la chaqueta ; l'écharpe = la bufanda"
      ],
      correction: "Señorita, sírvase (tenga a bien – tenga la amabilidad de) pasar. Quítese el abrigo y la bufanda. Siéntese y escuche atenta y tranquilamente lo que le va a decir (va a decirle /le dirá) el médico."
    },
    {
      id: "4",
      title: "Thème grammatical - Exercice 4",
      french: "Le chasseur de têtes faisait tout ce qu'il pouvait pour déstabiliser les nombreux candidats car les places étaient chères.",
      hints: [
        "Tout ce que = todo lo que",
        "La place = el sitio, el lugar/ la Plaza/ la colocación, el cargo, el puesto/ el asiento (del coche)/ la entrada (teatro)/la importancia; à la place de = en vez de = en lugar de/ moi à ta place = yo que tú/ ne pas tenir en place = no estarse quieto",
        "Destabiliser = desestabilizar; ser estable e inestable"
      ],
      correction: "El cazatalentos hacía todo lo que podía para desestabilizar a los numerosos candidatos dado que los puestos (las colocaciones – los cargos) eran caros (por lo caros que eran los puestos/ de tan caros como eran)."
    },
    {
      id: "5",
      title: "Thème grammatical - Exercice 5",
      french: "Il suffirait qu'il réagisse dès qu'on le solliciterait pour interdire aux riverains d'enfreindre la loi.",
      hints: [
        "Suffire = bastar, ser suficiente; il suffit de = basta con / il suffit que = basta con que + subjonctif",
        "On",
        "Interdire de = prohibir ø / prohibir que + subj",
        "Agir = actuar; réagir = reaccionar",
        "Interdire à quelqu'un de faire quelque chose = prohibirle a alguien hacer algo (que haga algo); hacer la ley (comandar) = llevar la batuta; la ley de la oferta y la demanda = la ley de la oferta y la demanda; enfreindre = infringir"
      ],
      correction: "Bastaría con que reaccionara en cuanto lo solicitaran (se lo solicitara) para prohibir que los vecinos (los habitantes) infringieran (para prohibirles a los vecinos infringir) la ley."
    },
    {
      id: "6",
      title: "Thème grammatical - Exercice 6",
      french: "Les jeunes mariés avaient décidé de passer leur lune de miel au sein d'une ONG afin d'aider les plus défavorisés.",
      hints: [
        "Reciente = recién + participe passé /recién llegados – recién casados – recién nacidos",
        "A + cod de personne",
        "Décrocher la lune = hacer lo imposible; être dans la lune = estar en las nubes; tomber de la lune = sorprenderse"
      ],
      correction: "Los recién casados habían decidido pasarse la luna de miel en el seno de (con) una ONG (Organización No Gubernamental) a fin de ayudar a los más desfavorecidos (menesterosos)."
    },
    {
      id: "7",
      title: "Thème grammatical - Exercice 7",
      french: "Monsieur le Directeur, je vous prie de bien vouloir accepter cette requête. Celle-ci représente tout pour moi.",
      hints: [
        "Prier de = rogar que + subjonctif",
        "Veuillez = tenga a bien = sírvase",
        "Avoir l'amabilité de = tener la amabilidad de",
        "Les pronoms démonstratifs",
        "Tout (adverbe – cod) = Lo + todo (attention enclise ou proclise)",
        "La requête = la petición, la solicitud (formulaire), demanda (economie); la demande en mariage = la petición de mano"
      ],
      correction: "Señor Director, le ruego si a bien lo tiene (le ruego (que) tenga la amabilidad de aceptar) que acepte esta petición. Ésta lo representa todo para mí."
    },
    {
      id: "8",
      title: "Thème grammatical - Exercice 8",
      french: "Je ne comprends pas pourquoi tu t'entêtes tant. Je sais bien combien cela te coûte d'accepter ce travail mais on ne t'a pas laissé le choix.",
      hints: [
        "Interrogation indirecte et exclamation",
        "Traduction \"On\"",
        "S'entêter (à) = empeñarse en, empecinarse en, obstinarse en, porfiar en; l'entêtement = la testarudez; entêté = testarudo ; l'obstination = el empecinamiento, el empeño",
        "Faire un Choix = tomar una decisión; laisser le choix = dejar una alternativa, una opción; avoir le choix = poder elegir = tener donde escoger; ne pas avoir le choix = no tener más remedio; n'avoir que l'embarras du choix = no saber con cuál quedarse = tener donde escoger; choisir de = decidir, elegir."
      ],
      correction: "No entiendo por qué te empeñas (empecinas - obstinas) tanto. Ya (sí que / bien / claro que) sé cuánto (lo que / hasta qué punto) te cuesta aceptar ese trabajo pero no te han dejado una alternativa"
    },
    {
      id: "9",
      title: "Thème grammatical - Exercice 9",
      french: "« fais-le-lui (Faites-le-lui) tout de suite ! » insista-t-il. C'est sur ce ton autoritaire qu'il s'adressait aux ouvriers de cette usine.",
      hints: [
        "Impératif",
        "Emphase : c'est…que",
        "S'adresser à = dirigirse a"
      ],
      correction: "¡ házselo (Hacédselo/ háganselo) en seguida (de seguida – rápido – ahora mismo – en el acto)! insistió él (dijo insistiendo). Era con ese tono autoritario como (con el cual) se dirigía a la plantilla (los operarios – los obreros) de esa fábrica (planta)."
    },
    {
      id: "10",
      title: "Thème grammatical - Exercice 10",
      french: "Si tu penses ne pas pouvoir te rendre à ton entretien après demain, demande à la secrétaire de l'annuler et de t'en proposer un autre.",
      hints: [
        "Condition « si »",
        "Demander de = pedir que + subjonctif / pedir + infinitif",
        "Demain matin = mañana por la mañana; ce n'est pas demain la veille = no es para mañana; Demain il fera jour = mañana será otro día; il ne faut pas remettre à demain ce que l'on peut faire le jour même = no dejes para mañana lo que puedas hacer hoy"
      ],
      correction: "Si piensas no poder acudir a (irte a) la (tu) entrevista pasado mañana, pídele a la secretaria que la cancele y que te proponga (pídele cancelarla y proponerte) otra."
    }
  ];

  const themeSuivi = [
    {
      id: "suivi1",
      title: "Thème suivi - Exercice 1",
      french: "Quand je me suis réveillé, Marie était partie. Elle m'avait expliqué qu'elle devait aller chez sa tante.",
      hints: [
        "Passé simple ou passé composé",
        "Aux temps composés, le participe passé est invariable.",
        "Obligation personnelle: Devoir et falloir",
        "Les membres de la famille",
        "Andar, caminar (+ a, por) = marcher ; marcharse: partir, s'en aller ; Salir: partir, sortir. El tren sale a las tres de la tarde; Ir a casa de: aller chez ; La tía: la tante; el tío: l'oncle; ¡Qué tía (tronca): quelle nana!; ¡qué tío (tronco)!: quel mec!"
      ],
      correction: "Cuando (me) desperté, María / Marie se había ido/marchado. Me había explicado que tenía que ir (que debía ir) a casa de su tía."
    },
    {
      id: "suivi2",
      title: "Thème suivi - Exercice 2",
      french: "J'ai pensé que c'était dimanche: je n'aime pas le dimanche... Après le déjeuner, je me suis ennuyé un peu et j'ai erré dans l'appartement.",
      hints: [
        "Passé composé ou passé simple",
        "Pensar que + indicatif / no pensar que + subj",
        "Verbe Gustar + application",
        "Verbes de mouvement + a",
        "S'ennuyer = aburrirse, estar aburrido; l'ennui = el aburrimiento; s'ennuyer à mort/comme un rat mort = aburrirse como una ostra (une huître); le déjeuner = el almuerzo, la comida; le petit-déjeuner = el desayuno; le dîner/le souper = la cena; le goûter = la merienda; errer = errar, vagar, callejear (flâner); glander = vaguear"
      ],
      correction: "Pensé que era domingo: no me gusta el domingo/ no me gustan los domingos…Después del / tras ø el almuerzo / después de comer/ almorzar, me aburrí un poco y erré/vagué por el apartamento/piso."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Fil d'Ariane */}
      <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-border/40">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs font-medium text-gray-600">
            <Link to="/" className="flex items-center gap-1 hover:text-gray-900 transition-colors">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-gray-400 mx-1" />
            <Link to="/formation/espagnol" className="hover:text-gray-900 transition-colors">
              Formation Espagnol
            </Link>
            <ChevronRight className="h-3 w-3 text-gray-400 mx-1" />
            <Link to="/formation/espagnol/grammaire" className="hover:text-gray-900 transition-colors">
              Grammaire
            </Link>
            <ChevronRight className="h-3 w-3 text-gray-400 mx-1" />
            <span className="text-gray-900 font-bold">Thème Grammatical</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12">
        {/* En-tête */}
        <div className="text-center mb-10">
          <div className="flex justify-center mb-4">
            <Link to="/formation/espagnol/grammaire">
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Retour à la grammaire
              </Button>
            </Link>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
            <div className="p-3 rounded-lg bg-blue-600 text-white">
              <BookOpen className="h-9 w-9" />
            </div>
            Entraînement au Thème Grammatical
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Maîtrisez la traduction du français vers l'espagnol avec des exercices progressifs, des indices et des corrections détaillées
          </p>
          <div className="flex justify-center gap-2 mt-4">
            <Badge variant="secondary">Niveau Prépa</Badge>
            <Badge variant="outline">10 exercices</Badge>
            <Badge className="bg-blue-600">Grammaire avancée</Badge>
          </div>
        </div>

        {/* Instructions */}
        <Card className="mb-8 border-2 border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2 text-blue-800">
              <Lightbulb className="h-6 w-6" />
              Comment utiliser cette section
            </CardTitle>
          </CardHeader>
          <CardContent className="text-blue-700">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <FileText className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-blue-900 mb-2">1. Lisez la phrase</h3>
                <p className="text-sm">Commencez par analyser la phrase française et identifiez les structures grammaticales</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Eye className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-blue-900 mb-2">2. Consultez les indices</h3>
                <p className="text-sm">Utilisez les indices pour vous aider avec le vocabulaire et les structures difficiles</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-blue-900 mb-2">3. Vérifiez la correction</h3>
                <p className="text-sm">Comparez votre traduction avec la solution proposée et analysez les différences</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section Thème grammatical */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <Target className="h-8 w-8 text-blue-600" />
            I. Thème grammatical
          </h2>
          
          <div className="space-y-6">
            {exercises.map((exercise) => (
              <Card key={exercise.id} className="border-2 border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2 text-blue-800">
                    <FileText className="h-5 w-5" />
                    {exercise.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Phrase française */}
                  <div className="bg-white/70 rounded-lg p-4 border border-blue-200">
                    <h4 className="font-semibold text-blue-900 mb-2">🇫🇷 Phrase à traduire :</h4>
                    <p className="text-lg text-gray-800 italic">{exercise.french}</p>
                  </div>

                  {/* Boutons d'action */}
                  <div className="flex gap-3">
                    <Button 
                      variant="outline" 
                      onClick={() => toggleHints(exercise.id)}
                      className="flex items-center gap-2"
                    >
                      <Eye className="h-4 w-4" />
                      {showHints[exercise.id] ? 'Masquer les indices' : 'Voir les indices'}
                    </Button>
                    <Button 
                      variant="outline" 
                      onClick={() => toggleCorrections(exercise.id)}
                      className="flex items-center gap-2"
                    >
                      <CheckCircle className="h-4 w-4" />
                      {showCorrections[exercise.id] ? 'Masquer la correction' : 'Voir la correction'}
                    </Button>
                  </div>

                  {/* Indices */}
                  {showHints[exercise.id] && (
                    <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
                      <h4 className="font-semibold text-yellow-900 mb-3 flex items-center gap-2">
                        <Lightbulb className="h-4 w-4" />
                        💡 Indices et points de grammaire :
                      </h4>
                      <ul className="space-y-2">
                        {exercise.hints.map((hint, index) => (
                          <li key={index} className="flex items-start gap-2 text-yellow-800">
                            <span className="w-2 h-2 rounded-full bg-yellow-500 mt-2 flex-shrink-0"></span>
                            <span className="text-sm">{hint}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Correction */}
                  {showCorrections[exercise.id] && (
                    <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                      <h4 className="font-semibold text-green-900 mb-3 flex items-center gap-2">
                        <CheckCircle className="h-4 w-4" />
                        ✅ Correction :
                      </h4>
                      <p className="text-lg text-green-800 font-medium">{exercise.correction}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Section Thème suivi */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <MessageSquare className="h-8 w-8 text-blue-600" />
            II. Thème suivi
          </h2>
          
          <div className="space-y-6">
            {themeSuivi.map((exercise) => (
              <Card key={exercise.id} className="border-2 border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2 text-blue-800">
                    <MessageSquare className="h-5 w-5" />
                    {exercise.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Phrase française */}
                  <div className="bg-white/70 rounded-lg p-4 border border-blue-200">
                    <h4 className="font-semibold text-blue-900 mb-2">🇫🇷 Phrase à traduire :</h4>
                    <p className="text-lg text-gray-800 italic">{exercise.french}</p>
                  </div>

                  {/* Boutons d'action */}
                  <div className="flex gap-3">
                    <Button 
                      variant="outline" 
                      onClick={() => toggleHints(exercise.id)}
                      className="flex items-center gap-2"
                    >
                      <Eye className="h-4 w-4" />
                      {showHints[exercise.id] ? 'Masquer les indices' : 'Voir les indices'}
                    </Button>
                    <Button 
                      variant="outline" 
                      onClick={() => toggleCorrections(exercise.id)}
                      className="flex items-center gap-2"
                    >
                      <CheckCircle className="h-4 w-4" />
                      {showCorrections[exercise.id] ? 'Masquer la correction' : 'Voir la correction'}
                    </Button>
                  </div>

                  {/* Indices */}
                  {showHints[exercise.id] && (
                    <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
                      <h4 className="font-semibold text-yellow-900 mb-3 flex items-center gap-2">
                        <Lightbulb className="h-4 w-4" />
                        💡 Indices et points de grammaire :
                      </h4>
                      <ul className="space-y-2">
                        {exercise.hints.map((hint, index) => (
                          <li key={index} className="flex items-start gap-2 text-yellow-800">
                            <span className="w-2 h-2 rounded-full bg-yellow-500 mt-2 flex-shrink-0"></span>
                            <span className="text-sm">{hint}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Correction */}
                  {showCorrections[exercise.id] && (
                    <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                      <h4 className="font-semibold text-green-900 mb-3 flex items-center gap-2">
                        <CheckCircle className="h-4 w-4" />
                        ✅ Correction :
                      </h4>
                      <p className="text-lg text-green-800 font-medium">{exercise.correction}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Conseils méthodologiques */}
        <Card className="border-2 border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2 text-blue-800">
              <Zap className="h-6 w-6" />
              Conseils pour réussir le thème grammatical
            </CardTitle>
          </CardHeader>
          <CardContent className="text-blue-700 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-blue-900 mb-3">🎯 Stratégie de traduction :</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-400 mt-1.5 flex-shrink-0"></span>
                    <span>Identifiez d'abord la structure principale</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-400 mt-1.5 flex-shrink-0"></span>
                    <span>Traduisez les éléments grammaticaux clés</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-400 mt-1.5 flex-shrink-0"></span>
                    <span>Adaptez le vocabulaire au contexte</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-400 mt-1.5 flex-shrink-0"></span>
                    <span>Vérifiez la cohérence de l'ensemble</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-blue-900 mb-3">📚 Points de grammaire essentiels :</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-400 mt-1.5 flex-shrink-0"></span>
                    <span>Subjonctif après les verbes d'opinion</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-400 mt-1.5 flex-shrink-0"></span>
                    <span>Concordance des temps</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-400 mt-1.5 flex-shrink-0"></span>
                    <span>Structures emphatiques</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-400 mt-1.5 flex-shrink-0"></span>
                    <span>Prépositions et locutions</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ThemeGrammaticalPage; 