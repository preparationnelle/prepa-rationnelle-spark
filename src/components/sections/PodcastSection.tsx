
import React from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, Play, Radio, TrendingUp } from 'lucide-react';

export const PodcastSection = () => {
  const podcastUrl = "https://www.europe1.fr/emissions/la-france-bouge-academie/prepa-rationnelle-concue-pour-revolutionner-le-monde-la-preparation-pour-integrer-les-ecoles-de-commerce-667526";
  
  return (
    <section className="relative py-24 lg:py-28">
      <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[rgba(193,68,58,0.08)] border border-[rgba(193,68,58,0.25)] rounded-full flex items-center justify-center">
                <Radio className="h-4 w-4 text-carnet-red" />
              </div>
              <span className="carnet-eyebrow">Interview exclusive</span>
            </div>

            <h2 className="font-lora text-[36px] md:text-[44px] lg:text-[52px] text-carnet-ink leading-[1.1]">
              Découvrez notre interview sur{' '}
              <em className="font-lora italic text-carnet-red">Europe 1</em>.
            </h2>

            <p className="font-instrument text-[17px] lg:text-[18px] text-carnet-ink-soft mt-6 leading-[1.7] mb-8">
              Écoutez notre fondateur présenter comment Prepa Rationnelle révolutionne la préparation aux oraux des écoles de commerce.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <a href={podcastUrl} target="_blank" rel="noopener noreferrer">
                <Button className="bg-carnet-ink hover:bg-carnet-red text-carnet-paper font-instrument font-semibold py-6 px-8 rounded-full border-0">
                  <Play className="h-4 w-4 mr-2 fill-current" /> Écouter le podcast
                  <ExternalLink className="h-3.5 w-3.5 ml-2" />
                </Button>
              </a>

              <div className="flex items-center gap-1.5 font-instrument text-[13px] text-carnet-ink-mute">
                <TrendingUp className="h-3.5 w-3.5" /> <span>+2M auditeurs</span>
              </div>
            </div>
          </div>

          <div className="relative carnet-tilt-l">
            <a href={podcastUrl} target="_blank" rel="noopener noreferrer" className="block transition-transform hover:scale-[1.02]">
              <img
                src="/lovable-uploads/b7d741c4-5fa9-4c55-8fe0-37e63fa54d5f.png"
                alt="Interview Europe 1"
                className="rounded-md w-80 md:w-[440px] h-auto object-cover border border-[rgba(78,55,30,0.18)] shadow-[0_12px_32px_rgba(78,55,30,0.12)]"
              />
            </a>
            <div className="carnet-hand absolute hidden lg:block" style={{ top: -28, right: -36, fontSize: 24, color: '#C1443A', transform: 'rotate(6deg)' }}>
              ↘ écoute<br/>jusqu'au bout
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
