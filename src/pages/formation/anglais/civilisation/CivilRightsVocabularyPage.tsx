import React from 'react';
import { Shield } from 'lucide-react';
import { EnglishVocabularyTemplate, EnglishVocabularyItem } from '@/components/formation/anglais/EnglishVocabularyTemplate';

const vocabularyData: EnglishVocabularyItem[] = [
  // 1. Droits fondamentaux / Fundamental Rights
  { french: "Droits civiques", english: "Civil rights", category: "Droits fondamentaux" },
  { french: "Droits humains", english: "Human rights", category: "Droits fondamentaux" },
  { french: "Droits politiques", english: "Political rights", category: "Droits fondamentaux" },
  { french: "Droits économiques", english: "Economic rights", category: "Droits fondamentaux" },
  { french: "Droits culturels", english: "Cultural rights", category: "Droits fondamentaux" },
  { french: "Droits des minorités", english: "Minority rights", category: "Droits fondamentaux" },
  { french: "Droits des femmes", english: "Women's rights", category: "Droits fondamentaux" },
  { french: "Droits des travailleurs", english: "Workers' rights", category: "Droits fondamentaux" },
  { french: "Droits des enfants", english: "Children's rights", category: "Droits fondamentaux" },
  { french: "Droits des LGBTQ+", english: "LGBTQ+ rights", category: "Droits fondamentaux" },

  // 2. Libertés individuelles / Individual Freedoms
  { french: "Liberté", english: "Freedom", category: "Libertés individuelles" },
  { french: "Liberté d'expression", english: "Freedom of speech", category: "Libertés individuelles" },
  { french: "Liberté religieuse", english: "Religious freedom", category: "Libertés individuelles" },
  { french: "Liberté d'association", english: "Freedom of association", category: "Libertés individuelles" },
  { french: "Émancipation", english: "Emancipation", category: "Libertés individuelles" },
  { french: "Émancipation sociale", english: "Social emancipation", category: "Libertés individuelles" },
  { french: "Droits des réfugiés", english: "Refugee rights", category: "Libertés individuelles" },
  { french: "Droits des autochtones", english: "Indigenous rights", category: "Libertés individuelles" },
  { french: "Droits des personnes handicapées", english: "Disability rights", category: "Libertés individuelles" },
  { french: "Droits des migrants", english: "Migrant rights", category: "Libertés individuelles" },

  // 3. Égalité et justice / Equality and Justice
  { french: "Égalité", english: "Equality", category: "Égalité et justice" },
  { french: "Justice sociale", english: "Social justice", category: "Égalité et justice" },
  { french: "Égalité raciale", english: "Racial equality", category: "Égalité et justice" },
  { french: "Égalité de genre", english: "Gender equality", category: "Égalité et justice" },
  { french: "Égalité sociale", english: "Social equality", category: "Égalité et justice" },
  { french: "Égalité économique", english: "Economic equality", category: "Égalité et justice" },
  { french: "Égalité culturelle", english: "Cultural equality", category: "Égalité et justice" },
  { french: "Égalité des chances", english: "Equal opportunity", category: "Égalité et justice" },
  { french: "Égalité des droits", english: "Equal rights", category: "Égalité et justice" },
  { french: "Égalité raciale globale", english: "Global racial equality", category: "Égalité et justice" },

  // 4. Mouvements sociaux / Social Movements
  { french: "Mouvement social", english: "Social movement", category: "Mouvements sociaux" },
  { french: "Mouvement féministe", english: "Feminist movement", category: "Mouvements sociaux" },
  { french: "Mouvement ouvrier", english: "Labor movement", category: "Mouvements sociaux" },
  { french: "Mouvement écologique", english: "Environmental movement", category: "Mouvements sociaux" },
  { french: "Mouvement pacifiste", english: "Pacifist movement", category: "Mouvements sociaux" },
  { french: "Mouvement étudiant", english: "Student movement", category: "Mouvements sociaux" },
  { french: "Mouvement communautaire", english: "Community movement", category: "Mouvements sociaux" },
  { french: "Mouvement de libération", english: "Liberation movement", category: "Mouvements sociaux" },
  { french: "Mouvement anti-guerre", english: "Anti-war movement", category: "Mouvements sociaux" },
  { french: "Mouvement progressiste", english: "Progressive movement", category: "Mouvements sociaux" },

  // 5. Mobilisation et résistance / Mobilization and Resistance
  { french: "Mobilisation", english: "Mobilization", category: "Mobilisation et résistance" },
  { french: "Mobilisation populaire", english: "Popular mobilization", category: "Mobilisation et résistance" },
  { french: "Mobilisation des femmes", english: "Women's mobilization", category: "Mobilisation et résistance" },
  { french: "Mobilisation des minorités", english: "Minority mobilization", category: "Mobilisation et résistance" },
  { french: "Mobilisation écologique", english: "Ecological mobilization", category: "Mobilisation et résistance" },
  { french: "Mobilisation internationale", english: "International mobilization", category: "Mobilisation et résistance" },
  { french: "Résistance", english: "Resistance", category: "Mobilisation et résistance" },
  { french: "Résistance non violente", english: "Nonviolent resistance", category: "Mobilisation et résistance" },
  { french: "Résistance culturelle", english: "Cultural resistance", category: "Mobilisation et résistance" },
  { french: "Résistance politique", english: "Political resistance", category: "Mobilisation et résistance" },

  // 6. Lutte et protestation / Struggle and Protest
  { french: "Lutte", english: "Struggle", category: "Lutte et protestation" },
  { french: "Lutte contre l'injustice", english: "Fight against injustice", category: "Lutte et protestation" },
  { french: "Lutte pour la liberté", english: "Fight for freedom", category: "Lutte et protestation" },
  { french: "Lutte contre la pauvreté", english: "Fight against poverty", category: "Lutte et protestation" },
  { french: "Lutte pour l'inclusion", english: "Fight for inclusion", category: "Lutte et protestation" },
  { french: "Protestation", english: "Protest", category: "Lutte et protestation" },
  { french: "Manifestation", english: "Demonstration", category: "Lutte et protestation" },
  { french: "Grève", english: "Strike", category: "Lutte et protestation" },
  { french: "Boycott", english: "Boycott", category: "Lutte et protestation" },
  { french: "Désobéissance civile", english: "Civil disobedience", category: "Lutte et protestation" },

  // 7. Solidarité et cohésion / Solidarity and Cohesion
  { french: "Solidarité", english: "Solidarity", category: "Solidarité et cohésion" },
  { french: "Solidarité internationale", english: "International solidarity", category: "Solidarité et cohésion" },
  { french: "Solidarité ouvrière", english: "Workers' solidarity", category: "Solidarité et cohésion" },
  { french: "Solidarité intergénérationnelle", english: "Intergenerational solidarity", category: "Solidarité et cohésion" },
  { french: "Solidarité communautaire", english: "Community solidarity", category: "Solidarité et cohésion" },
  { french: "Solidarité globale", english: "Global solidarity", category: "Solidarité et cohésion" },
  { french: "Solidarité transnationale", english: "Transnational solidarity", category: "Solidarité et cohésion" },
  { french: "Cohésion sociale", english: "Social cohesion", category: "Solidarité et cohésion" },
  { french: "Intégration", english: "Integration", category: "Solidarité et cohésion" },
  { french: "Multiculturalisme", english: "Multiculturalism", category: "Solidarité et cohésion" },

  // 8. Réforme et changement / Reform and Change
  { french: "Réforme", english: "Reform", category: "Réforme et changement" },
  { french: "Réforme institutionnelle", english: "Institutional reform", category: "Réforme et changement" },
  { french: "Justice transitionnelle", english: "Transitional justice", category: "Réforme et changement" },
  { french: "Mouvement pour les droits", english: "Rights movement", category: "Réforme et changement" },
  { french: "Mouvement pour la justice", english: "Justice movement", category: "Réforme et changement" },
  { french: "Mouvement pour la paix", english: "Peace movement", category: "Réforme et changement" },
  { french: "Mouvement pour le changement", english: "Change movement", category: "Réforme et changement" },
  { french: "Mouvement de base", english: "Grassroots movement", category: "Réforme et changement" },
  { french: "Mouvement citoyen", english: "Citizen movement", category: "Réforme et changement" },
  { french: "Mouvement des droits civiques", english: "Civil rights movement", category: "Réforme et changement" },

  // 9. Participation et inclusion / Participation and Inclusion
  { french: "Inclusion", english: "Inclusion", category: "Participation et inclusion" },
  { french: "Participation citoyenne", english: "Citizen participation", category: "Participation et inclusion" },
  { french: "Participation politique", english: "Political participation", category: "Participation et inclusion" },
  { french: "Éducation civique", english: "Civic education", category: "Participation et inclusion" },
  { french: "Antiracisme", english: "Antiracism", category: "Participation et inclusion" },
  { french: "Droits des jeunes", english: "Youth rights", category: "Participation et inclusion" },
  { french: "Droits des aînés", english: "Elderly rights", category: "Participation et inclusion" },
  { french: "Droits des animaux", english: "Animal rights", category: "Participation et inclusion" },
  { french: "Droits environnementaux", english: "Environmental rights", category: "Participation et inclusion" },
  { french: "Droits universels", english: "Universal rights", category: "Participation et inclusion" },

  // 10. Syndicalisme et travail / Trade Unionism and Work
  { french: "Mouvement syndical", english: "Trade union movement", category: "Syndicalisme et travail" },
  { french: "Activism", english: "Activism", category: "Syndicalisme et travail" },
  { french: "Répression", english: "Repression", category: "Syndicalisme et travail" },
  { french: "Révolte", english: "Revolt", category: "Syndicalisme et travail" },
  { french: "Révolution", english: "Revolution", category: "Syndicalisme et travail" },
  { french: "Ségrégation", english: "Segregation", category: "Syndicalisme et travail" },
  { french: "Discrimination", english: "Discrimination", category: "Syndicalisme et travail" },
  { french: "Injustice", english: "Injustice", category: "Syndicalisme et travail" },
  { french: "Égalité devant la loi", english: "Equality before the law", category: "Syndicalisme et travail" },
  { french: "Résistance institutionnelle", english: "Institutional resistance", category: "Syndicalisme et travail" },
];

const CivilRightsVocabularyPage = () => (
  <EnglishVocabularyTemplate
    themeLabel="Civil Rights"
    themeSlug="civil-rights"
    title="Vocabulaire Droits civiques et Mouvements sociaux (FR → EN)"
    Icon={Shield}
    data={vocabularyData}
  />
);

export default CivilRightsVocabularyPage;
