import { useEffect } from "react";

type JsonLd = Record<string, any>;

interface SEOProps {
  title: string;
  description: string;
  path: string;           // ex: "/features"
  noIndex?: boolean;      // ex: true pour bloquer l'indexation
  jsonLd?: JsonLd | JsonLd[]; // optionnel: JSON-LD à injecter
}

const SITE_URL = "https://www.custotrack.com";
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`; // mets une image 1200x630

function setOrUpdateMeta(attr: "name" | "property", key: string, content?: string) {
  if (!content) return;
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setOrUpdateLink(rel: string, href: string, hreflang?: string) {
  if (!href) return;
  let selector = `link[rel="${rel}"]`;
  if (hreflang) selector += `[hreflang="${hreflang}"]`;

  let el = document.head.querySelector<HTMLLinkElement>(selector);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    if (hreflang) el.setAttribute("hreflang", hreflang);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function injectJsonLd(jsonLd: JsonLd | JsonLd[]) {
  // supprime les anciens <script data-seo-jsonld="true">
  document.querySelectorAll('script[data-seo-jsonld="true"]').forEach(n => n.remove());

  const blocks = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
  blocks.forEach(block => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-seo-jsonld", "true");
    script.text = JSON.stringify(block);
    document.head.appendChild(script);
  });
}

export const SEO = ({ title, description, path, noIndex, jsonLd }: SEOProps) => {
  useEffect(() => {
    const canonicalUrl = `${SITE_URL}${path}`;

    // Title
    document.title = title;

    // Description
    setOrUpdateMeta("name", "description", description);

    // Robots
    if (noIndex) {
      setOrUpdateMeta("name", "robots", "noindex,nofollow");
    } else {
      const robots = document.head.querySelector('meta[name="robots"]');
      if (robots) robots.remove();
    }

    // Canonical
    setOrUpdateLink("canonical", canonicalUrl);

    // Hreflang (fr / en / x-default)
    setOrUpdateLink("alternate", `${SITE_URL}${path}`, "fr");
    setOrUpdateLink("alternate", `${SITE_URL}/en${path}`, "en");
    setOrUpdateLink("alternate", `${SITE_URL}${path}`, "x-default");

    // Open Graph
    setOrUpdateMeta("property", "og:title", title);
    setOrUpdateMeta("property", "og:description", description);
    setOrUpdateMeta("property", "og:type", "website");
    setOrUpdateMeta("property", "og:url", canonicalUrl);
    setOrUpdateMeta("property", "og:image", DEFAULT_IMAGE);

    // Twitter Card
    setOrUpdateMeta("name", "twitter:card", "summary_large_image");
    setOrUpdateMeta("name", "twitter:title", title);
    setOrUpdateMeta("name", "twitter:description", description);
    setOrUpdateMeta("name", "twitter:image", DEFAULT_IMAGE);

    // JSON-LD optionnel
    if (jsonLd) injectJsonLd(jsonLd);
    else {
      // supprime si plus nécessaire
      document.querySelectorAll('script[data-seo-jsonld="true"]').forEach(n => n.remove());
    }
  }, [title, description, path, noIndex, jsonLd]);

  return null; // n'affiche rien, on manipule <head>
};
