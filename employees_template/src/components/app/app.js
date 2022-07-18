import { useState } from "react";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";
import { v4 as uuidv4 } from "uuid";

import "./app.css";

function App() {
  const employeeList = [
    { id: uuidv4(), name: "Oleh", salary: 1200, increase: false, rise: false },
    { id: uuidv4(), name: "Rostyk", salary: 900, increase: false, rise: false },
    { id: uuidv4(), name: "Vasyl", salary: 600, increase: false, rise: false },
  ];

  const [userArr, setUserArr] = useState(employeeList);
  const [filter, setFilter] = useState("all");
  const [searchValue, setSearchValue] = useState("");
  const empNumber = userArr.length;
  const incEmpNumber = userArr.filter((el) => el.increase).length;

  function deleteItem(id) {
    setUserArr([...userArr.filter((el) => el.id !== id)]);
  }

  function filterBySearch(value) {
    setSearchValue(value);
  }

  function searchEmp(items, value) {
    if (value.length === 0) {
      return items;
    }
    return items.filter((el) =>
      el.name.toLowerCase().includes(value.toLowerCase().trim())
    );
  }

  const visibleEmp = filterPost(searchEmp(userArr, searchValue), filter);

  function onFilterSelect(params) {
    setFilter(params);
  }

  function filterPost(items, filter) {
    switch (filter) {
      case "rise":
        return items.filter((el) => el.rise);
      case "high":
        return items.filter((el) => el.salary > 1000);

      default:
        return items;
    }
  }

  function addItem(name, salary) {
    const newEmployee = {
      id: uuidv4(),
      name: name,
      salary: salary,
      increase: false,
      rise: false,
    };
    setUserArr([...userArr, newEmployee]);
  }

  function onToggleProp(id, prop) {
    setUserArr([
      ...userArr.map((el) => {
        if (el.id === id) {
          return { ...el, [prop]: !el[prop] };
        }
        return el;
      }),
    ]);
  }

  return (
    <div className="app">
      <AppInfo empNumber={empNumber} incEmpNumber={incEmpNumber} />

      <div className="search-panel">
        <SearchPanel filterBySearch={filterBySearch} />
        <AppFilter filterSelect={onFilterSelect} filter={filter} />
      </div>
      <EmployeesList
        data={visibleEmp}
        onDelete={deleteItem}
        onToggleProp={onToggleProp}
      />
      <EmployeesAddForm onAdd={addItem} />
    </div>
  );
}

export default App;
