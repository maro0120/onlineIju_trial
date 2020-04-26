(() => {
  const sample = document.querySelectorAll('.sample');
  
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        entry.target.classList.add('sample-animation');
      } else {
        entry.target.classList.remove('sample-animation');
      }
    });
  });
  
  sample.forEach(img => {
    observer.observe(img);
  });
})();

