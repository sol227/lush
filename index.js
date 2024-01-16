// intro scrollTo
gsap.registerPlugin(ScrollToPlugin);

function getSamePageAnchor(link) {
  if (
    link.protocol !== window.location.protocol ||
    link.host !== window.location.host ||
    link.pathname !== window.location.pathname ||
    link.search !== window.location.search
  ) {
    return false;
  }
  return link.hash;
}

function scrollToHash(hash, e) {
  const elem = hash ? document.querySelector(hash) : false;
  if (elem) {
    if (e) e.preventDefault();
    gsap.to(window, { scrollTo: elem });
  }
}
document.querySelectorAll("a[href]").forEach((a) => {
  a.addEventListener("click", (e) => {
    scrollToHash(getSamePageAnchor(a), e);
  });
});
scrollToHash(window.location.hash);

// project scrolltrigger
gsap.registerPlugin(ScrollTrigger);

// intro 이미지 축소하기
const intro = gsap.timeline();
const introGif = gsap.timeline();
const ending = gsap.timeline();
const endGif = gsap.timeline();

intro.from(".intro_bg img", {
  scale: 1,
  width: "100vw",
  height: "100vh",
});

ScrollTrigger.create({
  animation: intro,
  trigger: ".intro_bg",
  start: "top top",
  end: "bottom top",
  scrub: true,
  pin: true,
  markers: false,
  anticipatePin: 1,
});

introGif.from(".intro_gif", {
  opacity: 0,
});

ScrollTrigger.create({
  animation: introGif,
  trigger: ".intro_gif",
  start: "top top",
  end: "bottom top",
  scrub: true,
  anticipatePin: 1,
});

// ending
ending.from(".ending_bg img", {
  scale: 1,
  width: "100vw",
  height: "100vh",
});

ScrollTrigger.create({
  animation: ending,
  trigger: ".ending_bg",
  start: "top top",
  end: "bottom top",
  scrub: true,
  pin: true,
  markers: false,
  anticipatePin: 1,
});

endGif.from(".end_gif", {
  opacity: 0,
});

ScrollTrigger.create({
  animation: endGif,
  trigger: ".end_gif",
  start: "top top",
  end: "bottom top",
  scrub: true,
});

// history 제목
gsap.to("#history .lush", {
  translateY: 0,
  scrollTrigger: {
    trigger: "#history .lush",
    start: "top bottom",
    // duration: 10,
  },
});
gsap.to("#history .poole", {
  translateY: 0,
  scrollTrigger: {
    trigger: "#history .poole",
    start: "top bottom",
  },
});
gsap.to("#history .since", {
  translateY: 0,
  scrollTrigger: {
    trigger: "#history .since",
    start: "top bottom",
  },
});
// history 이미지
gsap.to(".history_imgs", {
  scale: 1,
  scrollTrigger: {
    trigger: "#history .since",
    start: "top bottom",
    // end: "bottom",
    // markers: true,
  },
});

gsap.to(".poole_img", {
  yPercent: -20,
  ease: "none",
  duration: 0.5,
  scrollTrigger: {
    trigger: ".poole_img",
    start: "top bottom",
    end: "bottom top",
    // markers: true,
    scrub: true,
  },
});
gsap.to(".lush_img", {
  yPercent: -85,
  ease: "none",
  duration: 0.5,
  scrollTrigger: {
    trigger: ".lush_img",
    start: "top bottom",
    end: "bottom top",
    // markers: true,
    scrub: true,
  },
});

// gsap.to(".history_imgs .people", {
//   scale: 1,
//   scrollTrigger: {
//     trigger: ".history_imgs",
//     start: "top bottom",
//   },
// });

//product
// 제목
gsap.to("#lush_pick .title", {
  translateY: 0,
  scrollTrigger: {
    trigger: "#lush_pick .title",
    start: "top bottom",
  },
});
// 이미지
gsap.to(".product_wasabi", {
  opacity: 1,
  y: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".product_wasabi",
    start: "top bottom",
  },
});
gsap.to(".product_New", {
  opacity: 1,
  y: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".product_New",
    start: "top bottom",
  },
});
gsap.to(".product_olive", {
  opacity: 1,
  y: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".product_olive",
    start: "top bottom",
  },
});
gsap.to(".product_magnaminty", {
  opacity: 1,
  y: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".product_magnaminty",
    start: "top bottom",
  },
});
gsap.to(".product_charcoal", {
  opacity: 1,
  y: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".product_charcoal",
    start: "top bottom",
  },
});
gsap.to(".product_intergalactic", {
  opacity: 1,
  y: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".product_intergalactic",
    start: "top bottom",
  },
});
gsap.to(".product_power", {
  opacity: 1,
  y: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".product_power",
    start: "top bottom",
  },
});
gsap.to(".product_sexbomb", {
  opacity: 1,
  y: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".product_sexbomb",
    start: "top bottom",
  },
});

//gift
gsap.to("textpath", {
  start: "top 80%",
  end: "top 20%",
  attr: { startOffset: "40%" },
  ease: "power1.inOut",
  scrollTrigger: {
    trigger: "textPath",
    scrub: true,
  },
});

// campaign
const hide = (item) => {
  gsap.set(item, { autoAlpha: 0 });
};

const animate = (item) => {
  let x = 0;
  let y = 0;
  let delay = item.dataset.delay;

  if (item.classList.contains("txtL")) {
    x = -70;
    y = 0;
  } else if (item.classList.contains("txtU")) {
    x = 0;
    y = 150;
  } else if (item.classList.contains("txtR")) {
    x = 70;
    y = 0;
  } else {
    x = 0;
    y = -100;
  }

  gsap.fromTo(
    item,
    { autoAlpha: 0, x: x, y: y },
    {
      autoAlpha: 1,
      x: 0,
      y: 0,
      delay: delay,
      duration: 1.25,
      overwrite: "auto",
      ease: "expo",
    }
  );
};

gsap.utils.toArray(".reveal").forEach((item) => {
  hide(item);
  ScrollTrigger.create({
    trigger: item,
    start: "top bottom",
    end: "bottom top",
    markers: false,
    onEnter: () => {
      animate(item);
    },
  });
});

// scrollSmoder lenis
const lenis = new Lenis();

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);
