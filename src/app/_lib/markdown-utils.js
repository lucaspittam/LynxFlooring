// A simple utility for converting markdown to HTML without additional dependencies

/**
 * Converts simple markdown to HTML
 * This is a very basic implementation that covers common cases
 * @param {string} markdown - Markdown text
 * @returns {string} - HTML output
 */
export function markdownToHtml(markdown) {
  if (!markdown) return '';
  
  let html = markdown;
  
  // Handle headers
  html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
  html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
  html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');
  
  // Handle paragraphs
  html = html.replace(/^\s*(\n)?(.+)/gim, function(m) {
    return /\<(\/)?(h\d|ul|ol|li|blockquote|pre|img)/.test(m) ? m : '<p>'+m+'</p>';
  });
  
  // Remove empty paragraphs
  html = html.replace(/<p><\/p>/g, '');
  
  // Handle bold
  html = html.replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>');
  html = html.replace(/\_\_(.*?)\_\_/gim, '<strong>$1</strong>');
  
  // Handle italic
  html = html.replace(/\*(.*)\*/gim, '<em>$1</em>');
  html = html.replace(/\_(.*?)\_/gim, '<em>$1</em>');
  
  // Handle links - with basic sanitization
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/gim, function(match, p1, p2) {
    // Basic sanitization
    const url = p2.replace(/^(javascript|data|vbscript|file):/i, 'unsafe:');
    return `<a href="${url}">${p1}</a>`;
  });
  
  // Handle lists
  html = html.replace(/^\s*\*\s(.*)/gim, '<ul><li>$1</li></ul>');
  html = html.replace(/^\s*\d\.\s(.*)/gim, '<ol><li>$1</li></ol>');
  
  // Fix for multiple lists
  html = html.replace(/<\/ul>\s*<ul>/g, '');
  html = html.replace(/<\/ol>\s*<ol>/g, '');
  
  // Handle line breaks
  html = html.replace(/\n$/gim, '<br />');
  
  return html.trim();
} 