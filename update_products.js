// Script to add cbdHu and thcHu fields to all products
const fs = require('fs');

const translations = {
    // CBD translations
    '10% Hemp Seeds': '10% Kendermag',
    '8% Hemp Seeds': '8% Kendermag',
    'Hemp Seed Oil': 'Kendermagolaj',
    '0.72% Hemp Oil': '0,72% Kenderolaj',
    '300mg (30mg / pc)': '300mg (30mg / db)',
    '10% (1000mg / 10ml)': '10% (1000mg / 10ml)',
    '5% (500mg / 10ml)': '5% (500mg / 10ml)',
    '10% Hemp & Hazelnut': '10% Kendermag és Mogyoró',
    'Hemp Seeds Infused': 'Kendermaggal Dúsítva',
    '5% Hemp Flour': '5% Kenderliszt',
    'Hemp Seed Oil': 'Kendermagolaj',
    'Medium Sativa Flavour': 'Közepes Sativa Aroma',
    'Strong Sativa Flavour': 'Erős Sativa Aroma',
    'Sativa Seeds Infused': 'Sativa Kendermaggal',
    '17mg CBD': '17mg CBD',
    '36mg CBD': '36mg CBD',
    '10mg CBD per Cookie': '10mg CBD kekszként',
    '10mg per Lolly (50mg total)': '10mg nyalókánként (50mg összesen)',
    '3.1% CBD': '3,1% CBD',
    '4.1% CBD': '4,1% CBD',
    '2.7% CBG': '2,7% CBG',
    '4.5% CBD': '4,5% CBD',
    'Hemp Infused': 'Kenderrel Dúsítva',
    'Hemp Syrup Infused': 'Kendersziruppal',
    'Hemp Extract Infused': 'Kenderkivonattal',
    'Recovery Formula': 'Regeneráló Formula',
    'Herbal Formula': 'Gyógynövény Formula',
    'Cannabis Aroma': 'Kannabisz Aroma',

    // THC translations
    '0% THC': '0% THC',
    '<0.2% THC': '<0,2% THC'
};

function addHungarianFields(productStr) {
    // Extract cbd and thc values
    const cbdMatch = productStr.match(/cbd:\s*'([^']+)'/);
    const thcMatch = productStr.match(/thc:\s*'([^']+)'/);

    if (!cbdMatch || !thcMatch) return productStr;

    const cbdEn = cbdMatch[1];
    const thcEn = thcMatch[1];
    const cbdHu = translations[cbdEn] || cbdEn;
    const thcHu = translations[thcEn] || thcEn;

    // Add cbdHu and thcHu after cbd and thc
    let updated = productStr.replace(
        /cbd:\s*'([^']+)',/,
        `cbd: '$1',\n        cbdHu: '${cbdHu}',`
    );
    updated = updated.replace(
        /thc:\s*'([^']+)',/,
        `thc: '$1',\n        thcHu: '${thcHu}',`
    );

    return updated;
}

const filePath = 'C:/Users/Wolfi/Desktop/cannabox/js/products.js';
let content = fs.readFileSync(filePath, 'utf-8');

// Split by product objects
const products = content.split(/(?=\s{4}\{[\s\S]*?id:\s*')/);

let updated = products[0]; // Keep the header

for (let i = 1; i < products.length; i++) {
    updated += addHungarianFields(products[i]);
}

fs.writeFileSync(filePath, updated, 'utf-8');
console.log('Updated', products.length - 1, 'products with Hungarian CBD/THC labels');
