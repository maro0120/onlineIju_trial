(function () {
  var sample = document.querySelectorAll('.sample');
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.intersectionRatio > 0) {
        entry.target.classList.add('sample-animation');
      } else {
        entry.target.classList.remove('sample-animation');
      }
    });
  });
  sample.forEach(function (img) {
    observer.observe(img);
  });
})();