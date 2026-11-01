(() => {
  const root = document.documentElement;
  const systemTheme = matchMedia('(prefers-color-scheme: dark)');
  let chosenTheme;
  try { chosenTheme = localStorage.getItem('theme'); } catch {}
  const hasSavedTheme = chosenTheme === 'light' || chosenTheme === 'dark';
  root.dataset.theme = hasSavedTheme ? chosenTheme : systemTheme.matches ? 'dark' : 'light';

  document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.theme-toggle');
    const themeColor = document.querySelector('meta[name="theme-color"]');
    let busy = false;
    let explicitChoice = hasSavedTheme;
    const syncControls = () => {
      const dark = root.dataset.theme === 'dark';
      button.setAttribute('aria-pressed', String(dark));
      button.setAttribute('aria-label', `Switch to ${dark ? 'light' : 'dark'} mode`);
      button.title = `Switch to ${dark ? 'light' : 'dark'} mode`;
      themeColor.content = dark ? '#131b18' : '#f8faf7';
    };
    syncControls();
    button.hidden = false;
    systemTheme.addEventListener('change', () => {
      if (explicitChoice) return;
      root.dataset.theme = systemTheme.matches ? 'dark' : 'light';
      syncControls();
    });

    let collapseCache;
    const collapseFrames = async () => {
      const viewport = `${innerWidth}x${innerHeight}`;
      if (collapseCache?.viewport === viewport) return collapseCache.frames;
      // Limit mask resolution rather than creating thousands of moving DOM elements.
      const resolution = Math.min(1, 720 / Math.max(innerWidth, innerHeight));
      const canvas = document.createElement('canvas');
      canvas.width = Math.ceil(innerWidth * resolution);
      canvas.height = Math.ceil(innerHeight * resolution);
      const context = canvas.getContext('2d');
      if (!context) return null;
      const size = 12 * resolution;
      const columns = Math.ceil(canvas.width / size);
      const rows = Math.ceil(canvas.height / size);
      const particles = Array.from({ length: columns * rows }, (_, index) => ({
        x: (index % columns) * size,
        y: Math.floor(index / columns) * size,
        delay: Math.random() * 0.3 + Math.floor(index / columns) / rows * 0.2,
        spin: (Math.random() - 0.5) * 2.6,
        drift: (Math.random() - 0.5) * size * 2,
        fall: size * (1.5 + Math.random() * 3),
      }));
      const frames = [];
      for (let frame = 0; frame <= 40; frame++) {
        const time = frame / 40;
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.fillStyle = '#fff';
        for (const particle of particles) {
          const progress = Math.min(1, Math.max(0, (time - particle.delay) / 0.5));
          if (progress === 1) continue;
          if (progress === 0) {
            context.fillRect(particle.x, particle.y, size + 1, size + 1);
            continue;
          }
          const collapse = progress * progress;
          const fragmentSize = (size + 1) * (1 - collapse);
          context.save();
          context.translate(particle.x + size / 2 + particle.drift * collapse,
            particle.y + size / 2 + particle.fall * collapse);
          context.rotate(particle.spin * collapse);
          context.globalAlpha = 1 - collapse;
          context.fillRect(-fragmentSize / 2, -fragmentSize / 2, fragmentSize, fragmentSize);
          context.restore();
        }
        frames.push({
          maskImage: `url(${canvas.toDataURL()})`,
          maskSize: '100% 100%',
          maskRepeat: 'no-repeat',
          opacity: frame === 40 ? 0 : 1,
          transform: `translateY(${time * time * 14}px) scale(${1 - time * 0.025})`,
        });
        if (frame % 5 === 0) await new Promise(resolve => setTimeout(resolve, 0));
      }
      collapseCache = { viewport, frames };
      return frames;
    };

    button.addEventListener('click', async () => {
      if (busy) return;
      busy = true;
      explicitChoice = true;
      const nextTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
      const apply = () => { root.dataset.theme = nextTheme; syncControls(); };
      try { localStorage.setItem('theme', nextTheme); } catch {}
      try {
        if (!document.startViewTransition || matchMedia('(prefers-reduced-motion: reduce)').matches) {
          apply();
          return;
        }
        const frames = await collapseFrames();
        if (!frames) { apply(); return; }
        const transition = document.startViewTransition(apply);
        try {
          await transition.ready;
          const animation = root.animate(frames, { duration: 1200, easing: 'linear', fill: 'both', pseudoElement: '::view-transition-old(root)' });
          await animation.finished;
          animation.cancel();
        } catch {
          transition.skipTransition();
        }
        await transition.finished;
      } catch {
        apply();
      } finally {
        busy = false;
      }
    });
  });
})();

document.addEventListener('DOMContentLoaded', () => {
  const toolbar = document.querySelector('.project-toolbar');
  const buttons = [...document.querySelectorAll('[data-filter]')];
  const cards = [...document.querySelectorAll('.project-card')];
  const count = document.querySelector('.project-count');
  if (!toolbar || !count || !buttons.length || !cards.length) return;

  for (const button of buttons) {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter;
      let visible = 0;
      for (const card of cards) {
        card.hidden = filter !== 'all' && card.dataset.category !== filter;
        if (!card.hidden) visible++;
      }
      for (const option of buttons) option.setAttribute('aria-pressed', String(option === button));
      count.textContent = `Showing ${visible} project${visible === 1 ? '' : 's'}`;
    });
  }
  toolbar.hidden = false;
});
