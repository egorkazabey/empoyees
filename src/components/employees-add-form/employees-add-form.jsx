import { Component } from 'react';

import './employees-add-form.css';

class EmployeesAddForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			salary: '',
			data: ''
		}
	}

	onValueChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	// addItem = (id) => {
	// 	this.setState(({data}) => {
	// 		return {
	// 			data: data.filter(item => item.id !== id)
	// 		}
	// 	})
	// }

	render() {
		const {name, salary, onAdd} = this.state;
		return (
			<div className="app-add-form">
				<h3>Добавьте нового сотрудника</h3>
				<form
					className="add-form d-flex">
					<input type="text"
						className="form-control new-post-label"
						placeholder="Как его зовут?"
						name='name'
						value={name}
						onChange={this.onValueChange}
						/>
					<input type="number"
						className="form-control new-post-label"
						placeholder="З/П в $?"
						name='salary'
						value={salary}
						onChange={this.onValueChange}/>
	
					<button
							className="btn btn-outline-light"
							onClick={onDelete}>Добавить</button>
				</form>
			</div>
		)
	}
	
}

export default EmployeesAddForm;