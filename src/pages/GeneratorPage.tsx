
import React, { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { ArrowRight, Copy } from 'lucide-react';
import { Link } from 'react-router-dom';

// Sample plans for demonstration purposes
const samplePlans = [
  {
    title: "L'intelligence artificielle représente-t-elle une menace pour l'humanité ?",
    introduction: "L'intelligence artificielle connaît une évolution fulgurante ces dernières années, soulevant autant d'espoirs que de craintes. Entre promesses d'un monde meilleur et scénarios catastrophes, le débat sur son impact futur est omniprésent. Alors que certains experts comme Stuart Russell ou Max Tegmark alertent sur les dangers potentiels d'une IA superintelligente, d'autres comme Andrew Ng considèrent ces craintes exagérées. La question des risques liés à l'IA est donc centrale dans notre réflexion sur le développement technologique contemporain.",
    parts: [
      {
        title: "I. Les dangers réels de l'intelligence artificielle",
        subparts: [
          "A. L'automatisation et ses conséquences socio-économiques (perte d'emplois, accentuation des inégalités)",
          "B. Les questions éthiques et juridiques (prise de décision algorithmique, responsabilité en cas d'erreur)",
          "C. Les risques stratégiques et militaires (armes autonomes, cyberguerre)"
        ]
      },
      {
        title: "II. Une perception erronée des risques liés à l'IA",
        subparts: [
          "A. La confusion entre IA actuelle (faible) et IA générale (forte)",
          "B. Le mythe de la conscience artificielle et le biais anthropomorphique",
          "C. L'histoire des innovations technologiques et l'adaptation humaine"
        ]
      },
      {
        title: "III. Vers une coévolution homme-machine maîtrisée",
        subparts: [
          "A. Les initiatives pour une IA éthique et responsable (régulation, transparence)",
          "B. La complémentarité plutôt que la substitution (intelligence augmentée)",
          "C. La nécessité d'une gouvernance mondiale de l'IA"
        ]
      }
    ],
    conclusion: "L'intelligence artificielle représente moins une menace intrinsèque qu'un puissant outil dont les risques dépendent essentiellement de nos choix collectifs. Si certaines préoccupations sont légitimes, notamment concernant l'emploi, la surveillance ou les armes autonomes, l'alarmisme excessif détourne l'attention des défis réels. La véritable question n'est pas de savoir si l'IA nous menace, mais comment orienter son développement pour qu'elle serve le bien commun. Cela implique une approche globale associant régulation, éducation et dialogue entre toutes les parties prenantes. L'avenir de notre relation avec l'IA reste à écrire, et c'est précisément notre responsabilité de l'écrire ensemble."
  },
  {
    title: "Le multilatéralisme est-il en crise ?",
    introduction: "Depuis la fin de la Seconde Guerre mondiale, le multilatéralisme s'est imposé comme un pilier de l'ordre international, incarné notamment par les Nations Unies et diverses organisations internationales. Ce système fondé sur la coopération entre États pour résoudre les problèmes communs fait pourtant face à des remises en question croissantes. Entre montée des nationalismes, paralysie institutionnelle et émergence de nouvelles puissances contestant l'ordre établi, nombreux sont ceux qui évoquent une crise profonde du multilatéralisme. Cette interrogation est d'autant plus cruciale dans un monde confronté à des défis globaux comme le changement climatique ou les pandémies.",
    parts: [
      {
        title: "I. Les signes manifestes d'une crise du multilatéralisme",
        subparts: [
          "A. Le retour des politiques nationalistes et unilatéralistes (America First, Brexit)",
          "B. La paralysie des institutions internationales (blocages du Conseil de sécurité de l'ONU)",
          "C. L'inefficacité face aux crises globales (climat, migrations, Covid-19)"
        ]
      },
      {
        title: "II. Une transformation plutôt qu'une disparition",
        subparts: [
          "A. La multiplication des forums multilatéraux alternatifs (G20, BRICS)",
          "B. L'émergence de nouvelles formes de coopération (multilatéralisme à géométrie variable)",
          "C. La résilience de certains régimes internationaux (commerce, santé, climat)"
        ]
      },
      {
        title: "III. Vers un renouveau du multilatéralisme",
        subparts: [
          "A. La réforme nécessaire des institutions existantes (représentativité, efficacité)",
          "B. L'intégration des acteurs non-étatiques (entreprises, ONG, société civile)",
          "C. L'adaptation aux nouveaux enjeux transnationaux (numérique, espace)"
        ]
      }
    ],
    conclusion: "Le multilatéralisme traverse indéniablement une phase de turbulences mais parler de crise terminale serait prématuré. Nous assistons davantage à une reconfiguration qu'à un effondrement. Les institutions héritées de l'après-guerre doivent se réinventer pour refléter les nouvelles réalités géopolitiques et répondre aux défis contemporains. Le multilatéralisme de demain sera probablement plus flexible, plus inclusif et multiforme. Loin de signaler la fin de la coopération internationale, les difficultés actuelles appellent à son renouvellement. Car face aux défis globaux qui nous attendent, le repli sur soi n'est tout simplement pas une option viable."
  }
];

const GeneratorPage = () => {
  const [topic, setTopic] = useState('');
  const [generating, setGenerating] = useState(false);
  const [currentPlan, setCurrentPlan] = useState<typeof samplePlans[0] | null>(null);
  const { currentUser } = useAuth();
  const { toast } = useToast();

  const handleGenerate = async () => {
    if (!topic.trim()) {
      toast({
        title: "Sujet requis",
        description: "Veuillez entrer un sujet pour générer un plan.",
        variant: "destructive"
      });
      return;
    }

    setGenerating(true);
    
    try {
      // In a real application, this would be an API call to an AI service
      // Here we simulate it by selecting a random sample plan
      setTimeout(async () => {
        const randomPlan = {...samplePlans[Math.floor(Math.random() * samplePlans.length)]};
        randomPlan.title = topic; // Use the user's topic
        setCurrentPlan(randomPlan);
        
        // Save the generated plan to Supabase
        if (currentUser) {
          const { error } = await supabase.from('submissions').insert({
            user_id: currentUser.id,
            title: topic,
            texte: JSON.stringify(randomPlan),
            date: new Date().toISOString(),
            status: "generated"
          });

          if (error) {
            console.error("Error saving plan:", error);
          }
        }
        
        setGenerating(false);
      }, 2000); // Simulate API delay
    } catch (error) {
      console.error("Error generating plan:", error);
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de la génération du plan.",
        variant: "destructive"
      });
      setGenerating(false);
    }
  };

  const copyToClipboard = () => {
    if (!currentPlan) return;
    
    let text = `${currentPlan.title}\n\nINTRODUCTION:\n${currentPlan.introduction}\n\n`;
    
    currentPlan.parts.forEach((part, index) => {
      text += `${part.title}\n`;
      part.subparts.forEach(subpart => {
        text += `${subpart}\n`;
      });
      text += '\n';
    });
    
    text += `CONCLUSION:\n${currentPlan.conclusion}`;
    
    navigator.clipboard.writeText(text);
    
    toast({
      title: "Copié !",
      description: "Le plan a été copié dans le presse-papiers."
    });
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Générateur de plan</h1>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Générer un nouveau plan</CardTitle>
          <CardDescription>
            Entrez un sujet de géopolitique ou d'actualité pour obtenir un plan structuré
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4">
            <Input
              placeholder="Ex: L'intelligence artificielle représente-t-elle une menace pour l'humanité ?"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="flex-1"
            />
            <Button onClick={handleGenerate} disabled={generating || !topic.trim()}>
              {generating ? "Génération en cours..." : "Générer un plan"}
            </Button>
          </div>
        </CardContent>
      </Card>
      
      {currentPlan && (
        <Card className="bg-white">
          <CardHeader className="border-b pb-4">
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-xl font-bold">{currentPlan.title}</CardTitle>
                <CardDescription>Plan structuré généré automatiquement</CardDescription>
              </div>
              <Button variant="outline" size="icon" onClick={copyToClipboard}>
                <Copy className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">INTRODUCTION</h3>
                <p className="text-gray-700">{currentPlan.introduction}</p>
              </div>
              
              {currentPlan.parts.map((part, index) => (
                <div key={index}>
                  <h3 className="font-semibold mb-2">{part.title}</h3>
                  <ul className="space-y-2 pl-6 list-disc">
                    {part.subparts.map((subpart, subIndex) => (
                      <li key={subIndex} className="text-gray-700">{subpart}</li>
                    ))}
                  </ul>
                </div>
              ))}
              
              <div>
                <h3 className="font-semibold mb-2">CONCLUSION</h3>
                <p className="text-gray-700">{currentPlan.conclusion}</p>
              </div>
            </div>
          </CardContent>
          <CardFooter className="border-t pt-4 flex justify-between">
            <Button variant="outline" onClick={() => setCurrentPlan(null)}>
              Générer un autre plan
            </Button>
            <Button asChild>
              <Link to="/submission">
                Soumettre un essai <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      )}
      
      {!currentPlan && !generating && (
        <div className="text-center py-12">
          <div className="bg-accent rounded-lg p-8 max-w-2xl mx-auto">
            <h2 className="text-xl font-semibold mb-4">Comment ça marche ?</h2>
            <ol className="text-left space-y-4 mb-6">
              <li className="flex">
                <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 shrink-0">1</span>
                <span>Entrez un sujet de géopolitique, d'économie ou d'actualité sous forme de question ou d'affirmation</span>
              </li>
              <li className="flex">
                <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 shrink-0">2</span>
                <span>Notre système génère un plan détaillé avec introduction, parties structurées et conclusion</span>
              </li>
              <li className="flex">
                <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 shrink-0">3</span>
                <span>Utilisez ce plan comme base pour développer votre propre réflexion et argumentation</span>
              </li>
            </ol>
            <p className="text-sm text-gray-600 italic">
              Note: Le plan généré est un point de départ. Pour exceller aux entretiens, 
              personnalisez-le avec vos connaissances et votre analyse.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default GeneratorPage;
