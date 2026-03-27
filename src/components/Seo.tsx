import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { buildAbsoluteUrl, DEFAULT_SEO_IMAGE } from "@/lib/seo";

type JsonLd = Record<string, unknown>;

type SeoProps = {
  title: string;
  description: string;
  image?: string;
  path?: string;
  type?: "website" | "article";
  robots?: string;
  jsonLd?: JsonLd | JsonLd[];
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
};

const DEFAULT_ROBOTS = "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1";

function upsertMeta(attribute: "name" | "property", value: string, content: string) {
  let tag = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${value}"]`);

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attribute, value);
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", content);
}

function removeMeta(attribute: "name" | "property", value: string) {
  document.head.querySelector(`meta[${attribute}="${value}"]`)?.remove();
}

function upsertLink(rel: string, href: string, extraAttributes?: Record<string, string>) {
  let selector = `link[rel="${rel}"]`;

  if (extraAttributes?.hreflang) {
    selector += `[hreflang="${extraAttributes.hreflang}"]`;
  }

  let tag = document.head.querySelector<HTMLLinkElement>(selector);

  if (!tag) {
    tag = document.createElement("link");
    tag.setAttribute("rel", rel);

    if (extraAttributes) {
      Object.entries(extraAttributes).forEach(([key, value]) => {
        tag?.setAttribute(key, value);
      });
    }

    document.head.appendChild(tag);
  }

  tag.setAttribute("href", href);
}

export default function Seo({
  title,
  description,
  image,
  path,
  type = "website",
  robots = DEFAULT_ROBOTS,
  jsonLd,
  publishedTime,
  modifiedTime,
  section,
}: SeoProps) {
  const location = useLocation();
  const pageUrl = buildAbsoluteUrl(path ?? location.pathname);
  const imageUrl = buildAbsoluteUrl(image ?? DEFAULT_SEO_IMAGE);
  const fullTitle = title.includes("Ortovet") ? title : `${title} | Ortovet`;
  const schemas = Array.isArray(jsonLd) ? jsonLd : jsonLd ? [jsonLd] : [];

  useEffect(() => {
    document.documentElement.lang = "lt";
    document.title = fullTitle;

    upsertMeta("name", "description", description);
    upsertMeta("name", "author", "Ortovet");
    upsertMeta("name", "robots", robots);
    upsertMeta("name", "googlebot", robots);
    upsertMeta("name", "theme-color", "#ffffff");

    upsertMeta("property", "og:locale", "lt_LT");
    upsertMeta("property", "og:site_name", "Ortovet");
    upsertMeta("property", "og:type", type);
    upsertMeta("property", "og:title", fullTitle);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url", pageUrl);
    upsertMeta("property", "og:image", imageUrl);

    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", fullTitle);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", imageUrl);

    upsertLink("canonical", pageUrl);
    upsertLink("alternate", pageUrl, { hreflang: "lt-LT" });

    if (type === "article" && publishedTime) {
      upsertMeta("property", "article:published_time", publishedTime);
    } else {
      removeMeta("property", "article:published_time");
    }

    if (type === "article" && modifiedTime) {
      upsertMeta("property", "article:modified_time", modifiedTime);
    } else {
      removeMeta("property", "article:modified_time");
    }

    if (type === "article" && section) {
      upsertMeta("property", "article:section", section);
    } else {
      removeMeta("property", "article:section");
    }
  }, [description, fullTitle, imageUrl, modifiedTime, pageUrl, publishedTime, robots, section, type]);

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={`${pageUrl}-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
