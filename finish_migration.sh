#!/bin/bash

# Script pour terminer la migration des chapitres 7-10

chapters="7 8 9 10"

for chapter in $chapters; do
    file="src/pages/formation/espagnol/civilisation/Module${chapter}VocabularyPage.tsx"
    
    if [ -f "$file" ]; then
        echo "Finalisation de la migration du chapitre $chapter..."
        
        # Supprimer tout après la ligne 76 (export du composant principal)
        sed -i '' '77,$d' "$file"
        
        # Ajouter l'export
        echo "" >> "$file"
        echo "export default Module${chapter}VocabularyPage;" >> "$file"
        
        echo "Chapitre $chapter terminé!"
    else
        echo "Chapitre $chapter non trouvé: $file"
    fi
done

echo "Migration terminée pour tous les chapitres!"
