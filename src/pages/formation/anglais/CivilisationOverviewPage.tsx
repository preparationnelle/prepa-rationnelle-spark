import React from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronRight,
  Home,
  Globe, Users, Briefcase, Cpu, Heart, GraduationCap, Newspaper, Scale,
  Ship, Crown, MapPin, Shield, TrendingUp, AlertTriangle, Zap, Palette,
  Home as HomeIcon,
  LucideIcon,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { SEOHead } from '@/components/SEOHead';

type Chapter = {
  title: string;
  description: string;
  Icon: LucideIcon;
  to: string;
};

const chapters: Chapter[] = [
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
  { title: 'Civil Religion', description: 'National identity, patriotism, civic culture', Icon: HomeIcon, to: '/formation/anglais/civilisation/civil-religion' },
  { title: 'Contemporary Crises', description: 'Pandemic, inflation, major global challenges', Icon: AlertTriangle, to: '/formation/anglais/civilisation/crises' },
  { title: 'Culture Wars', description: 'Cultural debates, identity politics, shifts', Icon: Palette, to: '/formation/anglais/civilisation/culture-wars' },
];

const CivilisationOverviewPage = () => {
  return (
    <div className="carnet-paper min-h-screen">
      <SEOHead
        canonical="/formation/anglais/civilisation"
        title="Civilisation Anglaise · Current Affairs 2025 · Prépa Rationnelle"
        description="Les enjeux contemporains du monde anglophone pour les concours ECG : politique, économie, société, géopolitique — actualisés pour 2025."
      />

      <nav className="sticky top-0 z-40 carnet-paper-plain border-b border-dashed border-[rgba(78,55,30,0.18)]">
        <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16 py-3">
          <div className="flex items-center font-instrument text-[12px] text-carnet-ink-mute flex-wrap">
            <Link to="/" className="flex items-center gap-1 hover:text-carnet-red transition-colors">
              <Home className="h-3.5 w-3.5" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 mx-2 opacity-50" />
            <Link to="/formation/anglais" className="hover:text-carnet-red transition-colors">
              Anglais
            </Link>
            <ChevronRight className="h-3 w-3 mx-2 opacity-50" />
            <span className="carnet-eyebrow text-[11px]">Civilisation</span>
          </div>
        </div>
      </nav>

      <section className="relative py-20 lg:py-24">
        <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-[820px]"
          >
            <div className="carnet-eyebrow mb-6">Anglais · Module 03 · 2025</div>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-full bg-[rgba(193,68,58,0.08)] border border-[rgba(193,68,58,0.2)] flex items-center justify-center flex-shrink-0">
                <Globe className="h-6 w-6 text-carnet-red" />
              </div>
              <h1 className="font-lora text-[40px] sm:text-[52px] lg:text-[64px] leading-[1.05] text-carnet-ink tracking-tight">
                Current Affairs &{' '}
                <em className="font-lora italic text-carnet-red">Civilization</em>.
              </h1>
            </div>

            <p className="font-instrument text-[17px] lg:text-[19px] leading-[1.65] text-carnet-ink-soft max-w-[640px] mb-8">
              Les sujets <span className="carnet-hl font-lora italic">essentiels</span> pour comprendre le monde anglophone — politique, économie, société, géopolitique — actualisés pour 2025.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(193,68,58,0.06)] border border-[rgba(193,68,58,0.25)]">
                <Globe className="h-4 w-4 text-carnet-red" />
                <span className="font-instrument text-[13px] font-semibold text-carnet-ink">20 thèmes</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)]">
                <span className="carnet-eyebrow text-[11px]">Mis à jour 2025</span>
              </div>
            </div>

            <div className="carnet-hand text-[24px] mt-8 hidden md:block" style={{ transform: 'rotate(-2deg)' }}>
              ↓ explore les thématiques
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative pb-16">
        <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {chapters.map((c, idx) => {
              const tilt = idx % 5 === 1 ? 'carnet-tilt-r' : idx % 5 === 3 ? 'carnet-tilt-l' : '';
              return (
                <motion.div
                  key={c.to}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.35, delay: Math.min(idx * 0.03, 0.3) }}
                  className={tilt}
                >
                  <Link to={c.to} className="block h-full">
                    <div className="carnet-card group p-5 sm:p-6 h-full hover:shadow-[0_10px_24px_rgba(78,55,30,0.10)] transition-shadow">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-11 h-11 rounded-full bg-[rgba(193,68,58,0.08)] border border-[rgba(193,68,58,0.2)] flex items-center justify-center">
                          <c.Icon className="h-5 w-5 text-carnet-red" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-lora text-[18px] sm:text-[19px] text-carnet-ink leading-tight mb-2 group-hover:text-carnet-red transition-colors">
                            {c.title}
                          </h3>
                          <p className="font-instrument text-[13px] text-carnet-ink-soft leading-[1.55]">
                            {c.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative pb-24">
        <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="border-t border-dashed border-[rgba(78,55,30,0.18)] pt-12"
          >
            <div className="grid md:grid-cols-2 gap-12 max-w-4xl">
              <div>
                <div className="carnet-eyebrow mb-3">Pourquoi ?</div>
                <h4 className="font-lora text-[24px] text-carnet-ink leading-tight mb-3">
                  Why study <em className="font-lora italic text-carnet-red">civilization</em>?
                </h4>
                <hr className="w-10 h-0.5 bg-carnet-ink border-0 mb-5" />
                <ul className="space-y-3 font-instrument text-[14px] text-carnet-ink-soft">
                  <li className="flex gap-3">
                    <span className="carnet-hand text-[16px] text-carnet-red leading-none flex-shrink-0 mt-0.5">→</span>
                    Crucial context for oral examinations and interviews
                  </li>
                  <li className="flex gap-3">
                    <span className="carnet-hand text-[16px] text-carnet-red leading-none flex-shrink-0 mt-0.5">→</span>
                    Cultural background for text analysis
                  </li>
                  <li className="flex gap-3">
                    <span className="carnet-hand text-[16px] text-carnet-red leading-none flex-shrink-0 mt-0.5">→</span>
                    Argumentative essay examples and evidence
                  </li>
                </ul>
              </div>
              <div>
                <div className="carnet-eyebrow mb-3">2025 · Focus</div>
                <h4 className="font-lora text-[24px] text-carnet-ink leading-tight mb-3">
                  2025 <em className="font-lora italic text-carnet-red">focus areas</em>.
                </h4>
                <hr className="w-10 h-0.5 bg-carnet-ink border-0 mb-5" />
                <ul className="space-y-3 font-instrument text-[14px] text-carnet-ink-soft">
                  <li className="flex gap-3">
                    <span className="carnet-hand text-[16px] text-carnet-red leading-none flex-shrink-0 mt-0.5">→</span>
                    Post-pandemic economic and social shifts
                  </li>
                  <li className="flex gap-3">
                    <span className="carnet-hand text-[16px] text-carnet-red leading-none flex-shrink-0 mt-0.5">→</span>
                    Impact of AI and technological revolution
                  </li>
                  <li className="flex gap-3">
                    <span className="carnet-hand text-[16px] text-carnet-red leading-none flex-shrink-0 mt-0.5">→</span>
                    Political polarization in Western democracies
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CivilisationOverviewPage;
