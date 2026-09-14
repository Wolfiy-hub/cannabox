// Script to shorten product names by removing redundant information
const fs = require('fs');

// Patterns to remove from names
const patternsToRemove = [
    / \(?\d+mg CBD\)?/gi,           // Remove CBD amounts like (10mg CBD) or 10mg CBD
    / \(?\d+ pack?\)?/gi,            // Remove pack info like (5 pack)
    / \(?\d+ db-os\)?/gi,            // Remove Hungarian pack info (5 db-os)
    / \(?\d+g\)?$/gi,                // Remove weight at end like (21g)
    / \(?\d+ml\)?$/gi,               // Remove volume at end like (10ml)
    / – \d+mg CBD/gi,                // Remove – 10mg CBD
    / CBD Lollipops/gi,              // Remove "CBD Lollipops" (category obvious)
    / CBD Gummies/gi,                // Remove "CBD Gummies"
    / CBD Chewing Gum/gi,            // Remove "CBD Chewing Gum"
    / Cannabis Cookie/gi,            // Remove "Cannabis Cookie"
    / Cannabis Brownie/gi,           // Remove "Cannabis Brownie"
    / Cannabis Gummies/gi,           // Remove "Cannabis Gummies"
    / Cannabis Chewing Gum/gi,       // Remove "Cannabis Chewing Gum"
    / Flavoured/gi,                  // Remove "Flavoured"
    / Flavored/gi,                   // Remove "Flavored"
];

// Read the file
const filePath = 'C:/Users/Wolfi/Desktop/cannabox/js/products.js';
let content = fs.readFileSync(filePath, 'utf-8');

// Count replacements
let count = 0;

// Replace in English names
content = content.replace(/name: '([^']+)',/g, (match, name) => {
    let shortened = name;
    for (const pattern of patternsToRemove) {
        shortened = shortened.replace(pattern, '');
    }
    // Clean up extra spaces and dashes
    shortened = shortened.replace(/\s+/g, ' ').replace(/\s*–\s*$/g, '').trim();
    if (shortened !== name) {
        count++;
        console.log(`EN: "${name}" → "${shortened}"`);
    }
    return `name: '${shortened}',`;
});

// Replace in Hungarian names
content = content.replace(/nameHu: '([^']+)',/g, (match, name) => {
    let shortened = name;
    for (const pattern of patternsToRemove) {
        shortened = shortened.replace(pattern, '');
    }
    // Clean up extra spaces and dashes
    shortened = shortened.replace(/\s+/g, ' ').replace(/\s*–\s*$/g, '').trim();
    if (shortened !== name) {
        count++;
        console.log(`HU: "${name}" → "${shortened}"`);
    }
    return `nameHu: '${shortened}',`;
});

fs.writeFileSync(filePath, content, 'utf-8');
console.log(`\nTotal replacements: ${count}`);
