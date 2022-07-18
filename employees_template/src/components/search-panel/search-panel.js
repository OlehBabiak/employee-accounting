import "./search-panel.css";

const SearchPanel = ({ filterBySearch }) => {
  function searchChangeHandler(e) {
    filterBySearch(e.target.value);
  }

  return (
    <input
      type="text"
      className="form-control search-input"
      placeholder="Знайти працівника"
      onChange={searchChangeHandler}
    />
  );
};

export default SearchPanel;
