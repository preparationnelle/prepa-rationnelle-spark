
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function MethodGeopolitiquePage() {
  return (
    <div className="container max-w-2xl py-10 animate-fade-in">
      <Card>
        <CardHeader>
          <CardTitle>Géopolitique – Méthodologie ECG</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Module à venir – conseils méthodologiques, plans et astuces pour la géopolitique arriveront très bientôt !
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
