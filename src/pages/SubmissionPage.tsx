
import React, { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { ArrowLeft, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

// Sample feedback for demonstration
const sampleFeedback = {
  score: 7,
  generalComment: "Votre essai démontre une bonne compréhension du sujet et une capacité à structurer un argumentaire cohérent. Vous présentez plusieurs perspectives intéressantes et vous appuyez sur des exemples pertinents. Quelques points pourraient être améliorés, notamment la profondeur de l'analyse dans certaines parties et la conclusion qui pourrait ouvrir davantage sur les enjeux futurs.",
  strengths: [
    "Structure claire et logique",
    "Bonne utilisation d'exemples concrets",
    "Introduction efficace qui pose bien le contexte"
  ],
  improvements: [
    "Approfondir l'analyse des contre-arguments",
    "Renforcer les transitions entre les parties",
    "Développer davantage la conclusion"
  ]
};

const SubmissionPage = () => {
  const [essayText, setEssayText] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<typeof sampleFeedback | null>(null);
  const { currentUser } = useAuth();
  const { toast } = useToast();

  const handleSubmit = async () => {
    if (essayText.trim().length < 100) {
      toast({
        title: "Texte trop court",
        description: "Votre essai doit contenir au moins 100 caractères.",
        variant: "destructive"
      });
      return;
    }

    setSubmitting(true);
    
    try {
      // In a real app, this would send the essay to an API for analysis
      // Here we simulate a delay and return the sample feedback
      setTimeout(() => {
        setFeedback(sampleFeedback);
        
        // Save the submission to Firestore
        if (currentUser) {
          addDoc(collection(db, "submissions"), {
            user_id: currentUser.uid,
            text: essayText,
            feedback: sampleFeedback,
            date: serverTimestamp(),
            score: sampleFeedback.score,
            status: "feedback_provided"
          });
        }
        
        setSubmitting(false);
      }, 2000);
    } catch (error) {
      console.error("Error submitting essay:", error);
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de la soumission de votre essai.",
        variant: "destructive"
      });
      setSubmitting(false);
    }
  };

  const handleNewSubmission = () => {
    setEssayText('');
    setFeedback(null);
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex items-center mb-8">
        <Button variant="ghost" size="icon" asChild className="mr-2">
          <Link to="/dashboard">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <h1 className="text-3xl font-bold">Soumettre un essai</h1>
      </div>
      
      {!feedback ? (
        <Card>
          <CardHeader>
            <CardTitle>Rédigez votre essai</CardTitle>
            <CardDescription>
              Développez votre argumentaire à partir d'un plan généré ou d'un sujet de votre choix
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Textarea 
              placeholder="Rédigez votre essai ici... Commencez par une introduction claire, développez votre argumentation en parties structurées, et concluez en synthétisant vos idées principales."
              className="min-h-[400px]"
              value={essayText}
              onChange={(e) => setEssayText(e.target.value)}
            />
          </CardContent>
          <CardFooter className="flex justify-between">
            <p className="text-sm text-muted-foreground">
              {essayText.length} caractères
              {essayText.length < 100 && essayText.length > 0 && " (minimum 100)"}
            </p>
            <Button 
              onClick={handleSubmit} 
              disabled={submitting || essayText.trim().length < 100}
              className="flex items-center"
            >
              {submitting ? "Analyse en cours..." : (
                <>
                  Soumettre pour analyse <Send className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </CardFooter>
        </Card>
      ) : (
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>Votre soumission</CardTitle>
                  <CardDescription>Essai soumis pour analyse</CardDescription>
                </div>
                <div className="bg-primary/10 text-primary font-semibold px-3 py-1 rounded-full">
                  Score: {feedback.score}/10
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="border rounded-md p-4 bg-gray-50 max-h-[200px] overflow-y-auto mb-4">
                <p className="text-sm whitespace-pre-wrap text-gray-700">{essayText}</p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Analyse et feedback</CardTitle>
              <CardDescription>Évaluation détaillée de votre essai</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-medium mb-2">Commentaire général</h3>
                <p className="text-gray-700">{feedback.generalComment}</p>
              </div>
              
              <div>
                <h3 className="font-medium mb-2 text-green-700">Points forts</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {feedback.strengths.map((strength, index) => (
                    <li key={index} className="text-gray-700">{strength}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="font-medium mb-2 text-amber-700">Axes d'amélioration</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {feedback.improvements.map((improvement, index) => (
                    <li key={index} className="text-gray-700">{improvement}</li>
                  ))}
                </ul>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleNewSubmission} className="w-full">
                Soumettre un nouvel essai
              </Button>
            </CardFooter>
          </Card>
        </div>
      )}
    </div>
  );
};

export default SubmissionPage;
