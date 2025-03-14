/**
 * Utility function to get the correct asset path with basePath in production
 */
export function getAssetPath(path: string): string {
  // With custom domain, we don't need a basePath
  const basePath = '';
  return `${basePath}${path}`;
} 