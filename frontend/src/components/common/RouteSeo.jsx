import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { setSeoMetadata } from "../../utils/seo";
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_IMAGE,
  PRIVATE_ROUTE_PATHS,
  PRIVATE_ROUTE_PREFIXES,
  ROUTE_SEO_MAP,
  SITE_NAME,
  SITE_URL,
} from "../../seo/routes";

const PRIVATE_EXACT = new Set(PRIVATE_ROUTE_PATHS);

function normalizePath(pathname) {
  if (!pathname || pathname === "/") {
    return "/";
  }

  return pathname.replace(/\/+$/, "");
}

function buildCanonicalUrl(pathname) {
  return `${SITE_URL}${normalizePath(pathname)}`;
}

function isPrivateRoute(pathname) {
  const normalized = normalizePath(pathname);

  if (PRIVATE_EXACT.has(normalized)) {
    return true;
  }

  if (normalized.startsWith("/payment/")) {
    return true;
  }

  return PRIVATE_ROUTE_PREFIXES.some(
    (prefix) => normalized === prefix || normalized.startsWith(`${prefix}/`),
  );
}

function getRouteMetadata(pathname) {
  const normalized = normalizePath(pathname);

  if (normalized.startsWith("/event/")) {
    return null;
  }

  if (isPrivateRoute(normalized)) {
    return {
      title: `Account Area | ${SITE_NAME}`,
      description:
        "Secure area for authenticated platform users and role-based operations.",
      robots: "noindex, nofollow",
    };
  }

  return (
    ROUTE_SEO_MAP[normalized] || {
      title: SITE_NAME,
      description: DEFAULT_DESCRIPTION,
      robots: "noindex, follow",
    }
  );
}

export function RouteSeo() {
  const { pathname } = useLocation();
  const metadata = getRouteMetadata(pathname);

  useEffect(() => {
    if (!metadata) {
      return;
    }

    const canonicalUrl = buildCanonicalUrl(pathname);
    const imageUrl = metadata.image || DEFAULT_IMAGE;

    setSeoMetadata({
      title: metadata.title,
      description: metadata.description,
      robots: metadata.robots,
      canonicalUrl,
      ogType: "website",
      ogTitle: metadata.title,
      ogDescription: metadata.description,
      ogUrl: canonicalUrl,
      ogImage: imageUrl,
      twitterTitle: metadata.title,
      twitterDescription: metadata.description,
      twitterImage: imageUrl,
    });
  }, [metadata, pathname]);

  return null;
}
