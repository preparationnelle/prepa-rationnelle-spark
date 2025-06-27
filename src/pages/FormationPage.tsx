
import React from 'react';
import { VideoAndIntro } from '@/components/VideoAndIntro';
import { ProgrammeModule } from '@/components/ProgrammeModule';

const FormationPage = () => {
  // Données d'exemple pour le module de programme
  const exampleModule = {
    programmeName: "Introduction à Python pour Prépa HEC",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    corrige: `# Exercice : Calculatrice simple
def calculatrice(a, b, operation):
    if operation == '+':
        return a + b
    elif operation == '-':
        return a - b
    elif operation == '*':
        return a * b
    elif operation == '/':
        return a / b if b != 0 else "Erreur: division par zéro"
    else:
        return "Opération non reconnue"

# Test
print(calculatrice(10, 5, '+'))  # Résultat: 15
print(calculatrice(10, 5, '*'))  # Résultat: 50`,
    explication: `# Explication du code

Cette fonction calculatrice prend trois paramètres :
- a : premier nombre
- b : deuxième nombre  
- operation : type d'opération à effectuer

# Points clés :
- Utilisation de conditions if/elif pour gérer les différentes opérations
- Gestion de l'erreur de division par zéro
- Retour d'un message d'erreur pour les opérations non reconnues

# Bonnes pratiques appliquées :
- Noms de variables explicites
- Gestion des cas d'erreur
- Commentaires descriptifs`,
    autresVersions: [
      "Version avec gestion d'exceptions try/except",
      "Version orientée objet avec classe Calculatrice",
      "Version avec interface graphique tkinter",
      "Version avec validation des types d'entrée"
    ],
    outils: [
      "python3 script.py - Exécuter le script",
      "python3 -i script.py - Mode interactif",
      "pip install pytest - Installer framework de tests",
      "python3 -m pytest - Lancer les tests unitaires"
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-orange-600 bg-clip-text text-transparent mb-4">
            Formation Prépa HEC
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez nos formations complètes pour réussir vos concours de prépa HEC. 
            Cours vidéo, exercices corrigés et outils pratiques.
          </p>
        </div>

        {/* Video and Intro Section */}
        <VideoAndIntro />

        {/* Programme Modules */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            Modules de Formation
          </h2>
          
          <div className="space-y-8">
            <ProgrammeModule {...exampleModule} />
            
            {/* Placeholder pour futurs modules */}
            <div className="border-2 border-dashed border-muted-foreground/20 rounded-lg p-8 text-center">
              <p className="text-muted-foreground">
                D'autres modules de formation seront ajoutés ici...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormationPage;
