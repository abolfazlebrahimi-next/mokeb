/** Build a URL for an asset copied from `public/`, respecting Vite's deployment base. */
export function assetUrl(path: string): string {
  const cleanPath = path.replace(/^\/+/, "");
  return `${import.meta.env.BASE_URL}${cleanPath}`;
}
