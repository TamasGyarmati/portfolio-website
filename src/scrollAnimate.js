export default {
  mounted(el) {
    el.classList.add('reveal');

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('active');
          observer.disconnect();
        }
      },
      {
        threshold: 0,
        rootMargin: '0px 0px -25% 0px',
      }
    );

    observer.observe(el);
    el._observer = observer;
  },

  unmounted(el) {
    el._observer?.disconnect();
  },
};