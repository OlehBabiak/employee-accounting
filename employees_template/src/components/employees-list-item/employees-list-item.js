import "./employees-list-item.css";

const EmployeesListItem = ({
  id,
  name,
  salary,
  onDelete,
  onToggleProp,
  salaryChange,
  increase,
  rise,
}) => {
  let classNames = "list-group-item d-flex justify-content-between";
  increase ? (classNames += " increase") : (classNames += "");
  rise ? (classNames += " like") : (classNames += "");

  function onValueChange(e) {
    salaryChange(id, e.target.value);
  }
  console.log(id);

  return (
    <li className={classNames}>
      <span
        className="list-group-item-label"
        onClick={onToggleProp}
        data-toggle="rise"
      >
        {name}
      </span>
      <input
        type="text"
        className="list-group-item-input"
        defaultValue={salary + "$"}
        onInput={onValueChange}
      />
      <div className="d-flex justify-content-center align-items-center">
        <button type="button" className="btn-cookie btn-sm ">
          <i
            className="fas fa-cookie"
            onClick={onToggleProp}
            data-toggle="increase"
          ></i>
        </button>

        <button type="button" className="btn-trash btn-sm " onClick={onDelete}>
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-star"></i>
      </div>
    </li>
  );
};

export default EmployeesListItem;
