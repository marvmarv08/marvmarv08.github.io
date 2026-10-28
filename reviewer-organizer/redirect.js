(() => {
  // Keep email verification/recovery state on this origin while updating the app path.
  const target = new URL('/StudyNest/', window.location.origin);
  target.search = window.location.search;
  target.hash = window.location.hash;
  window.location.replace(target.href);
})();
