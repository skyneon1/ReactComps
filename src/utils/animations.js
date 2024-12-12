import gsap from "gsap";
import ScrollMagic from "scrollmagic";

export const initScrollAnimations = () => {
  const controller = new ScrollMagic.Controller();

  document.querySelectorAll(".fade-in").forEach((section) => {
    new ScrollMagic.Scene({
      triggerElement: section,
      triggerHook: 0.9,
      reverse: false,
    })
      .setTween(gsap.from(section, { opacity: 0, y: 50, duration: 1 }))
      .addTo(controller);
  });
};
