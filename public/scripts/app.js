'use strict';

//File that contains our code 
//babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch 

var template = React.createElement(
	'div',
	null,
	' ',
	React.createElement(
		'h1',
		null,
		' hello '
	),
	' ',
	React.createElement(
		'p',
		null,
		'This is JSX from app.js '
	),
	' '
);

var obj = {

	user: 'Nikhil',
	age: 20,
	location: 'New Delhi'
};

var app = {
	title: 'Indecision App',
	options: ['one', 'two']

};

function getLocation(location) {
	if (location) {
		return React.createElement(
			'p',
			null,
			'Location : ',
			location
		);
	}
}

var template2 = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		obj.user ? obj.user : 'Anonymous'
	),
	obj.age && obj.age >= 18 && React.createElement(
		'p',
		null,
		'Age: ',
		obj.age
	),
	getLocation(obj.location)
);

var template3 = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		app.title
	),
	app.subtitle && React.createElement(
		'p',
		null,
		app.subtitle
	),
	app.options.length > 0 && React.createElement(
		'ol',
		null,
		' ',
		React.createElement(
			'li',
			null,
			app.options[0]
		),
		' ',
		React.createElement(
			'li',
			null,
			app.options[1]
		)
	)
);

var appRoot = document.getElementById('app');
ReactDOM.render(template3, appRoot);
