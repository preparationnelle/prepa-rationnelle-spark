#!/bin/bash

# Liste des chapitres à migrer (6, 7, 8, 9, 10)
chapters="6 7 8 9 10"

for chapter in $chapters; do
    file="src/pages/formation/espagnol/civilisation/Module${chapter}VocabularyPage.tsx"
    
    if [ -f "$file" ]; then
        echo "Migration du chapitre $chapter..."
        
        # Créer une sauvegarde
        cp "$file" "${file}.backup"
        
        # Utiliser sed pour remplacer les imports
        sed -i '' 's/import React, { useState, useEffect } from '\''react'\'';/import React, { useState } from '\''react'\'';/' "$file"
        sed -i '' 's/import { Card, CardContent } from "@\/components\/ui\/card";/import { UnifiedFlashcards } from "@\/components\/ui\/UnifiedFlashcards";/' "$file"
        sed -i '' 's/import { Badge } from "@\/components\/ui\/badge";//' "$file"
        sed -i '' 's/import { Home, ChevronRight, ArrowLeft, BookOpen } from '\''lucide-react'\'';/import { Home, ChevronRight, BookOpen } from '\''lucide-react'\'';/' "$file"
        
        echo "Chapitre $chapter migré avec succès!"
    else
        echo "Chapitre $chapter non trouvé: $file"
    fi
done

echo "Migration terminée!"
