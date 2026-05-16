export type ThemeAngle = {
  title: string;
  keywords: string;
};

export type ThemeEntry = {
  id: string;
  title: string;
  emoji: string;
  description: string;
  angles: ThemeAngle[];
  concoursTopics: string[];
};

export const ENGLISH_THEMES: ThemeEntry[] = [
  {
    id: 'environment',
    title: 'Climat & environnement',
    emoji: '🌍',
    description: 'IRA, net zero britannique, justice climatique, greenwashing.',
    angles: [
      { title: 'IRA & subventions vertes US', keywords: 'Inflation Reduction Act, Biden, $369bn, transatlantic split' },
      { title: 'UK net zero & décarbonation', keywords: 'UK, net zero, Sunak rollback, North Sea oil' },
      { title: 'Catastrophes climatiques', keywords: 'wildfires, Maui, California floods, climate disasters' },
      { title: 'Greenwashing & BP', keywords: 'BP, greenwashing, fossil fuel ads, corporate hypocrisy' },
    ],
    concoursTopics: [
      'Is the fight against climate change compatible with capitalism?',
      'Should rich countries pay for climate damage in the Global South?',
      'Is democracy able to meet the climate challenge?',
    ],
  },
  {
    id: 'politics',
    title: 'Politique US/UK',
    emoji: '🗳️',
    description: 'Trump 2.0, Cour suprême, Starmer, fin des Tories, Trudeau.',
    angles: [
      { title: 'Trump 2.0 & retour au pouvoir', keywords: 'Trump 2025, executive orders, DOGE, Musk, tariffs' },
      { title: 'Cour suprême — Dobbs & droits', keywords: 'Supreme Court, Dobbs, abortion, Roe v. Wade overturned' },
      { title: 'Starmer & fin des Tories', keywords: 'Keir Starmer, Labour landslide 2024, 412 seats, Truss legacy' },
      { title: 'Trudeau & fin d\'une ère', keywords: 'Trudeau resignation 2025, Mark Carney, Canadian Liberals' },
    ],
    concoursTopics: [
      'Is American democracy in crisis?',
      'Has Brexit reshaped British politics?',
      'Is populism a threat to liberal democracies?',
    ],
  },
  {
    id: 'geopolitics',
    title: 'Géopolitique & alliances',
    emoji: '🌐',
    description: 'Chine-Taïwan, Ukraine, AUKUS, OTAN sous Trump.',
    angles: [
      { title: 'Rivalité USA-Chine & Taïwan', keywords: 'US-China rivalry, Taiwan, semiconductors, TSMC' },
      { title: 'Ukraine & fatigue occidentale', keywords: 'Ukraine, Western aid fatigue, Congress, Zelensky' },
      { title: 'AUKUS & Indo-Pacifique', keywords: 'AUKUS, Australia, nuclear submarines, Indo-Pacific' },
      { title: 'Trump, OTAN & reconfigurations', keywords: 'Trump NATO, defence spending, transatlantic alliance' },
    ],
    concoursTopics: [
      'Is the West in decline?',
      'Has the United States become an unreliable ally?',
      'Is the post-1945 international order coming to an end?',
    ],
  },
  {
    id: 'immigration',
    title: 'Immigration & intégration',
    emoji: '✈️',
    description: 'Droit du sol Trump, plan Rwanda UK, Windrush, Australie.',
    angles: [
      { title: 'Trump & droit du sol (2025)', keywords: 'birthright citizenship, executive order, 14th Amendment' },
      { title: 'Plan Rwanda britannique', keywords: 'UK Rwanda plan, Sunak, asylum seekers, Supreme Court ruling' },
      { title: 'Australie offshore', keywords: 'Australia, offshore processing, Nauru, Manus Island' },
      { title: 'Windrush scandal', keywords: 'Windrush scandal, UK, Caribbean migrants, hostile environment' },
    ],
    concoursTopics: [
      'Is multiculturalism in crisis?',
      'Should liberal democracies have open borders?',
      'Is national identity compatible with mass migration?',
    ],
  },
  {
    id: 'education',
    title: 'Éducation & mobilité',
    emoji: '📚',
    description: 'Dette étudiante US, affirmative action, Oxbridge, book bans.',
    angles: [
      { title: 'Dette étudiante ($1.7T)', keywords: 'US student debt, $1.7 trillion, Biden forgiveness plan' },
      { title: 'Affirmative action supprimée', keywords: 'affirmative action, Supreme Court 2023, Harvard, race-blind admissions' },
      { title: 'Eton, Oxbridge & élites', keywords: 'Oxbridge, Eton, UK elite reproduction, social mobility' },
      { title: 'Book bans en Floride', keywords: 'Florida book bans, DeSantis, culture wars, education' },
    ],
    concoursTopics: [
      'Is education still the best engine of social mobility?',
      'Can elite universities serve the common good?',
      'Should education be free?',
    ],
  },
  {
    id: 'gender-social',
    title: 'Genre & mouvements sociaux',
    emoji: '👥',
    description: 'Dobbs, #MeToo, BLM, Cass Review, débats trans.',
    angles: [
      { title: 'Dobbs & recul de l\'avortement', keywords: 'Dobbs, abortion ban, state legislation, reproductive rights' },
      { title: '#MeToo & verdict Weinstein 2024', keywords: 'MeToo, Harvey Weinstein, 2024 overturn, sexual abuse' },
      { title: 'Black Lives Matter & backlash', keywords: 'BLM, George Floyd, racial reckoning, DEI rollback' },
      { title: 'Cass Review UK & enjeux trans', keywords: 'Cass Review, UK, trans youth, NHS, gender clinics' },
    ],
    concoursTopics: [
      'Has feminism reached its limits in Western societies?',
      'Can social movements bring about lasting change?',
      'Are minority rights at risk in liberal democracies?',
    ],
  },
  {
    id: 'ai-tech',
    title: 'IA & technologie',
    emoji: '🤖',
    description: 'ChatGPT, régulation, grève Hollywood, TikTok.',
    angles: [
      { title: 'ChatGPT & révolution générative', keywords: 'ChatGPT, OpenAI, generative AI, 2022, Big Tech disruption' },
      { title: 'Bletchley summit & régulation', keywords: 'Bletchley AI summit, UK, AI safety, executive order rollback' },
      { title: 'Grève Hollywood & IA', keywords: 'WGA strike, SAG-AFTRA, AI in screenwriting, Hollywood 2023' },
      { title: 'TikTok & sécurité nationale', keywords: 'TikTok ban, ByteDance, US national security, Supreme Court' },
    ],
    concoursTopics: [
      'Should AI be regulated like nuclear technology?',
      'Is technology making us more or less free?',
      'Is innovation incompatible with democracy?',
    ],
  },
  {
    id: 'economy',
    title: 'Économie & mondialisation',
    emoji: '💰',
    description: 'IRA, Big Tech, greenwashing, syndicalisation.',
    angles: [
      { title: 'IRA & protectionnisme vert', keywords: 'IRA, $369bn, EV tax credit, transatlantic trade' },
      { title: 'Big Tech vs ChatGPT', keywords: 'Google, Microsoft, OpenAI, $100bn market drop' },
      { title: 'Syndicalisation Amazon/Starbucks', keywords: 'Amazon Labor Union, Starbucks Workers United, unionisation revival' },
      { title: 'Tarifs Trump & nationalisme', keywords: 'Trump tariffs, Liberation Day, economic nationalism' },
    ],
    concoursTopics: [
      'Is globalization in retreat?',
      'Are multinational corporations more powerful than states?',
      'Should we trust the market to solve the climate crisis?',
    ],
  },
  {
    id: 'brexit',
    title: 'Brexit & commerce',
    emoji: '🇬🇧',
    description: 'Bilan 2016, –4% PIB, Global Britain, reset Starmer.',
    angles: [
      { title: 'Référendum 2016 & fracture', keywords: 'Brexit referendum 2016, Leave, Cameron, divided UK' },
      { title: 'Bilan économique (–4% PIB)', keywords: 'Brexit economic cost, GDP, OBR, trade barriers' },
      { title: 'Global Britain & accords', keywords: 'Global Britain, CPTPP, free trade deals, India' },
      { title: 'Starmer & reset européen', keywords: 'Starmer EU reset 2025, post-Brexit, defence, customs' },
    ],
    concoursTopics: [
      'Has Brexit weakened the United Kingdom?',
      'Was Brexit a victory or a defeat for democracy?',
      'Can a country reinvent itself outside its regional bloc?',
    ],
  },
  {
    id: 'labor',
    title: 'Travail & avenir',
    emoji: '💼',
    description: 'UAW, gig economy, Great Resignation, grève IA.',
    angles: [
      { title: 'UAW & victoire de Detroit', keywords: 'UAW strike 2023, Ford GM Stellantis, stand-up strike' },
      { title: 'Gig economy & requalification UK', keywords: 'gig economy, Uber UK ruling, worker classification' },
      { title: 'Great Resignation & quiet quitting', keywords: 'Great Resignation, quiet quitting, post-Covid labour' },
      { title: 'Grève Hollywood & IA', keywords: 'WGA, SAG-AFTRA strike, AI scripts, residuals' },
    ],
    concoursTopics: [
      'Is work losing its meaning?',
      'Should the gig economy be regulated like traditional employment?',
      'Will AI destroy more jobs than it creates?',
    ],
  },
  {
    id: 'media',
    title: 'Médias & communication',
    emoji: '📱',
    description: 'Musk & X, désinformation IA, news deserts, TikTok.',
    angles: [
      { title: 'Musk & X ($44Mds)', keywords: 'Elon Musk Twitter, $44bn, content moderation, free speech' },
      { title: 'Désinformation & IA générative', keywords: 'deepfakes, AI disinformation, elections 2024' },
      { title: 'Effondrement presse locale', keywords: 'US news deserts, local newspapers decline, democracy' },
      { title: 'TikTok & jeunes audiences', keywords: 'TikTok, Gen Z, attention economy, mental health' },
    ],
    concoursTopics: [
      'Is freedom of expression at risk online?',
      'Can democracy survive the age of social media?',
      'Are media still the fourth estate?',
    ],
  },
  {
    id: 'polarisation',
    title: 'Polarisation & clivages',
    emoji: '⚡',
    description: 'Two Americas, Cour suprême, 6 janvier, Brexit.',
    angles: [
      { title: 'Two Americas & partisanship', keywords: 'US polarisation, negative partisanship, red vs blue' },
      { title: 'Cour suprême en crise', keywords: 'Supreme Court legitimacy, approval drop, 6-3 majority' },
      { title: '6 janvier & assaut du Capitole', keywords: 'January 6, Capitol riot, democratic norms, pardons' },
      { title: 'Brexit & fracture britannique', keywords: 'Brexit divide, Remain vs Leave, generational gap' },
    ],
    concoursTopics: [
      'Is polarization the new normal?',
      'Can democracy survive without shared facts?',
      'Are culture wars destroying the West?',
    ],
  },
  {
    id: 'health',
    title: 'Santé & systèmes de soin',
    emoji: '🏥',
    description: 'NHS, Obamacare, Big Pharma, santé mentale.',
    angles: [
      { title: 'NHS en crise', keywords: 'NHS crisis, waiting lists, junior doctors strike, UK 2024' },
      { title: 'Obamacare & couverture', keywords: 'Affordable Care Act, US uninsured, Medicaid expansion' },
      { title: 'Big Pharma & prix', keywords: 'Big Pharma, insulin price, Medicare negotiation, Biden' },
      { title: 'Santé mentale & smartphones', keywords: 'Jonathan Haidt, teen mental health, phones, anxiety generation' },
    ],
    concoursTopics: [
      'Should healthcare be a right or a commodity?',
      'Is the welfare state sustainable?',
      'Are smartphones harming a generation?',
    ],
  },
  {
    id: 'opioids',
    title: 'Crise des opioïdes',
    emoji: '💊',
    description: 'Purdue Pharma, Sacklers, fentanyl, McKinsey.',
    angles: [
      { title: 'Purdue Pharma & Sacklers', keywords: 'Purdue Pharma, OxyContin, Sackler family, settlement' },
      { title: 'Fentanyl, 3e vague', keywords: 'fentanyl crisis, overdoses, 100x morphine, US deaths' },
      { title: 'McKinsey & complicité', keywords: 'McKinsey, opioid consulting, $600m settlement' },
      { title: 'Vancouver & réduction des risques', keywords: 'Vancouver, harm reduction, safe injection sites, decriminalisation' },
    ],
    concoursTopics: [
      'Has capitalism worsened the public health crisis in America?',
      'Should drug use be treated as a criminal or a medical issue?',
      'To what extent can corporations be held accountable for systemic harm?',
    ],
  },
];
