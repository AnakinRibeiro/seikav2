import Lenis from 'lenis';
import { gsap, motionAllowed, ScrollTrigger } from './motion';

// Same gate as the entrance animations: not for visitors who asked for reduced motion.
if (motionAllowed()) {
  // `anchors` keeps the nav links (#servicos…) working, now with the same smoothing.
  const lenis = new Lenis({ autoRaf: false, anchors: true });

  // One clock for everything: GSAP's ticker drives Lenis, and ScrollTrigger follows its position.
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  // The mobile menu is a modal <dialog>: freeze the page behind it while it is open.
  const menu = document.querySelector('#site-menu');
  if (menu) {
    new MutationObserver(() => (menu.hasAttribute('open') ? lenis.stop() : lenis.start())).observe(
      menu,
      { attributes: true, attributeFilter: ['open'] },
    );
  }
}
