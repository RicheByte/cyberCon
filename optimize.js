import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const directories = [
  './public',
  './logos',
  './public/logos',
  './public/innovation',
  './'
];

async function processDirectory(dirPath) {
  if (!fs.existsSync(dirPath)) return;
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });

  for (let entry of entries) {
    if (entry.isFile() && entry.name.toLowerCase().endsWith('.png')) {
      const pngPath = path.join(dirPath, entry.name);
      const webpName = entry.name.slice(0, -4) + '.webp';
      const webpPath = path.join(dirPath, webpName);

      try {
        console.log(`Optimizing ${pngPath} -> ${webpPath}`);
        await sharp(pngPath)
          .webp({ quality: 80, effort: 6 })
          .toFile(webpPath);
        
        console.log(`Success! Deleting original ${pngPath}`);
        fs.unlinkSync(pngPath);
      } catch (err) {
        console.error(`Error processing ${pngPath}:`, err);
      }
    }
  }
}

async function main() {
  for (const dir of directories) {
    await processDirectory(dir);
  }
  console.log("Done");
}

main();
