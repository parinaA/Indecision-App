class IndecisionApp extends React.Component{
	render() {
		const title = "Indecision";
		const subtitle = "Put your life in the hands of a computer";
		const options = ['Thing one','Thing two','Thing three'];
		return (
				<div>					
					<Header title={title} subtitle={subtitle}/>
					<Action options={options}/>
					<Options />
					<AddOption />	
				</div>
			);
	}

}

class Header extends React.Component{
	render (){
		return (
			<div>
				<h1>{this.props.title}</h1>
				<h2>{this.props.subtitle}</h2>
			</div>
			);
		}
}

class Action extends React.Component{
	render(){
		return (
			<div>
				{
					this.props.options.map((option)=><Options key={option} optiontext={option}/>)
				}
				<button>Click here</button>
			</div>
			);
	}
}

class Options extends React.Component{
	render(){
		return (
			<div>
				{this.props.optiontext}
			</div>
			);
	}
}


class AddOption extends React.Component{
	render(){
		return (
			<div>
				<form>
					<input type="text" name="option"/>
					<input type="submit" name="submit"/>
				</form>
			</div>
			);
	}
}

ReactDOM.render(<IndecisionApp />,document.getElementById('app'));