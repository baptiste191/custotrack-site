import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import Sitemap from "vite-plugin-sitemap"; // export par défaut

const hostname = "https://www.custotrack.com";

// Toutes tes pages FR/EN (SPA) à déclarer comme routes dynamiques
const dynamicRoutes = [
  // FR
  "/", "/features", "/demo", "/contact",
  "/legal/privacy", "/legal/imprint",
  "/about",
];

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    Sitemap({
      hostname,                 // obligatoire
      dynamicRoutes,            // <-- au lieu de "routes"
      exclude: [],              // tu peux exclure des chemins ici
      readable: true,           // sitemap lisible
      changefreq: "weekly",     // ou 'daily' / 'monthly'…
      priority: 0.8,
      // Génère les <xhtml:link rel="alternate" hreflang="...">
      i18n: {
        defaultLanguage: "fr",
        languages: ["fr", "en"],
        strategy: "prefix",     // /... (fr) et /en/... (en)
      },
      generateRobotsTxt: true,  // génère aussi robots.txt
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
