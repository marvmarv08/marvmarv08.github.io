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
    root.classList.add('theme-ready');
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
      apply();
      if (matchMedia('(prefers-reduced-motion: reduce)').matches || !Element.prototype.animate) {
        busy = false;
        return;
      }
      const particles = [];
      try {
        const bounds = button.getBoundingClientRect();
        const animations = Array.from({ length: 10 }, (_, index) => {
          const particle = document.createElement('span');
          particle.className = 'theme-particle';
          particle.setAttribute('aria-hidden', 'true');
          particle.style.left = `${bounds.left + bounds.width / 2}px`;
          particle.style.top = `${bounds.top + bounds.height / 2}px`;
          document.body.append(particle);
          particles.push(particle);
          const angle = index / 10 * Math.PI * 2;
          const radius = 26 + index % 3 * 4;
          return particle.animate([
            { transform: `translate(${Math.cos(angle) * radius}px, ${Math.sin(angle) * radius}px) scale(1)`, opacity: 0 },
            { opacity: 0.65, offset: 0.18 },
            { transform: 'translate(0, 0) rotate(70deg) scale(0)', opacity: 0 },
          ], { duration: 380, delay: index % 3 * 20, easing: 'ease-in', fill: 'both' }).finished;
        });
        await Promise.allSettled(animations);
      } finally {
        for (const particle of particles) particle.remove();
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
