// build-test.js
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔍 Running pre-deployment build test...');

try {
  // Run the build command
  console.log('📦 Building project...');
  execSync('npm run build', { stdio: 'inherit' });
  
  // Check if dist directory exists
  const distPath = path.join(__dirname, 'dist');
  if (!fs.existsSync(distPath)) {
    throw new Error('Build failed: dist directory not created');
  }
  
  // Check if index.html exists in dist
  const indexPath = path.join(distPath, 'index.html');
  if (!fs.existsSync(indexPath)) {
    throw new Error('Build failed: index.html not found in dist directory');
  }
  
  console.log('✅ Build test passed! Your project is ready for deployment.');
  console.log('📝 Next steps:');
  console.log('  1. Push your code to GitHub');
  console.log('  2. Connect your repository to Vercel');
  console.log('  3. Configure environment variables in Vercel');
  console.log('  4. Deploy your project');
} catch (error) {
  console.error('❌ Build test failed:', error.message);
  process.exit(1);
}