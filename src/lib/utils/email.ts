/**
 * Converts an email address to HTML entities to prevent bot scraping
 * while remaining human-readable in the browser.
 *
 * @param email - The email address to obfuscate
 * @returns HTML entity-encoded email string
 *
 * @example
 * obfuscateEmail('user@example.com')
 * // Returns: '&#117;&#115;&#101;&#114;&#64;&#101;&#120;&#97;&#109;&#112;&#108;&#101;&#46;&#99;&#111;&#109;'
 */
export function obfuscateEmail(email: string): string {
  return email
    .split('')
    .map(char => `&#${char.charCodeAt(0)};`)
    .join('');
}

/**
 * Reconstructs the original email from obfuscated HTML entities.
 * Used by event handlers to dynamically reveal email only when user interacts with the link.
 *
 * @param obfuscatedEmail - The HTML entity-encoded email string
 * @returns The original email address
 *
 * @example
 * reconstructEmail('&#117;&#115;&#101;&#114;&#64;&#101;&#120;&#97;&#109;&#112;&#108;&#101;&#46;&#99;&#111;&#109;')
 * // Returns: 'user@example.com'
 */
export function reconstructEmail(obfuscatedEmail: string): string {
  const entityRegex = /&#(\d+);/g;
  return obfuscatedEmail.replace(entityRegex, (_match, charCode) => {
    return String.fromCharCode(parseInt(charCode, 10));
  });
}
