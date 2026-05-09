import React from 'react';
import { Church } from 'lucide-react';
import { EnglishVocabularyTemplate, EnglishVocabularyItem } from '@/components/formation/anglais/EnglishVocabularyTemplate';

const vocabularyData: EnglishVocabularyItem[] = [
  // 1. Religion civile et spiritualité / Civil Religion and Spirituality
  { french: "Religion civile", english: "Civil religion", category: "Religion civile et spiritualité" },
  { french: "Religion d'État", english: "State religion", category: "Religion civile et spiritualité" },
  { french: "Sécularisme", english: "Secularism", category: "Religion civile et spiritualité" },
  { french: "Laïcité", english: "Laicity", category: "Religion civile et spiritualité" },
  { french: "Spiritualité", english: "Spirituality", category: "Religion civile et spiritualité" },
  { french: "Spiritualité nationale", english: "National spirituality", category: "Religion civile et spiritualité" },
  { french: "Héritage religieux", english: "Religious heritage", category: "Religion civile et spiritualité" },
  { french: "Sécularisation", english: "Secularization", category: "Religion civile et spiritualité" },
  { french: "Identité religieuse", english: "Religious identity", category: "Religion civile et spiritualité" },
  { french: "Croyances collectives", english: "Collective beliefs", category: "Religion civile et spiritualité" },

  // 2. Identité nationale et patriotisme / National Identity and Patriotism
  { french: "Identité nationale", english: "National identity", category: "Identité nationale et patriotisme" },
  { french: "Patriotisme", english: "Patriotism", category: "Identité nationale et patriotisme" },
  { french: "Patriotisme constitutionnel", english: "Constitutional patriotism", category: "Identité nationale et patriotisme" },
  { french: "Patriotisme économique", english: "Economic patriotism", category: "Identité nationale et patriotisme" },
  { french: "Patriotisme militaire", english: "Military patriotism", category: "Identité nationale et patriotisme" },
  { french: "Patriotisme culturel", english: "Cultural patriotism", category: "Identité nationale et patriotisme" },
  { french: "Fierté nationale", english: "National pride", category: "Identité nationale et patriotisme" },
  { french: "Idéal national", english: "National ideal", category: "Identité nationale et patriotisme" },
  { french: "Souveraineté", english: "Sovereignty", category: "Identité nationale et patriotisme" },
  { french: "Indépendance", english: "Independence", category: "Identité nationale et patriotisme" },

  // 3. Culture et valeurs civiques / Civic Culture and Values
  { french: "Culture civique", english: "Civic culture", category: "Culture et valeurs civiques" },
  { french: "Valeurs nationales", english: "National values", category: "Culture et valeurs civiques" },
  { french: "Valeurs démocratiques", english: "Democratic values", category: "Culture et valeurs civiques" },
  { french: "Valeurs universelles", english: "Universal values", category: "Culture et valeurs civiques" },
  { french: "Liberté", english: "Freedom", category: "Culture et valeurs civiques" },
  { french: "Égalité", english: "Equality", category: "Culture et valeurs civiques" },
  { french: "Fraternité", english: "Fraternity", category: "Culture et valeurs civiques" },
  { french: "Justice", english: "Justice", category: "Culture et valeurs civiques" },
  { french: "Droits civiques", english: "Civil rights", category: "Culture et valeurs civiques" },
  { french: "Idéal civique", english: "Civic ideal", category: "Culture et valeurs civiques" },

  // 4. Symboles et rituels / Symbols and Rituals
  { french: "Symboles nationaux", english: "National symbols", category: "Symboles et rituels" },
  { french: "Drapeau", english: "Flag", category: "Symboles et rituels" },
  { french: "Hymne", english: "Anthem", category: "Symboles et rituels" },
  { french: "Rituel", english: "Ritual", category: "Symboles et rituels" },
  { french: "Rituel civique", english: "Civic ritual", category: "Symboles et rituels" },
  { french: "Cérémonie", english: "Ceremony", category: "Symboles et rituels" },
  { french: "Commémoration", english: "Commemoration", category: "Symboles et rituels" },
  { french: "Célébration", english: "Celebration", category: "Symboles et rituels" },
  { french: "Symbolisme", english: "Symbolism", category: "Symboles et rituels" },
  { french: "Mythologie nationale", english: "National mythology", category: "Symboles et rituels" },

  // 5. Histoire et mémoire / History and Memory
  { french: "Histoire", english: "History", category: "Histoire et mémoire" },
  { french: "Légende", english: "Legend", category: "Histoire et mémoire" },
  { french: "Héros national", english: "National hero", category: "Histoire et mémoire" },
  { french: "Narratif national", english: "National narrative", category: "Histoire et mémoire" },
  { french: "Identité historique", english: "Historical identity", category: "Histoire et mémoire" },
  { french: "Mémoire collective", english: "Collective memory", category: "Histoire et mémoire" },
  { french: "Mémoire nationale", english: "National memory", category: "Histoire et mémoire" },
  { french: "Mémoire historique", english: "Historical memory", category: "Histoire et mémoire" },
  { french: "Héritage", english: "Heritage", category: "Histoire et mémoire" },
  { french: "Héritage colonial", english: "Colonial heritage", category: "Histoire et mémoire" },

  // 6. Citoyenneté et participation / Citizenship and Participation
  { french: "Citoyenneté", english: "Citizenship", category: "Citoyenneté et participation" },
  { french: "Devoir civique", english: "Civic duty", category: "Citoyenneté et participation" },
  { french: "Participation", english: "Participation", category: "Citoyenneté et participation" },
  { french: "Engagement", english: "Engagement", category: "Citoyenneté et participation" },
  { french: "Identité civique", english: "Civic identity", category: "Citoyenneté et participation" },
  { french: "Identité collective", english: "Collective identity", category: "Citoyenneté et participation" },
  { french: "Identité politique", english: "Political identity", category: "Citoyenneté et participation" },
  { french: "Identité moderne", english: "Modern identity", category: "Citoyenneté et participation" },
  { french: "Identité inclusive", english: "Inclusive identity", category: "Citoyenneté et participation" },
  { french: "Héritage démocratique", english: "Democratic heritage", category: "Citoyenneté et participation" },

  // 7. Diversité et intégration / Diversity and Integration
  { french: "Diversité", english: "Diversity", category: "Diversité et intégration" },
  { french: "Multiculturalisme", english: "Multiculturalism", category: "Diversité et intégration" },
  { french: "Intégration", english: "Integration", category: "Diversité et intégration" },
  { french: "Assimilation", english: "Assimilation", category: "Diversité et intégration" },
  { french: "Identité culturelle", english: "Cultural identity", category: "Diversité et intégration" },
  { french: "Identité ethnique", english: "Ethnic identity", category: "Diversité et intégration" },
  { french: "Identité de genre", english: "Gender identity", category: "Diversité et intégration" },
  { french: "Diversité sexuelle", english: "Sexual diversity", category: "Diversité et intégration" },
  { french: "Pluralisme", english: "Pluralism", category: "Diversité et intégration" },
  { french: "Tolérance", english: "Tolerance", category: "Diversité et intégration" },

  // 8. Cohésion et communauté / Cohesion and Community
  { french: "Unité", english: "Unity", category: "Cohésion et communauté" },
  { french: "Cohésion sociale", english: "Social cohesion", category: "Cohésion et communauté" },
  { french: "Cohésion nationale", english: "National cohesion", category: "Cohésion et communauté" },
  { french: "Solidarité", english: "Solidarity", category: "Cohésion et communauté" },
  { french: "Communauté", english: "Community", category: "Cohésion et communauté" },
  { french: "Inclusion", english: "Inclusion", category: "Cohésion et communauté" },
  { french: "Exclusion", english: "Exclusion", category: "Cohésion et communauté" },
  { french: "Conflit culturel", english: "Cultural conflict", category: "Cohésion et communauté" },
  { french: "Intolérance", english: "Intolerance", category: "Cohésion et communauté" },
  { french: "Polarisation", english: "Polarization", category: "Cohésion et communauté" },

  // 9. Identités contemporaines / Contemporary Identities
  { french: "Post-colonialisme", english: "Post-colonialism", category: "Identités contemporaines" },
  { french: "Identité post-moderne", english: "Postmodern identity", category: "Identités contemporaines" },
  { french: "Identité post-nationale", english: "Post-national identity", category: "Identités contemporaines" },
  { french: "Identité hybride", english: "Hybrid identity", category: "Identités contemporaines" },
  { french: "Identité diasporique", english: "Diasporic identity", category: "Identités contemporaines" },
  { french: "Globalisation", english: "Globalization", category: "Identités contemporaines" },
  { french: "Identité globale", english: "Global identity", category: "Identités contemporaines" },
  { french: "Cosmopolitisme", english: "Cosmopolitanism", category: "Identités contemporaines" },
  { french: "Transnationalisme", english: "Transnationalism", category: "Identités contemporaines" },
  { french: "Identité européenne", english: "European identity", category: "Identités contemporaines" },

  // 10. Débats et enjeux actuels / Current Debates and Issues
  { french: "Débat identitaire", english: "Identity debate", category: "Débats et enjeux actuels" },
  { french: "Nationalisme", english: "Nationalism", category: "Débats et enjeux actuels" },
  { french: "Nationalisme extrême", english: "Extreme nationalism", category: "Débats et enjeux actuels" },
  { french: "Populisme", english: "Populism", category: "Débats et enjeux actuels" },
  { french: "Identité régionale", english: "Regional identity", category: "Débats et enjeux actuels" },
  { french: "Décentralisation", english: "Devolution", category: "Débats et enjeux actuels" },
  { french: "Autonomie", english: "Autonomy", category: "Débats et enjeux actuels" },
  { french: "Identité locale", english: "Local identity", category: "Débats et enjeux actuels" },
  { french: "Tradition", english: "Tradition", category: "Débats et enjeux actuels" },
  { french: "Identité linguistique", english: "Linguistic identity", category: "Débats et enjeux actuels" },
];

const CivilReligionVocabularyPage = () => (
  <EnglishVocabularyTemplate
    themeLabel="Civil Religion"
    themeSlug="civil-religion"
    title="Vocabulaire Religion civile et Identité nationale (FR → EN)"
    Icon={Church}
    data={vocabularyData}
  />
);

export default CivilReligionVocabularyPage;
