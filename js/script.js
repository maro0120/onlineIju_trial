// document.addEventListener('DOMContentLoaded', function() {
// 	var calendarEl = document.getElementById('calendar');

// 	var calendar = new FullCalendar.Calendar(calendarEl, {

// 		plugins: [ 'interaction', 'dayGrid', 'list', 'googleCalendar' ],

// 		header: {
// 			left: 'prev,next',
// 			center: 'title',
// 			right: ''
// 		},
// 		locale: 'ja',
// 		businessHours: true, // display business hours

// 		// THIS KEY WON'T WORK IN PRODUCTION!!!
// 		// To make your own Google API key, follow the directions here:
// 		// http://fullcalendar.io/docs/google_calendar/
// 		googleCalendarApiKey: 'AIzaSyBEfl5Q2S_GzLf6ySfVvOx8gxUtT67ev2k',

// 		events: {
// 			googleCalendarId: 'e4givsn29n5pkjoh79r67e5ohs@group.calendar.google.com',
// 			className: 'gcal-event' // an option!
// 		},

// 		eventClick: function(arg) {
// 			// opens events in a popup window
// 			//window.open(arg.event.url, 'google-calendar-event', 'width=700,height=600');

// 			arg.jsEvent.preventDefault() // don't navigate in main tab
// 		},

// 		loading: function(bool) {
// 			document.getElementById('loading').style.display =
// 				bool ? 'block' : 'none';
// 		}

// 	});


// 	calendar.render();
// });

window.history.replaceState(null, '', location.pathname + location.search);
