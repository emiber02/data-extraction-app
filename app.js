const fs = require('fs');
const cheerio = require('cheerio');

// Function to extract non-repetitive data
function extractDataFromHtml(htmlContent, selectors) {
    const $ = cheerio.load(htmlContent);
    const result = {};

    for (const key in selectors) {
        const cssSelector = selectors[key];
        result[key] = $(cssSelector).text().trim();
    }

    return result;
}

// Function to extract repetitive data (e.g., from tables)
function extractRepetitiveData(htmlContent, selectors) {
    const $ = cheerio.load(htmlContent);
    const result = {};

    // Extract non-repetitive fields first (like the title)
    result.title = $(selectors.title).text().trim();

    const rootSelector = selectors.prices.__root;
    const repetitiveData = [];

    // Loop through each row under the rootSelector, skipping the first row (header row)
    $(rootSelector).each((index, element) => {
        const item = {};
        item.itemName = $(element).find(selectors.prices.itemName).text().trim();
        item.price = $(element).find(selectors.prices.price).text().trim();
        item.currency = $(element).find(selectors.prices.currency).text().trim();
        item.vat = $(element).find(selectors.prices.vat).text().trim();

        // Add only if itemName is available (to avoid empty entries)
        if (item.itemName) {
            repetitiveData.push(item);
        }
    });

    result.prices = repetitiveData;
    return result;
}

// Main function to handle both main and bonus tasks
function main() {
    const htmlFilePath = process.argv[2];  // HTML file
    const selectorFilePath = process.argv[3]; // JSON file for selectors
    const mode = process.argv[4];  // 'main' or 'bonus'

    // Read HTML file content
    const htmlContent = fs.readFileSync(htmlFilePath, 'utf-8');

    // Read selectors from JSON file
    const selectors = JSON.parse(fs.readFileSync(selectorFilePath, 'utf-8'));

    let extractedData;
    if (mode === 'bonus') {
        extractedData = extractRepetitiveData(htmlContent, selectors);
    } else {
        extractedData = extractDataFromHtml(htmlContent, selectors);
    }

    console.log(JSON.stringify(extractedData, null, 2));
}

// Run the app
main();
