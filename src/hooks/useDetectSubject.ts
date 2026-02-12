import { useLocation } from 'react-router-dom';

/**
 * Auto-detect the subject from the current URL path.
 * Returns a subject key matching SUBJECT_PROMPTS in the edge function.
 */
export function useDetectSubject(): string {
    const { pathname } = useLocation();
    const p = pathname.toLowerCase();

    // Maths routes
    if (p.includes('/maths') || p.includes('/algebre') || p.includes('/analyse') || p.includes('/probabilites-') || p.includes('/terminale-vers-prepa')) {
        return 'maths';
    }

    // Géopolitique / HGGMC
    if (p.includes('/geopolitique') || p.includes('/hggmc') || p.includes('/atlas')) {
        return 'geopolitique';
    }

    // Anglais
    if (p.includes('/anglais') || p.includes('/english') || p.includes('/grammaire-anglais')) {
        return 'anglais';
    }

    // ESH
    if (p.includes('/esh') || p.includes('/economie') || p.includes('/sociologie')) {
        return 'esh';
    }

    // Python
    if (p.includes('/python')) {
        return 'python';
    }

    // Cybersécurité / Oteria
    if (p.includes('/oteria') || p.includes('/cyber') || p.includes('/securite')) {
        return 'cybersecurite';
    }

    // Espagnol
    if (p.includes('/espagnol') || p.includes('/spanish')) {
        return 'espagnol';
    }

    // Culture générale
    if (p.includes('/culture-generale') || p.includes('/philosophie') || p.includes('/dissertation')) {
        return 'culture-generale';
    }

    return 'general';
}
