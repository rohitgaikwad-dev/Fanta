const preloader = () => {
  let loader = document.querySelector(".d-bar");
  let percentage = document.querySelector(".percent");

  let percent = 0;

  window.addEventListener("load", () => {
    setInterval(() => {
      if (percent <= 99) {
        percent++;
        loader.style.width = `${percent}%`;
        percentage.innerHTML = `${percent}%`;
      } else {
        clearInterval(percent);
        gsap.to("#preloader", {
          y: "-100%",
          ease: Power4,
          duration: 1,
        });
      }
    }, 100);
  });
};

preloader();

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#two",
    start: "0% 95%",
    end: "47% 50%",
    scrub: true,
  },
});

tl.to(
  "#fanta",
  {
    top: "120%",
    left: "100%,",
  },
  "orange"
);
tl.to(
  "#orange-cut",
  {
    rotate: "90deg",
    top: "160%",
    left: "28%",
  },
  "orange"
);
tl.to(
  "#orange",
  {
    top: "165%",
    left: "80%",
    width: "18%",
  },
  "orange"
);
tl.to(
  "#leaf1",
  {
    rotate: "140deg",
    top: "102%",
    left: "75%",
  },
  "orange"
);
tl.to(
  "#leaf2",
  {
    rotate: "120deg",
    top: "110%",
    left: "5%",
  },
  "orange"
);
tl.to(
  "#leaf3",
  {
    webkitFilter: "blur(10px)",
  },
  "orange"
);

let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#three",
    start: "0% 90%",
    end: "70% 50%",
    scrub: true,
  },
});

tl2.to(
  "#orange",
  {
    webkitFilter: "blur(5px)",
  },
  "coke"
);
tl2.to(
  "#leaf1",
  {
    webkitFilter: "blur(10px)",
  },
  "coke"
);
tl2.to(
  "#leaf2",
  {
    webkitFilter: "blur(10px)",
  },
  "coke"
);

tl2.from(
  ".lemon1",
  {
    rotate: "-90deg",
    left: "-100%",
    top: "110%",
    ease: Power4,
  },
  "coke"
);
tl2.from(
  "#cocacola",
  {
    rotate: "-30deg",
    left: "-100%",
    top: "110%",
    ease: Power4,
  },
  "coke"
);
tl2.from(
  ".lemon2",
  {
    rotate: "-90deg",
    left: "120%",
    top: "110%",
    ease: Power4,
  },
  "coke"
);
tl2.from(
  "#pepsi",
  {
    rotate: "30deg",
    left: "120%",
    top: "110%",
    ease: Power4,
  },
  "coke"
);

tl2.to(
  "#fanta",
  {
    width: "30%",
    top: "220%",
    left: "36%",
  },
  "coke"
);

tl2.to(
  "#orange-cut",
  {
    rotate: "180deg",
    width: "15%",
    top: "207%",
    left: "43%",
  },
  "coke"
);
