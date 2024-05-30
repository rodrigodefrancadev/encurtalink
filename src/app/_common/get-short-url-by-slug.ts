export function getShortUrlBySlug(slug: string): string {
  return `${getBaseUrl()}/${slug}`;
}

function getBaseUrl() {
  return process.env.NEXT_PUBLIC_SHORT_LINK_BASE_URL || location.origin;
}
