import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const directoryPath = path.join(process.cwd(), 'public/images');

async function convertJpegsToWebp(dir) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      await convertJpegsToWebp(fullPath);
    } else if (file.toLowerCase().endsWith('.jpg') || file.toLowerCase().endsWith('.jpeg')) {
      const parsedPath = path.parse(fullPath);
      const webpPath = path.join(parsedPath.dir, `${parsedPath.name}.webp`);

      console.log(`Converting ${fullPath} to WebP...`);
      await sharp(fullPath)
        .webp({ quality: 80 })
        .toFile(webpPath);
        
      console.log(`Deleting original ${fullPath}...`);
      fs.unlinkSync(fullPath);
    }
  }
}

async function main() {
  console.log('Starting WebP conversion...');
  await convertJpegsToWebp(directoryPath);
  console.log('Done!');
}

main().catch(console.error);
