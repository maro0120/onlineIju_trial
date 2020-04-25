function toggleNav() {
	var body = document.body;
	var hamburger = document.getElementById('h_menu_js');
	var blackBg = document.getElementById('bg_open_js');
	var globalNav = document.querySelector('.g_nav');

	hamburger.addEventListener('click', function () {
		body.classList.toggle('menu_open');
	});
	blackBg.addEventListener('click', function () {
		body.classList.remove('menu_open');
	});
	globalNav.addEventListener('click', function(e) {
		body.classList.remove('menu_open');
		window.history.replaceState(null, '', location.pathname + location.search);
  });
}
toggleNav();
