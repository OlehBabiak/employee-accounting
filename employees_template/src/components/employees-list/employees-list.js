import EmployeesListItem from "../employees-list-item/employees-list-item";

import "./employees-list.css";

const EmployeesList = ({ data, onDelete, onToggleProp, onSalaryChange }) => {
  const elem = data.map((employee) => {
    const { id, ...itemProps } = employee;

    return (
      <EmployeesListItem
        key={id}
        id={id}
        {...itemProps}
        onDelete={() => onDelete(id)}
        onToggleProp={(e) =>
          onToggleProp(id, e.currentTarget.getAttribute("data-toggle"))
        }
        salaryChange={onSalaryChange}
      />
    );
  });

  return <ul className="app-list list-group">{elem}</ul>;
};

export default EmployeesList;
