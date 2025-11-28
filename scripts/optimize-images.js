import sharp from 'sharp';
import { readdir } from 'fs/promises';
import { join, parse } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const inputDir = join(__dirname, '../src/assets/cards-archive');
const outputDir = join(__dirname, '../src/assets/cards');

async function optimizeImages() {
  try {
    const files = await readdir(inputDir);
    const pngFiles = files.filter(file => file.toLowerCase().endsWith('.png'));

    console.log(`Found ${pngFiles.length} PNG images to convert...`);

    for (const file of pngFiles) {
      const inputPath = join(inputDir, file);
      const { name } = parse(file);
      const outputPath = join(outputDir, `${name}.webp`);

      console.log(`Converting: ${file}...`);
      
      const info = await sharp(inputPath)
        .webp({ 
          quality: 85,  // High quality but still compressed
          effort: 6     // Higher effort = better compression (0-6)
        })
        .toFile(outputPath);

      const inputSize = (await sharp(inputPath).metadata()).size;
      const reduction = ((1 - info.size / inputSize) * 100).toFixed(1);
      
      console.log(`  ✓ ${name}.webp - ${(info.size / 1024).toFixed(0)}KB (${reduction}% reduction)`);
    }

    console.log('\n✨ All images optimized successfully!');
  } catch (error) {
    console.error('Error optimizing images:', error);
    process.exit(1);
  }
}

optimizeImages();
