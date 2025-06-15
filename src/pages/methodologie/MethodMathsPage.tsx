
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function MethodMathsPage() {
  return (
    <div className="container max-w-2xl py-10 animate-fade-in">
      <Card>
        <CardHeader>
          <CardTitle>Maths – Méthodologie ECG</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Module en préparation – la méthodologie complète pour réussir en maths sera bientôt disponible ici !
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
