import React from 'react';
import { SEOHead } from '@/components/SEOHead';
import FormationBreadcrumb, { type Crumb } from './FormationBreadcrumb';

export interface FormationSEO {
    title?: string;
    description?: string;
    canonical?: string;
    ogImage?: string;
}

export interface FormationLayoutProps {
    crumbs?: Crumb[];
    seo?: FormationSEO;
    children: React.ReactNode;
}

const FormationLayout: React.FC<FormationLayoutProps> = ({ crumbs, seo, children }) => {
    return (
        <div className="carnet-paper min-h-screen">
            {seo && <SEOHead {...seo} />}
            {crumbs && <FormationBreadcrumb crumbs={crumbs} />}
            <main>{children}</main>
        </div>
    );
};

export default FormationLayout;
