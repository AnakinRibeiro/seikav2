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

/**
 * Section header entrance, shared by the sections: the tag fades up, the title words rise from
 * behind their masks, then the remaining `[data-reveal]` items (button, text) follow almost
 * together. Marked with `data-reveal` (tag first), `data-reveal-title` and played once when the
 * header reaches 80% of the viewport.
 */
export function revealHeader(header: HTMLElement) {
  const [tag, ...rest] = header.querySelectorAll<HTMLElement>('[data-reveal]');
  const words = splitWords(header.querySelector<HTMLElement>('[data-reveal-title]')!);

  gsap.set([tag, ...rest], { autoAlpha: 0, y: 18 });
  ScrollTrigger.create({
    trigger: header,
    start: 'top 80%',
    once: true,
    onEnter: () => {
      gsap
        .timeline()
        .to(tag, { autoAlpha: 1, y: 0, duration: 0.7, ease: 'power3.out', clearProps: 'transform' })
        .to(words, { yPercent: 0, duration: 0.9, ease: 'power4.out', stagger: 0.05 }, 0.1)
        .to(
          rest,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.7,
            ease: 'power3.out',
            stagger: 0.08,
            clearProps: 'transform',
          },
          0.5,
        );
    },
  });
}

/**
 * Smooth open/close for a list of `<details>` accordions (Accordion.astro), one open at a time.
 * The content block's height and opacity are tweened instead of using the native snap/CSS
 * transition. The `open` attribute flips right away, so the title, border and icon states do not
 * lag behind; `details[data-smooth]` in Accordion.astro keeps the content visible while it
 * animates. Needs `::details-content` (Chromium 131+, Safari 18.4+); anywhere else, or with
 * reduced motion, the native accordion keeps working untouched.
 */
export function smoothAccordion(list: HTMLElement) {
  if (!CSS.supports('selector(::details-content)')) return;

  const items = [...list.querySelectorAll<HTMLDetailsElement>('details')];
  const contentOf = (item: HTMLDetailsElement) => item.lastElementChild as HTMLElement;
  const done = () => ScrollTrigger.refresh();

  const open = (item: HTMLDetailsElement) => {
    const content = contentOf(item);
    const fromHeight = item.open ? content.offsetHeight : 0;
    const fromAlpha = item.open || fromHeight ? Number(gsap.getProperty(content, 'opacity')) : 0;
    gsap.killTweensOf(content);
    item.open = true;
    gsap.fromTo(
      content,
      { height: fromHeight, autoAlpha: fromAlpha },
      {
        height: 'auto',
        autoAlpha: 1,
        duration: 0.5,
        ease: 'power2.inOut',
        clearProps: 'all',
        onComplete: done,
      },
    );
  };

  const close = (item: HTMLDetailsElement) => {
    const content = contentOf(item);
    const fromHeight = content.offsetHeight;
    gsap.killTweensOf(content);
    item.open = false;
    gsap.fromTo(
      content,
      { height: fromHeight, autoAlpha: Number(gsap.getProperty(content, 'opacity')) },
      {
        height: 0,
        autoAlpha: 0,
        duration: 0.5,
        ease: 'power2.inOut',
        clearProps: 'all',
        onComplete: done,
      },
    );
  };

  for (const item of items) {
    // The native `name` group would close the other item instantly, before it could animate.
    item.removeAttribute('name');
    item.dataset.smooth = '';
    item.querySelector('summary')?.addEventListener('click', (event) => {
      event.preventDefault();
      if (item.open) return close(item);
      items.filter((other) => other !== item && other.open).forEach(close);
      open(item);
    });
  }
}

/**
 * Fade-up for a group of elements as they scroll into view, staggered among the ones that enter
 * together (a row of cards, a list). Once per element.
 */
export function revealItems(
  items: HTMLElement[],
  { y = 30, stagger = 0.1, delay = 0, start = 'top 88%' } = {},
) {
  gsap.set(items, { autoAlpha: 0, y });
  ScrollTrigger.batch(items, {
    start,
    once: true,
    onEnter: (batch) =>
      gsap.to(batch, {
        autoAlpha: 1,
        y: 0,
        duration: 0.7,
        ease: 'power3.out',
        stagger,
        delay,
        clearProps: 'transform',
      }),
  });
}
