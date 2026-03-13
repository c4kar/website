/**
 * Email obfuscation utilities.
 * Prevents bots from scraping plain-text email addresses
 * by storing them as Base64-encoded parts and decoding at runtime.
 */

// Email stored as two Base64-encoded parts to defeat static analysis
// 'cakarr' → 'Y2FrYXJy'   |   'proton.me' → 'cHJvdG9uLm1l'
const _u = 'Y2FrYXJy';
const _d = 'cHJvdG9uLm1l';

function decode(encoded: string): string {
    try {
        return atob(encoded);
    } catch {
        return '';
    }
}

/** Returns the decoded email address at runtime */
export function getEmail(): string {
    return `${decode(_u)}@${decode(_d)}`;
}

/** Programmatically opens a mailto: link — no href in the DOM */
export function openMailto(): void {
    window.location.href = `mailto:${getEmail()}`;
}
