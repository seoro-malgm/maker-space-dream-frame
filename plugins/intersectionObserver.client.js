import Vue from "vue";

const animatedScrollObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("pinned");
      animatedScrollObserver.unobserve(entry.target);
    }
  });
});

const 이름 = {
  // bind hook은 디렉티브가 요소에 처음 바인딩될 때 한 번만 호출된다.(일회성)
  bind(el) {
    el.classList.add("not-pinned");
    animatedScrollObserver.observe(el);
  },
};

Vue.directive("animation", 이름);
