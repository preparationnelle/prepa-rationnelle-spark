
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import ArticleAnglaisGrammaire from "./ArticleAnglaisGrammaire";
import ArticleAnglaisProgress from "./ArticleAnglaisProgress";

export default function MethodAnglaisPage() {
  return (
    <div className="container max-w-3xl py-10 animate-fade-in space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Méthodologie Anglais : Réussir les épreuves en prépa ECG</CardTitle>
        </CardHeader>
        <CardContent>
          <ArticleAnglaisGrammaire />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Progresser rapidement et durablement</CardTitle>
        </CardHeader>
        <CardContent>
          <ArticleAnglaisProgress />
        </CardContent>
      </Card>
    </div>
  );
}
