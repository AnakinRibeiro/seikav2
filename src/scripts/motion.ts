import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export { gsap, ScrollTrigger };

/** `anim` is set on <html> by Layout, and only when the visitor has not asked for reduced motion. */
export const motionAllowed = () => document.documentElement.classList.contains('anim');

/**
 * Wraps every word of `el` in a clipping mask so it can rise from behind it. Unlike per-line
 * splitting it keeps the natural (responsive) line breaks, including <br> tags. Returns the
 * inner word elements, already pushed below their masks.
 */
export function splitWords(el: HTMLElement) {
  const words: HTMLElement[] = [];
  const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
  const texts: Text[] = [];
  for (let node = walker.nextNode(); node; node = walker.nextNode()) texts.push(node as Text);

  for (const text of texts) {
    const fragment = document.createDocumentFragment();
    for (const part of (text.textContent ?? '').split(/(\s+)/)) {
      if (!part) continue;
      if (/^\s+$/.test(part)) {
        fragment.append(part);
        continue;
      }
      const mask = document.createElement('span');
      // Bottom padding keeps descenders inside the mask; the negative margin cancels its height.
      mask.style.cssText =
        'display:inline-block;overflow:clip;vertical-align:top;padding:0 .04em .12em;margin:0 -.04em -.12em';
      const word = document.createElement('span');
      word.style.display = 'inline-block';
      word.textContent = part;
      mask.append(word);
      fragment.append(mask);
      words.push(word);
    }
    text.replaceWith(fragment);
  }

  gsap.set(words, { yPercent: 110 });
  return words;
}
