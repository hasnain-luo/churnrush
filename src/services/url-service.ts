'use server';

/**
 * @fileOverview A service for fetching and parsing content from URLs.
 *
 * - fetchTextContent - Fetches the text content of a given URL.
 */

export async function fetchTextContent(url: string): Promise<string> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const html = await response.text();

    // Basic text extraction, removing script/style tags and then all other tags.
    const noScripts = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
    const noStyles = noScripts.replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '');
    const plainText = noStyles.replace(/<[^>]+>/g, '');
    
    // Condense whitespace
    return plainText.replace(/\s+/g, ' ').trim();
  } catch (error: any) {
    console.error(`Error fetching URL content for ${url}:`, error);
    throw new Error(`Could not fetch content from URL: ${url}. ${error.message}`);
  }
}
