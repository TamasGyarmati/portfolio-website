export default {
  mounted(el) {
    el.classList.add('reveal');

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('active');
        } else {
          el.classList.remove('active');
        }
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -10% 0px',
      }
    );

    observer.observe(el);
    el._observer = observer;
  },

  unmounted(el) {
    el._observer?.disconnect();
  },
};