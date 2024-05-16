import { Component } from 'react'


	export default class App extends Component {
		constructor(props) {
			super(props);
			this.state = {
				years: 27,
				position: ''
		}
	}

		commitInputChanges = (e, color) => {
			console.log(color);
			this.setState({
				position: e.target.value
			})
		}

		render() {
			const {position} = this.state;
			return (
				<>
					<h1>position - {position}</h1>
					<form action="">
						<span>Write</span>
						<input type="text" onInput={(e) => this.commitInputChanges(e, 'some color')} />
					</form>
				</>
			)
		}
	}