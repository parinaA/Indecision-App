console.log("app.js is running");

//JSX-Javascript XML

var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: ['one', 'two']
};

var template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length >0 ? 'Here are your options' : 'No options'}</p>
</div>) ;

var user = {
    //name: 'Parina Anand',
    age: 17,
    location: 'Agra'
};
function getLocation(location){
    if(location)
    {
        return <p>location: {location}</p>;
    }
}

var templateTwo = (
    <div>
        <h1>{user.name? user.name : 'Anonymous'}</h1>
        {(user.age&&user.age>=18)&&<p>Age:{user.age}</p>}
        {getLocation(user.location)}
    </div>
);

var appRoot = document.getElementById('app');
ReactDOM.render(template ,appRoot);