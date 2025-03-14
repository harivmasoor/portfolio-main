/**
 * Utility function to get the correct asset path with basePath in production
 */
export function getAssetPath(path: string): string {
  const basePath = process.env.NODE_ENV === 'production' ? '/portfolio-main' : '';
  return `${basePath}${path}`;
} 