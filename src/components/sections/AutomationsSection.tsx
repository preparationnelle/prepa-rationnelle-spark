
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Languages, 
  Globe,
  Mic,
  Zap
} from 'lucide-react';

export const AutomationsSection = () => {
  const automations = [
    {
      id: 'geopolitics-unified',
      title: 'Générateur Géopo',
      description: 'Générez des études ou des fiches de géopolitique automatiquement',
      icon: <Globe className="h-8 w-8" />,
      color: 'bg-orange-500',
      badge: 'Nouveau',
      badgeColor: 'bg-orange-500 text-white',
      link: '/generator/geopolitics-unified'
    },
    {
      id: 'languages-unified',
      title: 'Générateur Langues',
      description: 'Générez des paragraphes ou corrigez vos thèmes avec IA',
      icon: <Languages className="h-8 w-8" />,
      color: 'bg-purple-500',
      badge: 'Nouveau',
      badgeColor: 'bg-orange-500 text-white',
      link: '/generator/languages-unified'
    },
    {
      id: 'orals-unified',
      title: 'Générateur Oraux',
      description: 'Générez vos réponses orales ou entraînez-vous avec des questions types',
      icon: <Mic className="h-8 w-8" />,
      color: 'bg-purple-500',
      badge: 'IA',
      badgeColor: 'bg-black text-white',
      link: '/generator/orals-unified'
    }
  ];

  const handleGeneratorClick = (automation: any) => {
    // Navigation vers la page du générateur
    window.location.href = automation.link;
  };

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Zap className="h-8 w-8 text-[#F36C00]" />
            <h2 className="text-4xl md:text-5xl font-bold">
              Automatisations <span className="text-[#F36C00]">IA</span>
            </h2>
          </div>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto text-lg">
            Découvrez nos outils d'intelligence artificielle spécialisés qui automatisent votre préparation 
            et vous font gagner des heures de travail.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8">
          {automations.map((automation) => (
            <Card 
              key={automation.id} 
              className="group hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-gray-200 bg-white cursor-pointer"
              onClick={() => handleGeneratorClick(automation)}
            >
              <CardHeader className="pb-4 relative">
                <div className="flex items-start justify-between mb-3">
                  <div className={`w-16 h-16 ${automation.color} rounded-full flex items-center justify-center text-white`}>
                    {automation.icon}
                  </div>
                  <Badge className={`text-xs ${automation.badgeColor} px-2 py-1 rounded`}>
                    {automation.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl group-hover:text-[#F36C00] transition-colors">
                  {automation.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  {automation.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#F36C00] font-medium group-hover:underline">
                    Essayer maintenant
                  </span>
                  <Zap className="h-4 w-4 text-[#F36C00] group-hover:scale-110 transition-transform" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/generator">
            <Button size="lg" variant="outline" className="bg-gradient-to-r from-primary/10 to-orange-500/10 hover:from-primary/20 hover:to-orange-500/20">
              <Zap className="h-5 w-5 mr-2" />
              Découvrir tous les générateurs
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
