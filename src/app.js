//File that contains our code 
//babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch 

const template = <div> <h1> hello </h1> <p>This is JSX from app.js </p> </div>;

const obj = {
	
	user:'Nikhil',
	age: 20,
	location: 'New Delhi'
}


const app = {
	title: 'Indecision App', 
	options: ['one','two']

};

function getLocation(location){
	if (location) 
	{
		return <p>Location : {location}</p>;
	}
}

const template2 = (
	<div>
		<h1>{obj.user ? obj.user : 'Anonymous'}</h1>
		{(obj.age && obj.age >= 18) && <p>Age: {obj.age}</p>}
		{getLocation(obj.location)}
	</div>
	);

const template3 = (
	<div>
		<h1>{app.title}</h1>
		{app.subtitle && <p>{app.subtitle}</p>}
		{app.options.length > 0 && (<ol> <li>{app.options[0]}</li> <li>{app.options[1]}</li></ol>)}
	</div>
	);


const appRoot = document.getElementById('app');
ReactDOM.render(template3,appRoot);