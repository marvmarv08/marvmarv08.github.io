(() => {
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
})();
