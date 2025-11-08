#!/bin/bash

# Script pour ajouter subject="maths" aux composants MathChapterTemplate

for file in src/pages/formation/math/MathsApprofondies/*.tsx; do
  if grep -q "MathChapterTemplate" "$file" && ! grep -q 'subject=' "$file"; then
    echo "Updating $file"
    
    # Utiliser awk pour insérer le paramètre au bon endroit
    awk '
    BEGIN { in_template = 0; added = 0 }
    /<MathChapterTemplate/ { in_template = 1 }
    in_template && /^      [a-zA-Z]/ && !added && !/subject=/ {
      # Trouver la dernière propriété et ajouter subject après
      line = $0
      if (line ~ /showNavigation=\{/) {
        print line
        print "      subject=\"maths\""
        added = 1
        next
      }
      if (line ~ /slug="/ && !added) {
        print line  
        print "      subject=\"maths\""
        added = 1
        next
      }
    }
    in_template && />/ && !added {
      # Si on arrive à la fermeture sans avoir ajouté, l'ajouter avant
      print "      subject=\"maths\""
      added = 1
    }
    { print }
    ' "$file" > "${file}.tmp" && mv "${file}.tmp" "$file"
  fi
done

echo "Done updating files"
