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
        const bounds = button.getBoundingClientRect();
        const x = bounds.left + bounds.width / 2;
        const y = bounds.top + bounds.height / 2;
        // Reach the farthest corner so the reveal covers any viewport or scroll position.
        const radius = Math.ceil(Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y)));
        const frames = [
          { clipPath: `circle(0px at ${x}px ${y}px)` },
          { clipPath: `circle(${radius}px at ${x}px ${y}px)` },
        ];
        const transition = document.startViewTransition(apply);
        try {
          await transition.ready;
          const animation = root.animate(frames, { duration: 750, easing: 'cubic-bezier(0.22, 1, 0.36, 1)', fill: 'both', pseudoElement: '::view-transition-new(root)' });
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
