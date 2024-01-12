// project scrolltrigger
gsap.registerPlugin(ScrollTrigger);

// intro 이미지 축소하기
const intro = gsap.timeline();
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
    start: "top bottom", // 첫 번째 요소의 시작 지점
  },
});
gsap.to(".product_olive", {
  opacity: 1,
  y: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".product_olive",
    start: "top bottom", // 첫 번째 요소의 시작 지점
  },
});
gsap.to(".product_magnaminty", {
  opacity: 1,
  y: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".product_magnaminty",
    start: "top bottom", // 첫 번째 요소의 시작 지점
  },
});
gsap.to(".product_charcoal", {
  opacity: 1,
  y: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".product_charcoal",
    start: "top bottom", // 첫 번째 요소의 시작 지점
  },
});
gsap.to(".product_intergalactic", {
  opacity: 1,
  y: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".product_intergalactic",
    start: "top bottom", // 첫 번째 요소의 시작 지점
  },
});
gsap.to(".product_power", {
  opacity: 1,
  y: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".product_power",
    start: "top bottom", // 첫 번째 요소의 시작 지점
  },
});
gsap.to(".product_sexbomb", {
  opacity: 1,
  y: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".product_sexbomb",
    start: "top bottom", // 첫 번째 요소의 시작 지점
  },
});

//gift
gsap.to("textpath", {
  start: "top 80%", // 스크롤 위치가 뷰포트의 80%에 도달하면 시작
  end: "top 20%", // 스크롤 위치가 뷰포트의 20%에 도달하면 종료
  attr: { startOffset: "40%" }, // 텍스트의 시작 오프셋을 조절하여 텍스트의 위치를 조절
  ease: "power1.inOut", // 애니메이션의 이징 조절
  scrollTrigger: {
    trigger: "textPath",
    scrub: true, // 스크롤 속도에 따라 애니메이션 속도 조절
  },
});

// ending

// intro 이미지 축소하기
const ending = gsap.timeline();
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
