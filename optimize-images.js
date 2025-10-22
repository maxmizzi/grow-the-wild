import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join, parse, relative } from 'path';
import { readdir, stat, mkdir } from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const ASSETS_DIR = join(__dirname, 'src', 'assets');
const BACKUP_DIR = join(__dirname, 'src', 'assets-backup');

async function getAllImageFiles(dir) {
  const files = [];
  const items = await readdir(dir);
  
  for (const item of items) {
    const fullPath = join(dir, item);
    const stats = await stat(fullPath);
    
    if (stats.isDirectory() && !item.startsWith('.')) {
      files.push(...await getAllImageFiles(fullPath));
    } else if (stats.isFile() && /\.(jpg|jpeg|png)$/i.test(item)) {
      files.push(fullPath);
    }
  }
  
  return files;
}

async function optimizeImage(filePath) {
  const parsed = parse(filePath);
  const ext = parsed.ext.toLowerCase();
  
  // Skip logo and favicon - keep as PNG for quality
  if (filePath.includes('logo.png') || filePath.includes('favicon.png')) {
    console.log(`⏭️  Skipping ${relative(ASSETS_DIR, filePath)} (logo/favicon)`);
    return;
  }
  
  try {
    if (ext === '.jpg' || ext === '.jpeg') {
      // Convert JPEGs to WebP with 85% quality
      const webpPath = join(parsed.dir, `${parsed.name}.webp`);
      await sharp(filePath)
        .webp({ quality: 85 })
        .toFile(webpPath);
      
      const originalSize = (await stat(filePath)).size;
      const newSize = (await stat(webpPath)).size;
      const savings = ((1 - newSize / originalSize) * 100).toFixed(1);
      
      console.log(`✅ ${relative(ASSETS_DIR, filePath)} → ${parsed.name}.webp (${savings}% smaller)`);
      
    } else if (ext === '.png') {
      // Optimize PNGs or convert large ones to WebP
      const originalSize = (await stat(filePath)).size;
      
      if (originalSize > 200 * 1024) { // If > 200KB, convert to WebP
        const webpPath = join(parsed.dir, `${parsed.name}.webp`);
        await sharp(filePath)
          .webp({ quality: 90, lossless: false })
          .toFile(webpPath);
        
        const newSize = (await stat(webpPath)).size;
        const savings = ((1 - newSize / originalSize) * 100).toFixed(1);
        
        console.log(`✅ ${relative(ASSETS_DIR, filePath)} → ${parsed.name}.webp (${savings}% smaller)`);
      } else {
        // Just compress small PNGs
        const tempPath = join(parsed.dir, `${parsed.name}_optimized.png`);
        await sharp(filePath)
          .png({ quality: 90, compressionLevel: 9 })
          .toFile(tempPath);
        
        const newSize = (await stat(tempPath)).size;
        const savings = ((1 - newSize / originalSize) * 100).toFixed(1);
        
        console.log(`✅ ${relative(ASSETS_DIR, filePath)} optimized (${savings}% smaller)`);
      }
    }
  } catch (error) {
    console.error(`❌ Error optimizing ${filePath}:`, error.message);
  }
}

async function main() {
  console.log('🖼️  Starting image optimization...\n');
  
  // Create backup directory
  try {
    await mkdir(BACKUP_DIR, { recursive: true });
    console.log(`📦 Backup directory ready: ${BACKUP_DIR}\n`);
  } catch (err) {
    // Directory might already exist
  }
  
  const imageFiles = await getAllImageFiles(ASSETS_DIR);
  console.log(`Found ${imageFiles.length} images to optimize\n`);
  
  for (const file of imageFiles) {
    await optimizeImage(file);
  }
  
  console.log('\n✨ Optimization complete!');
  console.log('\n📝 Next steps:');
  console.log('1. Update your component imports to use .webp extensions');
  console.log('2. Test the images in your app');
  console.log('3. Delete the original .jpg/.jpeg files if everything looks good');
}

main().catch(console.error);
