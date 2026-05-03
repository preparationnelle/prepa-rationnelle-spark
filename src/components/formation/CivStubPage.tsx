import React from 'react';
import { PRFormationLayout } from './PRFormationLayout';
import { CivPageFooterNav } from './CivPageFooterNav';

type CivStubPageProps = {
  title: string;
  subtitle: string;
  description: string;
  badges: string[];
  prev?: { label: string; to: string };
  next?: { label: string; to: string };
};

/**
 * Minimal civilisation page (chapter overview only).
 * Used for chapters where deep content hasn't been written yet.
 */
export const CivStubPage: React.FC<CivStubPageProps> = ({
  title,
  subtitle,
  description,
  badges,
  prev,
  next,
}) => {
  return (
    <PRFormationLayout
      crumbs={[
        { label: 'Accueil', to: '/' },
        { label: 'Anglais', to: '/formation/anglais' },
        { label: 'Civilisation', to: '/formation/anglais/civilisation' },
        { label: title },
      ]}
      badge="Civilisation · 2025"
      title={title}
      subtitle={subtitle}
    >
      <div className="max-w-3xl mx-auto">
        {/* Chapter Overview card */}
        <div className="bg-white border border-pr-gray-light rounded-2xl overflow-hidden mb-10">
          <div className="h-[2px] bg-pr-orange" />
          <div className="p-6 sm:p-8">
            <div className="text-[10px] font-dm-sans font-semibold uppercase tracking-[0.12em] text-pr-orange-dark mb-3">
              Chapter Overview
            </div>
            <p className="text-pr-gray-dark/90 leading-relaxed mb-6">{description}</p>
            <div className="flex flex-wrap gap-2">
              {badges.map((b) => (
                <span
                  key={b}
                  className="bg-pr-orange-pale text-pr-orange-dark text-[11px] font-dm-sans font-semibold uppercase tracking-[0.08em] px-3 py-1.5 rounded-full"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>

        <CivPageFooterNav prev={prev} next={next} />
      </div>
    </PRFormationLayout>
  );
};

export default CivStubPage;
