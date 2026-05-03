import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Flag, Users, Vote, Shield, Globe, Crown, AlertTriangle, BookOpen } from 'lucide-react';

const VocabWord = ({ word, explanation }: { word: string; explanation: string }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const tooltipRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (tooltipRef.current && !tooltipRef.current.contains(event.target as Node)) {
        setShowTooltip(false);
      }
    };
    if (showTooltip) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showTooltip]);

  return (
    <span className="relative inline-block" ref={tooltipRef}>
      <span className="font-bold text-orange-700 cursor-pointer hover:text-orange-900 transition-colors" onClick={() => setShowTooltip(!showTooltip)}>
        {word}
      </span>
      {showTooltip && (
        <span className="absolute z-50 top-full left-0 mt-2 w-72 p-3 bg-white border-2 border-orange-400 rounded-lg shadow-xl text-sm text-gray-700">
          <span className="font-semibold text-orange-700 block mb-1">Erklärung:</span>
          <span className="text-gray-800">{explanation}</span>
          <span className="absolute bottom-full left-4 border-8 border-transparent border-b-orange-400"></span>
        </span>
      )}
    </span>
  );
};

const PolitikAllemandePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-6">
            <Link to="/formation/allemand/civilisation">
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Retour à la civilisation
              </Button>
            </Link>
          </div>

          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-3">
              Politik in Deutschland
            </h1>
            <p className="text-base text-gray-600 max-w-3xl mx-auto">
              Une analyse complète du système politique allemand : élections 2025, chanceliers, partis et défis actuels
            </p>
          </div>
        </div>

        {/* Statistiques élections 2025 */}
        <Card className="mb-8 border shadow-sm">
          <CardHeader className="bg-gray-50">
            <CardTitle className="text-lg font-semibold text-center text-gray-900 flex items-center justify-center gap-2">
              <Vote className="w-5 h-5 text-orange-700" />
              Bundestagswahl 2025 - Ergebnisse
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
              <div className="p-3 bg-gray-50 rounded-lg border">
                <div className="text-2xl font-bold text-gray-900">28,5%</div>
                <div className="text-xs text-gray-600 mt-1">CDU/CSU</div>
              </div>
              <div className="p-3 bg-orange-50 rounded-lg border border-orange-200">
                <div className="text-2xl font-bold text-orange-700">20,8%</div>
                <div className="text-xs text-gray-600 mt-1">AfD</div>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg border">
                <div className="text-2xl font-bold text-gray-900">16,4%</div>
                <div className="text-xs text-gray-600 mt-1">SPD</div>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg border">
                <div className="text-2xl font-bold text-gray-900">11,6%</div>
                <div className="text-xs text-gray-600 mt-1">Grüne</div>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg border">
                <div className="text-2xl font-bold text-gray-900">8,8%</div>
                <div className="text-xs text-gray-600 mt-1">Linke</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 1: Wahlergebnis */}
        <Card className="mb-6 border shadow-sm">
          <CardHeader className="border-b bg-gray-50">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-orange-50 rounded-lg border border-orange-200 text-orange-700">
                <Flag className="w-5 h-5" />
              </div>
              <CardTitle className="text-lg font-semibold text-gray-900">
                1. Wahlergebnis und neue Kräfteverhältnisse (23. Februar 2025)
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Bei der <VocabWord word="Bundestagswahl" explanation="élection fédérale allemande" /> am 23. Februar 2025 erhielt die <VocabWord word="CDU/CSU" explanation="Union chrétienne-démocrate / Union chrétienne-sociale" /> unter Friedrich Merz 28,5 % der Stimmen (208 Sitze), während die <VocabWord word="AfD" explanation="Alternative für Deutschland, parti d'extrême droite" /> mit 20,8 % (152 Sitze) ihr bestes Ergebnis erreichte.
              </p>
              <p>
                Die SPD sank auf 16,4 %, die Grünen erreichten 11,6 %, und die Linke legte auf 8,8 % zu. Die AfD wurde zur stärksten <VocabWord word="Oppositionspartei" explanation="parti d'opposition" /> – mit <VocabWord word="Sonderrechten" explanation="prérogatives spéciales" /> im Parlament.
              </p>
              <p>
                Diese Ergebnisse markieren einen klaren <VocabWord word="Rechtsruck" explanation="virage à droite" /> und eine deutliche <VocabWord word="Abstrafung" explanation="sanction, punition" /> der bisherigen großen Koalition.
              </p>
              <div className="mt-4 p-4 bg-orange-50 border-l-4 border-orange-500">
                <p className="text-sm font-semibold text-gray-900 mb-2">📝 Essai-Nutzung:</p>
                <p className="text-sm">Kontext für politische Umbrüche; Argument über Fragmentierung und neue Mehrheitsverhältnisse.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 2: Koalitionschaos */}
        <Card className="mb-6 border shadow-sm">
          <CardHeader className="border-b bg-gray-50">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-orange-50 rounded-lg border border-orange-200 text-orange-700">
                <Users className="w-5 h-5" />
              </div>
              <CardTitle className="text-lg font-semibold text-gray-900">
                2. Koalitionschaos und Regierungsbildung
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Nach der Wahl gelang Friedrich Merz die Wahl zum <VocabWord word="Bundeskanzler" explanation="chancelier fédéral" /> erst in der <VocabWord word="zweiten Abstimmungsrunde" explanation="deuxième tour de vote" /> am 6. Mai 2025 mit 325 von 316 nötigen Stimmen – ein Zeichen für die <VocabWord word="fragile Mehrheit" explanation="majorité fragile" /> seiner Koalition mit der SPD.
              </p>
              <p>
                Die AfD erhielt eine wichtige Position als größte Oppositionspartei und beeinflusst Debatten durch erhöhte <VocabWord word="Redezeiten" explanation="temps de parole" /> und Sitze in <VocabWord word="Ausschüssen" explanation="commissions parlementaires" />.
              </p>
              <div className="mt-4 p-4 bg-orange-50 border-l-4 border-orange-500">
                <p className="text-sm font-semibold text-gray-900 mb-2">📝 Essai-Nutzung:</p>
                <p className="text-sm">Strukturvergleich zur Stabilität – oder Instabilität – in parlamentarischen Systemen; Rolle von Mehrheiten.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 3: Protestbewegungen */}
        <Card className="mb-6 border shadow-sm">
          <CardHeader className="border-b bg-gray-50">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-orange-50 rounded-lg border border-orange-200 text-orange-700">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <CardTitle className="text-lg font-semibold text-gray-900">
                3. Protestbewegungen und "Brandmauer" gegen die AfD
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Vor der Wahl führten massenhafte <VocabWord word="Protestbewegungen" explanation="mouvements de protestation" /> (2024–2025) in Städten wie Berlin oder Hamburg zu Hunderttausenden Teilnehmern, um die Demokratie gegen die AfD zu <VocabWord word="verteidigen" explanation="défendre" />.
              </p>
              <p>
                Die Proteste, sogenannte <VocabWord word="Brandmauer-Demos" explanation="manifestations barrière de feu (contre l'extrême droite)" />, richteten sich gegen <VocabWord word="Kooperationen" explanation="coopérations" /> mit der AfD, insbesondere nach einer <VocabWord word="umstrittenen" explanation="controversée" /> Parlamentsentscheidung zur Einwanderung Ende Januar 2025.
              </p>
              <div className="mt-4 p-4 bg-orange-50 border-l-4 border-orange-500">
                <p className="text-sm font-semibold text-gray-900 mb-2">📝 Essai-Nutzung:</p>
                <p className="text-sm">Beispiel ziviler Mobilisierung und demokratischer Abwehr gegenüber extremistischen Tendenzen.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 4: Verfassungsschutz */}
        <Card className="mb-6 border shadow-sm">
          <CardHeader className="border-b bg-gray-50">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-orange-50 rounded-lg border border-orange-200 text-orange-700">
                <Shield className="w-5 h-5" />
              </div>
              <CardTitle className="text-lg font-semibold text-gray-900">
                4. AfD als Beobachtungsobjekt des Verfassungsschutzes
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Im April 2025 wurde die AfD vom <VocabWord word="Bundesamt für Verfassungsschutz" explanation="Office fédéral de protection de la Constitution" /> (BfV) als „bestätigte <VocabWord word="rechtsextreme" explanation="extrême droite" /> Bestrebung" eingestuft.
              </p>
              <p>
                Der umfassende (1.100-seitige) Bericht bezeichnet die Partei als rassistisch und anti-muslimisch. Dies ermöglicht staatliche <VocabWord word="Überwachung" explanation="surveillance" /> und mögliche Kürzung der <VocabWord word="öffentlichen Mittel" explanation="fonds publics" /> – und verstärkt die Debatte über ein <VocabWord word="Verbot" explanation="interdiction" /> der AfD.
              </p>
              <div className="mt-4 p-4 bg-orange-50 border-l-4 border-orange-500">
                <p className="text-sm font-semibold text-gray-900 mb-2">📝 Essai-Nutzung:</p>
                <p className="text-sm">Institutionelle Reaktionen auf politische Extremismen; Balance zwischen Demokratie und Sicherheit.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 5: Ukraine-Mission */}
        <Card className="mb-6 border shadow-sm">
          <CardHeader className="border-b bg-gray-50">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-orange-50 rounded-lg border border-orange-200 text-orange-700">
                <Globe className="w-5 h-5" />
              </div>
              <CardTitle className="text-lg font-semibold text-gray-900">
                5. Internationale Herausforderungen: Ukraine-Mission und Bundeswehr
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Am 21. August 2025 sorgte der Vorschlag für einen <VocabWord word="Friedenssicherungseinsatz" explanation="mission de maintien de la paix" /> in der Ukraine für innenpolitische Debatten. Kanzler Merz zeigte sich vorsichtig offen – unter Bedingungen: <VocabWord word="Zustimmung" explanation="approbation" /> des Bundestags und europäische Koordination.
              </p>
              <p>
                Doch AfD und Teile von CDU und SPD warnten vor gefährlicher <VocabWord word="Militarisierung" explanation="militarisation" />. Laut <VocabWord word="Umfrage" explanation="sondage" /> unterstützten 49 % der Deutschen den Einsatz, 45 % sprachen sich dagegen aus, mit stärkerer Ablehnung im Osten.
              </p>
              <div className="mt-4 p-4 bg-orange-50 border-l-4 border-orange-500">
                <p className="text-sm font-semibold text-gray-900 mb-2">📝 Essai-Nutzung:</p>
                <p className="text-sm">Außenpolitik & Erinnerungskultur; zivil-militärische Sensibilität Deutschlands im Kontext seiner Geschichte.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 6: Elon Musk */}
        <Card className="mb-6 border shadow-sm">
          <CardHeader className="border-b bg-gray-50">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-orange-50 rounded-lg border border-orange-200 text-orange-700">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <CardTitle className="text-lg font-semibold text-gray-900">
                6. Elon Musk und die AfD
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Elon Musk hat kürzlich mit seinen Aussagen in Deutschland für <VocabWord word="Aufsehen" explanation="sensation, émoi" /> gesorgt. Er äußerte öffentlich <VocabWord word="Unterstützung" explanation="soutien" /> für die AfD, eine umstrittene Partei, die als <VocabWord word="rechtspopulistisch" explanation="populiste de droite" /> gilt.
              </p>
              <p>
                Diese <VocabWord word="Stellungnahme" explanation="prise de position" /> hat eine heftige Debatte ausgelöst, da viele Politiker und Bürger dies als <VocabWord word="Einmischung" explanation="ingérence, immixtion" /> in die deutsche Politik empfinden. Bundeskanzler Olaf Scholz bezeichnete Musks Worte als „inakzeptabel".
              </p>
              <p>
                Gleichzeitig erlebt die AfD einen <VocabWord word="Aufschwung" explanation="essor, montée" /> in den Umfragen, was die politische Landschaft vor den Neuwahlen weiter <VocabWord word="polarisiert" explanation="polarise" />.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Section historique */}
        <Card className="mb-6 border shadow-sm">
          <CardHeader className="border-b bg-gray-50">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-orange-50 rounded-lg border border-orange-200 text-orange-700">
                <BookOpen className="w-5 h-5" />
              </div>
              <CardTitle className="text-lg font-semibold text-gray-900">
                7. Historischer Kontext: Das föderale System nach 1945
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Die <VocabWord word="Alliierten" explanation="les Alliés (USA, UK, France, URSS)" /> haben nach dem Zweiten Weltkrieg entschieden, Deutschlands Politik zu führen. Im Westen wurde ein <VocabWord word="föderales" explanation="fédéral" /> System nach amerikanischem <VocabWord word="Vorbild" explanation="modèle" /> eingeführt, um die <VocabWord word="Machtkonzentration" explanation="concentration du pouvoir" /> zu verhindern und Demokratie zu garantieren.
              </p>
              <p>
                Eine <VocabWord word="Koalition" explanation="coalition" /> wird mit einigen Parteien gebildet. Ihre Mitglieder müssen immer <VocabWord word="Kompromisse" explanation="compromis" /> eingehen, das heißt keine gefährlichen Entscheidungen für Deutschland und seine Demokratie.
              </p>
              <p>
                Heutzutage war die <VocabWord word="Ampelkoalition" explanation="coalition tricolore (SPD rouge, Grüne vert, FDP jaune)" /> (2021-2025) das Paradebeispiel dieses <VocabWord word="Pragmatismus" explanation="pragmatisme" /> auf politischer Ebene.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Section 8: Bundespräsident */}
        <Card className="mb-6 border shadow-sm">
          <CardHeader className="border-b bg-gray-50">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-orange-50 rounded-lg border border-orange-200 text-orange-700">
                <Crown className="w-5 h-5" />
              </div>
              <CardTitle className="text-lg font-semibold text-gray-900">
                8. Die Rolle des Bundespräsidenten in Deutschland
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Der <VocabWord word="Bundespräsident" explanation="président fédéral" /> hat eine <VocabWord word="überparteiliche" explanation="au-dessus des partis, non partisan" /> Funktion und er <VocabWord word="verkörpert" explanation="incarne" /> die Einheit der Nation. Seit 2017 ist Frank-Walter Steinmeier (SPD) der Bundespräsident Deutschlands.
              </p>
              <p>
                Zurzeit spielt Präsident Steinmeier eine <VocabWord word="Schlüsselrolle" explanation="rôle clé" /> für die deutsche Diplomatie. Am 8. Mai 2022 hält Steinmeier eine Rede zum Ende des Zweiten Weltkriegs. Es war ein besonderer Moment, insofern als es wieder Krieg innerhalb Europas gab.
              </p>
              <p>
                Steinmeier hat der Ukraine die deutsche Unterstützung gegen den russischen <VocabWord word="Angreifer" explanation="agresseur" /> gezeigt. Es ist auch ein <VocabWord word="Wendepunkt" explanation="tournant" /> für Deutschland, weil es sehr <VocabWord word="abhängig" explanation="dépendant" /> von Gas aus Russland ist. Es ist ein <VocabWord word="Kurswechsel" explanation="changement de cap" /> für Deutschland.
              </p>
              <p className="font-semibold text-orange-700">
                "Epochbruch" - Steinmeier (rupture d'époque)
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Section 9: Bundeskanzler - DÉTAILLÉ */}
        <Card className="mb-8 border shadow-sm">
          <CardHeader className="border-b bg-gray-50">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-orange-50 rounded-lg border border-orange-200 text-orange-700">
                <Crown className="w-5 h-5" />
              </div>
              <CardTitle className="text-lg font-semibold text-gray-900">
                9. Die deutschen Bundeskanzler und ihre Politik
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-6">

              {/* Adenauer */}
              <div className="border-l-4 border-orange-500 pl-4 py-2">
                <h3 className="font-bold text-gray-900 mb-2">👤 Konrad Adenauer (CDU) 1949-1963</h3>
                <div className="space-y-2 text-gray-700 text-sm leading-relaxed">
                  <p>
                    Konrad Adenauer war der erste Kanzler Deutschlands der <VocabWord word="Nachkriegszeit" explanation="période d'après-guerre" />. Er ist bekannt für den <VocabWord word="Wiederaufbau" explanation="reconstruction" /> der <VocabWord word="Bundesrepublik" explanation="République fédérale" />.
                  </p>
                  <p>
                    Adenauer ist eine besonders wichtige Figur für seine <VocabWord word="Außenpolitik" explanation="politique étrangère" />, insbesondere für die <VocabWord word="Aussöhnung" explanation="réconciliation" /> mit Israel und mit Frankreich (deutsch-französische Freundschaft und der <VocabWord word="Élysée-Vertrag" explanation="traité de l'Élysée" /> 1963).
                  </p>
                  <p className="text-xs italic text-gray-600">
                    ➕ Il a aussi favorisé l'intégration à l'OTAN (1955) et la fondation de l'UE (CECA, CEE).
                  </p>
                </div>
              </div>

              {/* Erhard */}
              <div className="border-l-4 border-orange-500 pl-4 py-2">
                <h3 className="font-bold text-gray-900 mb-2">👤 Ludwig Erhard (CDU) 1963-1966</h3>
                <div className="space-y-2 text-gray-700 text-sm leading-relaxed">
                  <p>
                    Ludwig Erhard war der Kanzler des <VocabWord word="Wirtschaftswunders" explanation="miracle économique" /> und der <VocabWord word="Sozialen Marktwirtschaft" explanation="économie sociale de marché" />. Sein Motto war: „<VocabWord word="Wohlstand für alle" explanation="prospérité pour tous" />".
                  </p>
                  <p className="text-xs italic text-gray-600">
                    ➕ Il a poursuivi l'œuvre d'Adenauer mais a eu du mal à garder l'unité politique de la CDU.
                  </p>
                </div>
              </div>

              {/* Brandt */}
              <div className="border-l-4 border-orange-500 pl-4 py-2">
                <h3 className="font-bold text-gray-900 mb-2">👤 Willy Brandt (SPD) 1969-1974</h3>
                <div className="space-y-2 text-gray-700 text-sm leading-relaxed">
                  <p>
                    Willy Brandt ist einer der beliebtesten Bundeskanzler dank seiner <VocabWord word="Entspannungspolitik" explanation="politique de détente (Ostpolitik)" />. Der <VocabWord word="Kniefall von Warschau" explanation="agenouillement de Varsovie" /> ist ein wichtiger Moment für die <VocabWord word="Aufarbeitung der Vergangenheit" explanation="travail de mémoire du passé" />.
                  </p>
                  <p className="text-xs italic text-gray-600">
                    ➕ Il reçoit le Prix Nobel de la Paix en 1971. Il a initié un rapprochement avec la RDA et l'Est (traités avec l'URSS, la Pologne, etc.).
                  </p>
                </div>
              </div>

              {/* Kohl */}
              <div className="border-l-4 border-orange-500 pl-4 py-2">
                <h3 className="font-bold text-gray-900 mb-2">👤 Helmut Kohl (CDU) 1982-1998</h3>
                <div className="space-y-2 text-gray-700 text-sm leading-relaxed">
                  <p>
                    Helmut Kohl ist der Kanzler der <VocabWord word="Wiedervereinigung" explanation="réunification allemande" /> (1990). Er spielt eine wichtige Rolle für Europa, insofern er den Euro als <VocabWord word="Währung" explanation="monnaie" /> akzeptiert.
                  </p>
                  <p className="text-xs italic text-gray-600">
                    ➕ Il est le plus longtemps resté au pouvoir après Adenauer (16 ans). Partisan fort de l'intégration européenne (traité de Maastricht, 1992).
                  </p>
                </div>
              </div>

              {/* Schröder */}
              <div className="border-l-4 border-orange-500 pl-4 py-2">
                <h3 className="font-bold text-gray-900 mb-2">👤 Gerhard Schröder (SPD) 1998-2005</h3>
                <div className="space-y-2 text-gray-700 text-sm leading-relaxed">
                  <p>
                    Gerhard Schröder hat wichtige <VocabWord word="Arbeitsreformen" explanation="réformes du marché du travail" /> beschlossen. Sein Programm heißt „<VocabWord word="Agenda 2010" explanation="programme de réformes économiques" />".
                  </p>
                  <p className="text-xs italic text-gray-600">
                    ➕ Réformes Hartz IV, flexibilité du travail, baisse du chômage. Il s'est opposé à la guerre en Irak (2003). A misé sur une relation économique forte avec la Russie.
                  </p>
                </div>
              </div>

              {/* Merkel */}
              <div className="border-l-4 border-orange-500 pl-4 py-2">
                <h3 className="font-bold text-gray-900 mb-2">👤 Angela Merkel (CDU) 2005-2021</h3>
                <div className="space-y-2 text-gray-700 text-sm leading-relaxed">
                  <p>
                    Angela Merkel war die erste <VocabWord word="Bundeskanzlerin" explanation="chancelière fédérale" /> Deutschlands und eine der einflussreichsten Politikerinnen der Welt. Während ihrer 16-jährigen <VocabWord word="Amtszeit" explanation="mandat" /> führte sie Deutschland durch zahlreiche Krisen: <VocabWord word="Finanzkrise" explanation="crise financière" /> 2008, Eurokrise, <VocabWord word="Flüchtlingskrise" explanation="crise des réfugiés" /> 2015 und COVID-19-Pandemie.
                  </p>
                  <p>
                    Ihre Politik war geprägt von Pragmatismus und Stabilität. Merkel wurde für ihre humanitäre Haltung während der Flüchtlingskrise bekannt: „<VocabWord word="Wir schaffen das" explanation="nous y arriverons" />" (2015).
                  </p>
                  <p>
                    Ihre <VocabWord word="Energiepolitik" explanation="politique énergétique" /> („Energiewende") und der <VocabWord word="Atomausstieg" explanation="sortie du nucléaire" /> prägten die deutsche Klimapolitik nachhaltig.
                  </p>
                </div>
              </div>

              {/* Scholz */}
              <div className="border-l-4 border-orange-500 pl-4 py-2">
                <h3 className="font-bold text-gray-900 mb-2">👤 Olaf Scholz (SPD) 2021-2025</h3>
                <div className="space-y-2 text-gray-700 text-sm leading-relaxed">
                  <p>
                    Olaf Scholz übernahm das Amt im Dezember 2021 und führte eine <VocabWord word="Ampelkoalition" explanation="coalition tricolore" /> aus SPD, Grünen und FDP. Seine Kanzlerschaft begann in einer Zeit globaler Herausforderungen, insbesondere durch den russischen <VocabWord word="Angriffskrieg" explanation="guerre d'agression" /> gegen die Ukraine.
                  </p>
                  <p>
                    Scholz kündigte eine sogenannte „<VocabWord word="Zeitenwende" explanation="tournant historique" />" in der deutschen Sicherheitspolitik an, einschließlich einer massiven Erhöhung des <VocabWord word="Verteidigungshaushalts" explanation="budget de défense" />.
                  </p>
                  <p>
                    Innenpolitisch verfolgt er Maßnahmen zur sozialen Gerechtigkeit, wie die Erhöhung des <VocabWord word="Mindestlohns" explanation="salaire minimum" />.
                  </p>
                </div>
              </div>

              {/* Merz */}
              <div className="border-l-4 border-orange-500 pl-4 py-2 bg-orange-50">
                <h3 className="font-bold text-gray-900 mb-2">👤 Friedrich Merz (CDU) 2025–</h3>
                <div className="space-y-2 text-gray-700 text-sm leading-relaxed">
                  <p>
                    Er wurde Kanzler im Mai 2025, übernahm nach einer historischen Ausnahme der zweiten Wahlrunde im Bundestag. Programm: EU-Stärkung, ein „High-EU-Defence-Community", umfangreiche Investitionen – 500 Mrd. € Infrastruktur und Klimaneutralität, <VocabWord word="Verteidigungsausgaben" explanation="dépenses de défense" /> über der <VocabWord word="Schuldenbremse" explanation="frein à l'endettement" />.
                  </p>
                  <p>
                    Aktuell ringt er mit ökonomischen Schwierigkeiten: Wirtschaft <VocabWord word="stagniert" explanation="stagne" />, Industrie schrumpft – und laut Umfragen ist die Unzufriedenheit hoch. AfD liegt nun gleichauf mit CDU/CSU bei etwa 25 %, während Merz' <VocabWord word="Zustimmungswerte" explanation="taux d'approbation" /> fallen – 62 % sind unzufrieden mit der Regierung.
                  </p>
                  <p>
                    Gleichzeitig ist eine Debatte entfacht um mögliche Friedensmission in der Ukraine – Bevölkerungsmeinung gespalten: 49 % dafür, 45 % dagegen.
                  </p>
                </div>
              </div>

            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="mt-8 pt-8 border-t">
          <Link to="/formation/allemand/civilisation">
            <Button variant="outline" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Retour à la civilisation
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PolitikAllemandePage;