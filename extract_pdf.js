const fs = require("fs");
const path = require("path");
const pdf = require("pdf-parse");

const dir = path.join(__dirname, "products", "descriptions");
const files = fs.readdirSync(dir).filter(f => f.endsWith(".pdf"));

async function parseAll() {
  const results = {};

  for (const file of files) {
    const dataBuffer = fs.readFileSync(path.join(dir, file));
    try {
      const data = await pdf(dataBuffer);
      results[file] = data.text;
    } catch(err) {
      results[file] = "ERROR: " + err.message;
    }
  }
  fs.writeFileSync("extracted_pdf_texts.json", JSON.stringify(results, null, 2), "utf-8");
  console.log("Successfully extracted", Object.keys(results).length, "PDFs");
}

parseAll();
