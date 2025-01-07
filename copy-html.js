import fs from 'fs';
import path from 'path';

// List of HTML files to copy
const filesToCopy = [
  { src: 'src/pages/auth.html', dest: 'auth.html' },
  { src: 'src/pages/welcome.html', dest: 'welcome.html' },
];

const distDir = path.resolve('dist');

filesToCopy.forEach(({ src, dest }) => {
  const srcPath = path.resolve(src);
  const destPath = path.join(distDir, dest);

  fs.copyFileSync(srcPath, destPath);
  console.log(`Copied ${src} to ${destPath}`);
});

console.log('HTML files copied successfully.');
