const fs = require('fs');
const path = require('path');

const directoryPath = 'src/pages/formation/allemand';
const files = fs.readdirSync(directoryPath).filter(file => file.endsWith('FlashcardsPage.tsx'));

files.forEach(file => {
    const filePath = path.join(directoryPath, file);
    let content = fs.readFileSync(filePath, 'utf8');

    content = content.replace(/bg-gradient-to-br from-pr-orange-pale via-white to-pr-orange-soft/g, 'bg-transparent font-dm-sans');
    content = content.replace(/bg-pr-orange-dark text-white/g, 'bg-carnet-red/10 text-carnet-red-deep');
    content = content.replace(/className="bg-pr-orange-dark"/g, 'className="bg-carnet-red hover:bg-carnet-red-deep text-white border-0"');
    content = content.replace(/text-pr-orange-dark/g, 'text-carnet-red-deep'); // Most instances are icons, badges, indicators
    content = content.replace(/bg-gradient-to-r from-pr-orange to-pr-orange-dark/g, 'bg-carnet-red');
    content = content.replace(/bg-pr-orange-pale border-pr-orange-soft/g, 'bg-carnet-paper-2 border-carnet-rule');
    
    // Fix specific keyboard shortcuts and tips text where carnet-red-deep is too strong
    content = content.replace(/text-sm text-carnet-red-deep/g, 'text-sm text-carnet-ink-soft');
    content = content.replace(/border-2 border-pr-orange-soft bg-gradient-to-r from-pr-orange-pale to-pr-orange-soft shadow-lg/g, 'border border-carnet-rule bg-carnet-paper-2');
    
    // Some pages might have 'from-pr-orange' or similar
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Processed', file);
});
