import EmployeesAddForm from "../employees-add-form/employees-add-form";
import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({data, onDelete, onAdd}) => {

	const elements = data.map(item => {
		
		const {id, ...itemProps} = item;
		return (
			<EmployeesListItem 
			key={id} 
			{...itemProps}
			onDelete={() => onDelete(id)}/>
		)

	}
	const deleteElements = () => {
		const {id, ...itemProps} = item;
		return (
			<EmployeesListItem 
			key={id} 
			{...itemProps}
			onDelete={() => onDelete(id)}/>
		)
	}
)




    return (
        <ul className="app-list list-group">
			{elements}
			{deleteElements}
        </ul>
    )
}


export default EmployeesList;