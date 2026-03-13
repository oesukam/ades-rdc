import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import viteCompression from 'vite-plugin-compression'
import mdx from '@mdx-js/rollup'
import remarkFrontmatter from 'remark-frontmatter'
import remarkGfm from 'remark-gfm'
import sitemap from 'vite-plugin-sitemap'

export default defineConfig({
  plugins: [
    // MDX plugin - must come before React
    mdx({
      remarkPlugins: [remarkFrontmatter, remarkGfm],
    }),
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),

    // Compression plugin - creates .gz files alongside originals
    // Note: Most modern hosting (Vercel, Netlify) handles this automatically
    // Enable this if your host doesn't provide automatic compression
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240, // Only compress files > 10kb
      algorithm: 'gzip',
      ext: '.gz',
      deleteOriginFile: false, // Keep original files
    }),
    // Brotli compression (better than gzip, but requires server support)
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'brotliCompress',
      ext: '.br',
      deleteOriginFile: false,
    }),

    // Sitemap generation
    sitemap({
      hostname: 'https://ades-rdc.org',
      dynamicRoutes: [
        '/',
        '/about',
        '/projects',
        '/blog',
        '/gallery',
        '/team',
        '/contact',
        '/interventions/entrepreneurship',
        '/interventions/environment',
        '/interventions/governance',
        '/interventions/rural',
        '/projects/saving-groups',
        '/projects/agro-business',
        '/projects/vaccination',
        '/projects/health',
        '/blog/empowering-women-through-savings-groups',
        '/blog/sustainable-agriculture-climate-change',
        '/blog/vaccination-campaigns-protecting-communities',
      ],
      changefreq: 'weekly',
      priority: 0.8,
      i18n: {
        defaultLanguage: 'fr',
        languages: ['en', 'fr'],
      },
    }),
  ],

  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
      // Alias for assets
      '@assets': path.resolve(__dirname, './src/assets'),
      '@images': path.resolve(__dirname, './src/assets/images'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],

  // Build optimization
  build: {
    // Output directory
    outDir: 'dist',

    // Generate sourcemaps for debugging (disable in production for smaller bundle)
    sourcemap: false,

    // Chunk size warnings
    chunkSizeWarningLimit: 1000,

    // Rollup options for advanced optimization
    rollupOptions: {
      output: {
        // Manual chunks for better caching
        manualChunks: {
          // Vendor chunks
          'react-vendor': ['react', 'react-dom', 'react-router'],
          'ui-vendor': ['lucide-react', '@radix-ui/react-accordion', '@radix-ui/react-dialog'],
          'form-vendor': ['react-hook-form'],
          'utils': ['clsx', 'class-variance-authority', 'tailwind-merge'],
        },

        // Asset file naming with content hash for cache busting
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name?.split('.') || [];
          const ext = info[info.length - 1];

          // Images
          if (/png|jpe?g|svg|gif|tiff|bmp|ico|webp/i.test(ext || '')) {
            return `assets/images/[name]-[hash][extname]`;
          }

          // Fonts
          if (/woff|woff2|eot|ttf|otf/i.test(ext || '')) {
            return `assets/fonts/[name]-[hash][extname]`;
          }

          // CSS
          if (ext === 'css') {
            return `assets/css/[name]-[hash][extname]`;
          }

          // Default
          return `assets/[name]-[hash][extname]`;
        },

        // Chunk file naming
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      },
    },

    // Minification
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.logs in production
        drop_debugger: true,
      },
    },

    // CSS code splitting
    cssCodeSplit: true,

    // Asset inlining threshold (10kb)
    // Assets smaller than this will be inlined as base64
    assetsInlineLimit: 10240,
  },

  // Development server optimization
  server: {
    // Enable CORS for development
    cors: true,

    // HMR (Hot Module Replacement)
    hmr: {
      overlay: true,
    },
  },

  // Preview server (for testing production builds)
  preview: {
    port: 4173,
  },
})
