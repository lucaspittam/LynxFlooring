// Polyfill for micromark-util-sanitize-uri
// This simple implementation is used as a fallback if the package is not properly resolved

export function sanitizeUri(uri) {
  // Basic sanitization (this is a simplified polyfill)
  if (!uri) return '';
  
  // Remove potentially dangerous protocols
  const sanitized = uri.replace(/^(javascript|data|vbscript|file):/i, 'unsafe:');
  
  return sanitized;
}

export default {
  sanitizeUri
}; 