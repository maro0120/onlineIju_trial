// (() => {
//   const sample = document.querySelectorAll('.sample');
  
//   const observer = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//       if (entry.intersectionRatio > 0) {
//         entry.target.classList.add('sample-animation');
//       } else {
//         entry.target.classList.remove('sample-animation');
//       }
//     });
//   });
  
//   sample.forEach(img => {
//     observer.observe(img);
//   });
// })();

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
  var nodes = Array.prototype.slice.call(sample, 0);
  nodes.forEach(function(img){
    console.log(img);
  });
})();