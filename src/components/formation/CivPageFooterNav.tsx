import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';

type Item = { label: string; to: string };

type CivPageFooterNavProps = {
  prev?: Item;
  next?: Item;
  overviewTo?: string;
};

export const CivPageFooterNav: React.FC<CivPageFooterNavProps> = ({
  prev,
  next,
  overviewTo = '/formation/anglais/civilisation',
}) => {
  return (
    <div className="mt-16 pt-8 border-t border-pr-gray-light">
      <div className="flex flex-wrap items-center justify-between gap-4 text-sm font-dm-sans">
        <Link
          to={prev?.to || overviewTo}
          className="inline-flex items-center gap-2 text-pr-gray-mid hover:text-pr-orange-dark transition-colors group"
        >
          <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          <span className="font-semibold uppercase tracking-[0.08em] text-[11px]">
            {prev?.label || 'Back to Overview'}
          </span>
        </Link>

        {next && (
          <Link
            to={next.to}
            className="inline-flex items-center gap-2 text-pr-black hover:text-pr-orange-dark transition-colors group"
          >
            <span className="font-semibold uppercase tracking-[0.08em] text-[11px]">
              Next: {next.label}
            </span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default CivPageFooterNav;
