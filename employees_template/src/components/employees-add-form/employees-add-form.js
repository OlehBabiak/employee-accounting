import { useState } from "react";
import "./employees-add-form.css";

const EmployeesAddForm = ({ onAdd }) => {
  const initValue = {
    name: "",
    salary: "",
  };

  const [form, setForm] = useState(initValue);

  function onValueChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function onSubmit(e) {
    e.preventDefault();
    if (form.name.trim().length < 3 || !form.salary) {
      return;
    }
    onAdd(form.name, form.salary);
    setForm({
      ...form,
      name: "",
      salary: "",
    });
  }

  return (
    <div className="app-add-form">
      <h3>Додати нового працівника</h3>
      <form className="add-form d-flex" onSubmit={onSubmit}>
        <input
          type="text"
          className="form-control new-post-label"
          placeholder="Ім'я?"
          name="name"
          onChange={onValueChange}
          value={form.name}
        />
        <input
          type="number"
          className="form-control new-post-label"
          placeholder="З/П в $?"
          name="salary"
          onChange={onValueChange}
          value={form.salary}
        />

        <button type="submit" className="btn btn-outline-light">
          Добавить
        </button>
      </form>
    </div>
  );
};

export default EmployeesAddForm;
