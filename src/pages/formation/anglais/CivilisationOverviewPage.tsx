import React from 'react';
import {
  Globe, Users, Briefcase, Cpu, Heart, GraduationCap, Newspaper, Scale,
  Ship, Crown, MapPin, Shield, TrendingUp, AlertTriangle, Zap, Palette,
  Home,
} from 'lucide-react';
import { PRFormationLayout } from '@/components/formation/PRFormationLayout';
import { PRTopicCard } from '@/components/formation/PRTopicCard';

const CivilisationOverviewPage = () => {
  const chapters = [
    { title: 'Environment & Ecology', description: 'Climate change, green policies, environmental challenges', Icon: Globe, to: '/formation/anglais/civilisation/environment' },
    { title: 'Politics (US & UK)', description: 'Political systems, elections, contemporary developments', Icon: Crown, to: '/formation/anglais/civilisation/politics' },
    { title: 'Geopolitics & International Relations', description: 'Foreign policy, alliances, global influence', Icon: MapPin, to: '/formation/anglais/civilisation/geopolitics' },
    { title: 'Immigration & Integration', description: 'Migration policies, multiculturalism, social cohesion', Icon: Globe, to: '/formation/anglais/civilisation/immigration' },
    { title: 'Education Systems', description: 'Policies, university access, social mobility', Icon: GraduationCap, to: '/formation/anglais/civilisation/education' },
    { title: 'Gender Equality', description: "Women's rights, LGBTQ+ issues, social movements", Icon: Heart, to: '/formation/anglais/civilisation/gender-equality' },
    { title: 'AI & Technology', description: 'Tech revolution, AI ethics, digital transformation', Icon: Cpu, to: '/formation/anglais/civilisation/technology' },
    { title: 'Economy & Globalization', description: 'Economic systems, trade, globalization impacts', Icon: TrendingUp, to: '/formation/anglais/civilisation/economy' },
    { title: 'Brexit & Trade', description: 'Post-Brexit Britain, trade deals, sovereignty', Icon: Ship, to: '/formation/anglais/civilisation/brexit' },
    { title: 'Labor Markets', description: 'Employment trends, gig economy, future of work', Icon: Briefcase, to: '/formation/anglais/civilisation/labor-markets' },
    { title: 'Media & Communication', description: 'Social media, journalism, fake news, democracy', Icon: Newspaper, to: '/formation/anglais/civilisation/media' },
    { title: 'Polarization', description: 'Political and cultural divides, causes and remedies', Icon: Zap, to: '/formation/anglais/civilisation/polarization' },
    { title: 'Healthcare Systems', description: 'Comparative analysis, policy reforms, crises', Icon: Heart, to: '/formation/anglais/civilisation/health-systems' },
    { title: 'Justice & Rule of Law', description: 'Legal systems, criminal justice, constitution', Icon: Scale, to: '/formation/anglais/civilisation/justice' },
    { title: 'Social Inequalities', description: 'Stratification, racial issues, economic disparities', Icon: Users, to: '/formation/anglais/civilisation/inequalities' },
    { title: 'Civil Rights', description: 'Historical and contemporary social movements', Icon: Shield, to: '/formation/anglais/civilisation/civil-rights' },
    { title: 'The Commonwealth', description: 'Relations, history, post-colonial legacy', Icon: Crown, to: '/formation/anglais/civilisation/commonwealth' },
    { title: 'Civil Religion', description: 'National identity, patriotism, civic culture', Icon: Home, to: '/formation/anglais/civilisation/civil-religion' },
    { title: 'Contemporary Crises', description: 'Pandemic, inflation, major global challenges', Icon: AlertTriangle, to: '/formation/anglais/civilisation/crises' },
    { title: 'Culture Wars', description: 'Cultural debates, identity politics, shifts', Icon: Palette, to: '/formation/anglais/civilisation/culture-wars' },
  ];

  return (
    <PRFormationLayout
      crumbs={[
        { label: 'Accueil', to: '/' },
        { label: 'Anglais', to: '/formation/anglais' },
        { label: 'Civilisation' },
      ]}
      badge="Civilisation · 2025"
      title="Current Affairs &"
      titleAccent="Civilization"
      subtitle="Les sujets essentiels pour comprendre le monde anglophone — actualisés pour 2025."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
        {chapters.map((c) => (
          <PRTopicCard key={c.to} {...c} />
        ))}
      </div>

      {/* Section info — deux colonnes sobres */}
      <div className="border-t border-pr-gray-light pt-12">
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div>
            <h4 className="font-dm-serif text-xl text-pr-black mb-2">Why Study Civilization?</h4>
            <div className="w-10 h-[2px] bg-pr-orange mb-4" />
            <ul className="space-y-3 text-sm text-pr-gray-dark/80">
              <li className="flex gap-3"><span className="text-pr-orange mt-[2px]">→</span>Crucial context for oral examinations and interviews</li>
              <li className="flex gap-3"><span className="text-pr-orange mt-[2px]">→</span>Cultural background for text analysis</li>
              <li className="flex gap-3"><span className="text-pr-orange mt-[2px]">→</span>Argumentative essay examples and evidence</li>
            </ul>
          </div>
          <div>
            <h4 className="font-dm-serif text-xl text-pr-black mb-2">2025 Focus Areas</h4>
            <div className="w-10 h-[2px] bg-pr-orange mb-4" />
            <ul className="space-y-3 text-sm text-pr-gray-dark/80">
              <li className="flex gap-3"><span className="text-pr-orange mt-[2px]">→</span>Post-pandemic economic and social shifts</li>
              <li className="flex gap-3"><span className="text-pr-orange mt-[2px]">→</span>Impact of AI and technological revolution</li>
              <li className="flex gap-3"><span className="text-pr-orange mt-[2px]">→</span>Political polarization in Western democracies</li>
            </ul>
          </div>
        </div>
      </div>
    </PRFormationLayout>
  );
};

export default CivilisationOverviewPage;
