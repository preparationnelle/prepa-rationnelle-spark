import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import ArticleAnglaisGrammaire from "./ArticleAnglaisGrammaire";
import ArticleAnglaisProgress from "./ArticleAnglaisProgress";
import ArticleAnglaisThemes from "./ArticleAnglaisThemes";
import ArticleAnglaisColles from "./ArticleAnglaisColles";

export default function MethodAnglaisPage() {
  return (
    <div className="container max-w-3xl py-10 animate-fade-in space-y-8">
      {/* Article 1 */}
      <Card>
        <CardHeader>
          <CardTitle>Méthodologie Anglais : Réussir les épreuves en prépa ECG</CardTitle>
        </CardHeader>
        <CardContent>
          <ArticleAnglaisGrammaire />
        </CardContent>
      </Card>

      {/* Article 2 */}
      <Card>
        <CardHeader>
          <CardTitle>Garder une trace de vos progrès : un point essentiel</CardTitle>
        </CardHeader>
        <CardContent>
          <ArticleAnglaisProgress />
        </CardContent>
      </Card>

      {/* Article 3 */}
      <Card>
        <CardHeader>
          <CardTitle>Approfondir les Thèmes qui tombent aux concours et l’actualité</CardTitle>
        </CardHeader>
        <CardContent>
          <ArticleAnglaisThemes />
        </CardContent>
      </Card>

      {/* Article 4 */}
      <Card>
        <CardHeader>
          <CardTitle>Préparation Structurée des Colles</CardTitle>
        </CardHeader>
        <CardContent>
          <ArticleAnglaisColles />
        </CardContent>
      </Card>
    </div>
  );
}
