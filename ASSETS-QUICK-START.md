# Asset Optimization - Quick Start Guide

## TL;DR - Simple Usage

### ✅ Yes, you can reference assets directly WITHOUT helpers!

The path alias `@images` makes it simple:

```tsx
// Just import and use!
import logo from '@images/logos/ades-logo.png';

function Header() {
  return <img src={logo} alt="Logo" />;
}
```

### ✅ Yes, the build handles ALL compression automatically!

When you run `bun run build`, Vite automatically:
- ✅ Minifies JavaScript (removes console.logs, unused code)
- ✅ Minifies CSS (removes whitespace, unused styles)
- ✅ Compresses assets with gzip
- ✅ Adds content hashes for caching (`logo-abc123.png`)
- ✅ Splits code into chunks (faster loading)
- ✅ Inlines small images as base64

**You don't need to do anything!** Just build and deploy.

---

## Directory Structure

```
src/assets/images/
├── logos/          # Logo files
├── heroes/         # Large hero/banner images
├── projects/       # Project photos
├── team/           # Team member photos
├── gallery/        # Gallery images
└── icons/          # Small icons
```

---

## How to Use Assets

### Method 1: Direct Import (Recommended) ⭐

```tsx
import logo from '@images/logos/ades-logo.png';
import hero from '@images/heroes/community.jpg';
import project from '@images/projects/vaccination.jpg';

function MyComponent() {
  return (
    <div>
      <img src={logo} alt="Logo" />
      <img src={hero} alt="Hero" />
      <img src={project} alt="Project" />
    </div>
  );
}
```

### Method 2: Using Helper Functions (Optional)

If you prefer, use the helper functions:

```tsx
import { getLogo, getHeroImage, getProjectImage } from '../utils/assetHelpers';

function MyComponent() {
  return (
    <div>
      <img src={getLogo('ades-logo.png')} alt="Logo" />
      <img src={getHeroImage('community.jpg')} alt="Hero" />
      <img src={getProjectImage('vaccination.jpg')} alt="Project" />
    </div>
  );
}
```

### Method 3: Optimized Component (For lazy loading)

```tsx
import { OptimizedImage } from '../components/OptimizedImage';
import project from '@images/projects/vaccination.jpg';

function ProjectCard() {
  return (
    <OptimizedImage
      src={project}
      alt="Vaccination Project"
      lazy={true}  // Loads when visible
      className="w-full h-64 object-cover"
    />
  );
}
```

---

## Build Output Example

### Before Optimization (source):
```
src/assets/images/logos/ades-logo.png     894 KB
src/app/pages/Home.tsx                     12 KB
```

### After Build (`bun run build`):
```
dist/assets/images/ades-logo-DgEinlIW.png  894 KB  (with hash for caching)
dist/assets/css/index-TOz0Ot6-.css          99 KB  (gzipped: 16 KB) ⚡
dist/assets/js/react-vendor-0e9_jFn9.js     96 KB  (gzipped: 31 KB) ⚡
dist/assets/js/index-jadU_rWS.js           261 KB  (gzipped: 75 KB) ⚡
```

**Savings**: ~70% size reduction from gzip compression!

---

## What Happens During Build?

1. **Code Splitting** - Separates vendor libraries
   ```
   react-vendor.js    → React, ReactDOM, React Router
   ui-vendor.js       → UI libraries (Radix, Lucide)
   index.js           → Your application code
   ```

2. **Minification** - Removes unnecessary code
   ```js
   // Before
   function greeting(name) {
     console.log("Hello " + name);
     return "Welcome!";
   }

   // After (minified)
   function greeting(n){return"Welcome!"}
   ```

3. **Asset Hashing** - Adds unique hash to filenames
   ```
   logo.png → logo-DgEinlIW.png
   ```
   This enables perfect browser caching!

4. **Compression** - Gzip compresses all assets
   ```
   index.js (260 KB) → index.js.gz (75 KB)
   ```

---

## Path Aliases

Configured in `vite.config.ts`:

```typescript
'@': './src'              // @/app/pages/Home
'@assets': './src/assets' // @assets/images/logo.png
'@images': './src/assets/images' // @images/logos/logo.png
```

Usage:
```tsx
import logo from '@images/logos/ades-logo.png';  // ✅
import logo from '@assets/images/logos/ades-logo.png';  // ✅
import logo from '@/assets/images/logos/ades-logo.png';  // ✅
```

---

## Adding New Images

1. **Save** image to appropriate folder:
   ```
   src/assets/images/projects/my-new-project.jpg
   ```

2. **Import** in your component:
   ```tsx
   import myProject from '@images/projects/my-new-project.jpg';
   ```

3. **Use** it:
   ```tsx
   <img src={myProject} alt="My Project" />
   ```

4. **Build** - All optimization happens automatically!
   ```bash
   bun run build
   ```

---

## Performance Tips

### ✅ DO:
- Use JPEG for photos
- Use PNG for graphics with transparency
- Use SVG for logos and icons
- Compress images before adding them (use Squoosh.app)
- Use `lazy={true}` for images below the fold

### ❌ DON'T:
- Add uncompressed images >500KB
- Use PNG for large photos
- Load all images at once

---

## Checklist for New Images

- [ ] Compress image before adding (aim for <200KB)
- [ ] Save to correct subdirectory
- [ ] Use descriptive filename (no spaces, lowercase)
- [ ] Import using `@images` alias
- [ ] Add proper alt text
- [ ] Build and verify in dist/

---

## Build Commands

```bash
# Development (no optimization)
bun run dev

# Production build (full optimization)
bun run build

# Preview production build
bun run preview

# Check bundle size
du -sh dist/
```

---

## FAQ

**Q: Do I need to compress images manually?**
A: Compress before adding (recommended), but Vite handles the rest.

**Q: What about WebP format?**
A: Modern browsers support it. You can add WebP versions, but JPEG/PNG work great.

**Q: Should I use the helper functions?**
A: Optional. Direct imports with `@images` are simpler and work great!

**Q: How do I lazy load images?**
A: Use the `OptimizedImage` component with `lazy={true}`.

**Q: Does the build remove console.log?**
A: Yes! All console statements are removed in production builds.

**Q: Can I see what's in my bundle?**
A: Yes! Use: `bunx vite-bundle-visualizer`

---

## Summary

**Simple workflow**:
1. Add image to `src/assets/images/[category]/`
2. Import: `import img from '@images/[category]/[name]'`
3. Use: `<img src={img} alt="..." />`
4. Build: `bun run build` (handles everything!)

**The build automatically**:
- ✅ Minifies code
- ✅ Compresses assets
- ✅ Adds cache hashes
- ✅ Splits code
- ✅ Optimizes images

You focus on development, Vite handles optimization! 🚀
