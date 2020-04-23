function toggleNav() {
	var body = document.body;
	var hamburger = document.getElementById('h_menu_js');
	var blackBg = document.getElementById('bg_open_js');
	var navClick1 = document.getElementById('nav_click1');
	var navClick2 = document.getElementById('nav_click2');
	var navClick3 = document.getElementById('nav_click3');
	var navClick4 = document.getElementById('nav_click4');

	hamburger.addEventListener('click', function () {
		body.classList.toggle('menu_open');
	});
	blackBg.addEventListener('click', function () {
		body.classList.remove('menu_open');
	});
	navClick1.addEventListener('click', function () {
		body.classList.remove('menu_open');
	});
	navClick2.addEventListener('click', function () {
		body.classList.remove('menu_open');
	});
	navClick3.addEventListener('click', function () {
		body.classList.remove('menu_open');
	});
	navClick4.addEventListener('click', function () {
		body.classList.remove('menu_open');
	});
}
toggleNav();
