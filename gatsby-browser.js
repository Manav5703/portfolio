import { anchorate } from 'anchorate';
import './src/scss/_index.scss';

// Init theme before app paints - dark mode as default
export const onClientEntry = () => {
  try {
    const stored = localStorage.getItem('theme');
    // Always default to dark mode if no stored preference
    const theme = stored || 'dark';
    document.documentElement.setAttribute('data-theme', theme);
  } catch {}
};

let routeLoaderEl;
const ensureRouteLoader = () => {
  if (!routeLoaderEl) {
    routeLoaderEl = document.createElement('div');
    routeLoaderEl.id = 'route-loader';
    document.body.appendChild(routeLoaderEl);
  }
  return routeLoaderEl;
};

export const onPreRouteUpdate = () => {
  if (typeof document === 'undefined') return;
  const el = ensureRouteLoader();
  el.classList.remove('done');
  // trigger animation
  requestAnimationFrame(() => el.classList.add('active'));
};

export const onRouteUpdate = () => {
  anchorate({
    scroller: (element) => {
      if (!element) return false;
      element.scrollIntoView({ behavior: 'smooth' });
      return true;
    },
  });

  // Simple intersection observer for fade-in animations
  if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
    const els = document.querySelectorAll('[data-animate]');
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            obs.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );
    els.forEach((el) => observer.observe(el));
  }

  // finish route loader
  const el = routeLoaderEl;
  if (el) {
    el.classList.add('done');
    setTimeout(() => {
      el.classList.remove('active');
      el.classList.remove('done');
    }, 400);
  }

  // Magnetic hover micro-interaction
  const applyMagnetic = (el) => {
    const strength = 10; // px
    let raf = null;
    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);
      const tx = (x / (rect.width / 2)) * strength;
      const ty = (y / (rect.height / 2)) * strength;
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.transform = `translate(${tx}px, ${ty}px)`;
      });
    };
    const onLeave = () => {
      if (raf) cancelAnimationFrame(raf);
      el.style.transform = '';
    };
    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
  };

  const magnetics = [
    ...document.querySelectorAll('.project-link.primary'),
    ...document.querySelectorAll('.theme-toggle'),
    ...document.querySelectorAll('.navbar a')
  ];
  magnetics.forEach((el) => {
    el.classList.add('magnetic');
    applyMagnetic(el);
  });
};
