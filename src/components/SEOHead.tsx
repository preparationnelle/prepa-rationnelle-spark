import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
    title?: string;
    description?: string;
    canonical?: string;
    ogImage?: string;
    ogType?: 'website' | 'article';
    noIndex?: boolean;
    schemaData?: object;
}

const defaultTitle = 'Prepa Rationnelle | Formations Maths, Python & Langues pour Prépa ECG';
const defaultDescription = 'Prepa Rationnelle : Formations maths, Python, langues et méthodologie pour prépa ECG. +250 exercices, cours particuliers et coaching pour intégrer HEC, ESSEC, ESCP.';
const baseUrl = 'https://www.preparationnelle.com';
const defaultImage = `${baseUrl}/lovable-uploads/872bbbcf-a0a0-467c-b349-6aaa9d464253.png`;

export const SEOHead: React.FC<SEOHeadProps> = ({
    title,
    description = defaultDescription,
    canonical,
    ogImage = defaultImage,
    ogType = 'website',
    noIndex = false,
    schemaData
}) => {
    const fullTitle = title ? `${title} | Prepa Rationnelle` : defaultTitle;
    const canonicalUrl = canonical ? `${baseUrl}${canonical}` : undefined;

    return (
        <Helmet>
            {/* Basic Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            {noIndex && <meta name="robots" content="noindex, nofollow" />}
            {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

            {/* Open Graph */}
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content={ogType} />
            <meta property="og:image" content={ogImage} />
            {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}

            {/* Twitter */}
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={ogImage} />

            {/* Schema.org */}
            {schemaData && (
                <script type="application/ld+json">
                    {JSON.stringify(schemaData)}
                </script>
            )}
        </Helmet>
    );
};

export default SEOHead;
