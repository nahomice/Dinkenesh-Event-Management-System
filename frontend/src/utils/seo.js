function upsertMetaByName(name, content) {
  let meta = document.head.querySelector(`meta[name="${name}"]`);

  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute("name", name);
    document.head.appendChild(meta);
  }

  meta.setAttribute("content", content);
}

function upsertMetaByProperty(property, content) {
  let meta = document.head.querySelector(`meta[property="${property}"]`);

  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute("property", property);
    document.head.appendChild(meta);
  }

  meta.setAttribute("content", content);
}

function upsertCanonical(canonicalUrl) {
  let canonical = document.head.querySelector('link[rel="canonical"]');

  if (!canonical) {
    canonical = document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    document.head.appendChild(canonical);
  }

  canonical.setAttribute("href", canonicalUrl);
}

export function setSeoMetadata({
  title,
  description,
  robots,
  canonicalUrl,
  ogType,
  ogTitle,
  ogDescription,
  ogUrl,
  ogImage,
  twitterTitle,
  twitterDescription,
  twitterImage,
}) {
  if (typeof document === "undefined") {
    return;
  }

  document.title = title;
  upsertMetaByName("description", description);
  upsertMetaByName("robots", robots);
  upsertMetaByName("twitter:card", "summary_large_image");
  upsertMetaByName("twitter:title", twitterTitle);
  upsertMetaByName("twitter:description", twitterDescription);
  upsertMetaByName("twitter:image", twitterImage);

  upsertMetaByProperty("og:type", ogType);
  upsertMetaByProperty("og:title", ogTitle);
  upsertMetaByProperty("og:description", ogDescription);
  upsertMetaByProperty("og:url", ogUrl);
  upsertMetaByProperty("og:image", ogImage);

  upsertCanonical(canonicalUrl);
}

export function setJsonLd(scriptId, jsonPayload) {
  if (typeof document === "undefined") {
    return;
  }

  let script = document.head.querySelector(`script[data-seo-jsonld-id="${scriptId}"]`);

  if (!script) {
    script = document.createElement("script");
    script.setAttribute("type", "application/ld+json");
    script.setAttribute("data-seo-jsonld-id", scriptId);
    document.head.appendChild(script);
  }

  script.textContent = jsonPayload;
}

export function removeJsonLd(scriptId) {
  if (typeof document === "undefined") {
    return;
  }

  const script = document.head.querySelector(
    `script[data-seo-jsonld-id="${scriptId}"]`,
  );

  if (script) {
    script.remove();
  }
}
