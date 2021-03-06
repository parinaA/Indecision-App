'use strict';

console.log("app.js is running");

//JSX-Javascript XML

var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: ['one', 'two']
};

var template = React.createElement(
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
    React.createElement(
        'p',
        null,
        app.options.length > 0 ? 'Here are your options' : 'No options'
    )
);

var user = {
    //name: 'Parina Anand',
    age: 17,
    location: 'Agra'
};
function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'location: ',
            location
        );
    }
}

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name ? user.name : 'Anonymous'
    ),
    user.age && user.age >= 18 && React.createElement(
        'p',
        null,
        'Age:',
        user.age
    ),
    getLocation(user.location)
);

var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
