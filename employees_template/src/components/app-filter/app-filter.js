import "./app-filter.css";

const AppFilter = ({ filterSelect, filter }) => {
  const buttonsData = [
    { name: "all", label: "Всі працівники" },
    { name: "rise", label: "На підвищення" },
    { name: "high", label: "З/П більше 1000$" },
  ];

  const buttons = buttonsData.map(({ name, label }) => {
    const active = filter === name;
    const clazz = active ? "btn-light" : "btn-outline-light";
    return (
      <button
        type="button"
        onClick={() => filterSelect(name)}
        className={`btn ${clazz}`}
        key={name}
      >
        {label}
      </button>
    );
  });

  return <div className="btn-group">{buttons}</div>;
};

export default AppFilter;
