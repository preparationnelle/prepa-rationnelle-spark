import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { url } = await req.json()

    if (!url) {
      return new Response(
        JSON.stringify({ 
          ok: false, 
          code: 'MISSING_URL', 
          message: 'URL manquante' 
        }),
        { 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 400 
        }
      )
    }

    // Validation de l'URL
    let parsedUrl
    try {
      parsedUrl = new URL(url)
      if (!['http:', 'https:'].includes(parsedUrl.protocol)) {
        throw new Error('Protocole non supporté')
      }
    } catch (error) {
      return new Response(
        JSON.stringify({ 
          ok: false, 
          code: 'INVALID_URL', 
          message: 'URL invalide' 
        }),
        { 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 400 
        }
      )
    }

    // Téléchargement du contenu HTML
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Accept-Language': 'fr-FR,fr;q=0.9,en;q=0.8',
        'Accept-Encoding': 'gzip, deflate, br',
        'DNT': '1',
        'Connection': 'keep-alive',
        'Upgrade-Insecure-Requests': '1',
      },
      redirect: 'follow',
    })

    // Vérification du statut HTTP
    if (!response.ok) {
      const statusCode = response.status
      if ([401, 402, 403, 451].includes(statusCode)) {
        return new Response(
          JSON.stringify({ 
            ok: false, 
            code: 'PAYWALL_OR_EMPTY', 
            message: 'Article inaccessible (paywall ou contenu indisponible). Essayez un autre lien ou déposez un PDF.' 
          }),
          { 
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
            status: 200 
          }
        )
      }
      
      return new Response(
        JSON.stringify({ 
          ok: false, 
          code: 'HTTP_ERROR', 
          message: `Erreur HTTP ${statusCode}: ${response.statusText}` 
        }),
        { 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 200 
        }
      )
    }

    const html = await response.text()

    // Vérification de la taille du contenu
    if (html.length < 1000) {
      return new Response(
        JSON.stringify({ 
          ok: false, 
          code: 'PAYWALL_OR_EMPTY', 
          message: 'Article inaccessible (contenu trop court). Essayez un autre lien ou déposez un PDF.' 
        }),
        { 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 200 
        }
      )
    }

    // Détection de paywall dans le HTML
    const paywallPatterns = [
      /paywall/i,
      /meteredPaywall/i,
      /data-paywall/i,
      /subscribe/i,
      /subscriber-only/i,
      /registration-wall/i,
      /abonnement/i,
      /article réservé aux abonnés/i,
      /Le Monde Abonnés/i,
      /NYT Cooking subscription/i,
      /metered_paywall/i,
      /og:restrictions:content/i,
      /content-locked/i,
      /premium-content/i,
      /members-only/i,
      /exclusive-content/i,
      /login-required/i,
      /sign-in-required/i,
    ]

    const hasPaywall = paywallPatterns.some(pattern => pattern.test(html))
    if (hasPaywall) {
      return new Response(
        JSON.stringify({ 
          ok: false, 
          code: 'PAYWALL_OR_EMPTY', 
          message: 'Article inaccessible (paywall détecté). Essayez un autre lien ou déposez un PDF.' 
        }),
        { 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 200 
        }
      )
    }

    // Extraction du contenu avec Readability
    const { DOMParser } = await import('https://deno.land/x/deno_dom@v0.1.43/deno-dom-wasm.ts')
    const { Readability } = await import('https://esm.sh/@mozilla/readability@0.5.0')

    const parser = new DOMParser()
    const doc = parser.parseFromString(html, 'text/html')
    
    if (!doc) {
      return new Response(
        JSON.stringify({ 
          ok: false, 
          code: 'PARSE_ERROR', 
          message: 'Impossible de parser le contenu HTML' 
        }),
        { 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 200 
        }
      )
    }

    const reader = new Readability(doc)
    const article = reader.parse()

    if (!article || !article.textContent || article.textContent.trim().length < 400) {
      return new Response(
        JSON.stringify({ 
          ok: false, 
          code: 'PAYWALL_OR_EMPTY', 
          message: 'Article inaccessible (contenu insuffisant après extraction). Essayez un autre lien ou déposez un PDF.' 
        }),
        { 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 200 
        }
      )
    }

    // Nettoyage du texte
    let text = article.textContent
      .replace(/\s+/g, ' ') // Normalisation des espaces
      .replace(/\n+/g, '\n') // Normalisation des sauts de ligne
      .trim()

    // Détection de la langue (simplifiée)
    const frenchWords = ['le', 'la', 'les', 'de', 'du', 'des', 'et', 'est', 'sont', 'pour', 'avec', 'dans', 'sur', 'par', 'ce', 'cette', 'ces', 'qui', 'que', 'quoi', 'où', 'quand', 'comment', 'pourquoi']
    const englishWords = ['the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by', 'is', 'are', 'was', 'were', 'be', 'been', 'have', 'has', 'had', 'do', 'does', 'did']
    const germanWords = ['der', 'die', 'das', 'und', 'oder', 'aber', 'in', 'auf', 'an', 'zu', 'für', 'von', 'mit', 'durch', 'ist', 'sind', 'war', 'waren', 'sein', 'gewesen', 'haben', 'hat', 'hatte', 'tun', 'macht', 'tat']
    const spanishWords = ['el', 'la', 'los', 'las', 'y', 'o', 'pero', 'en', 'sobre', 'a', 'para', 'de', 'con', 'por', 'es', 'son', 'era', 'eran', 'ser', 'sido', 'tener', 'tiene', 'tenía', 'hacer', 'hace', 'hizo']

    const words = text.toLowerCase().split(/\s+/).slice(0, 100) // Premiers 100 mots
    const frenchCount = words.filter(word => frenchWords.includes(word)).length
    const englishCount = words.filter(word => englishWords.includes(word)).length
    const germanCount = words.filter(word => germanWords.includes(word)).length
    const spanishCount = words.filter(word => spanishWords.includes(word)).length

    let detectedLang = 'auto'
    const counts = [
      { lang: 'fr', count: frenchCount },
      { lang: 'en', count: englishCount },
      { lang: 'de', count: germanCount },
      { lang: 'es', count: spanishCount }
    ]
    
    const maxCount = Math.max(...counts.map(c => c.count))
    if (maxCount > 5) {
      detectedLang = counts.find(c => c.count === maxCount)?.lang || 'auto'
    }

    // Comptage des mots
    const wordCount = text.split(/\s+/).filter(word => word.length > 0).length

    // Extraction du titre
    const title = article.title || parsedUrl.hostname

    return new Response(
      JSON.stringify({
        ok: true,
        text: text.substring(0, 20000), // Limite à 20k caractères
        title,
        url,
        wordCount,
        lang: detectedLang,
        source: 'url'
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200 
      }
    )

  } catch (error) {
    console.error('Error fetching article:', error)
    
    return new Response(
      JSON.stringify({ 
        ok: false, 
        code: 'FETCH_ERROR', 
        message: 'Erreur lors de la récupération de l\'article. Vérifiez l\'URL ou essayez un PDF.' 
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200 
      }
    )
  }
}) 