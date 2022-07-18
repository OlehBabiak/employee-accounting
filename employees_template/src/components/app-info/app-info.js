import "./app-info.css";

const AppInfo = ({ empNumber, incEmpNumber }) => {
  return (
    <div className="app-info">
      <h1>Облік працівників компанії N</h1>
      <h2>Загальна кількість працівників:{empNumber}</h2>
      <h2>Премію отримують: {incEmpNumber}</h2>
    </div>
  );
};

export default AppInfo;
