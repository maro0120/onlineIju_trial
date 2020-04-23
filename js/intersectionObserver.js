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


(() => {
    const clientHeight = document.documentElement.clientHeight;
    const header = document.querySelector('.header');
    let observer = new IntersectionObserver((changes) => {
        for (const change of changes) {
            let rect = change.target.getBoundingClientRect();
            let h = (0 < rect.top && rect.top < clientHeight)       // 対象の上端は表示領域に入っている
                || (0 < rect.bottom && rect.bottom < clientHeight)  // 対象の下端は表示領域に入っている
                || (0 > rect.top && rect.bottom > clientHeight);    // 上端下端も表示されてないがその間が表示されている
            if(h) {
                    header.classList.remove('scrolled');
            } else {
                    header.classList.add('scrolled');
            }
        }
    });
    let target = document.querySelector('.hero'); // この要素のから外れたら
    observer.observe(target);
})();