function Search({ onChange }) {
  return (
    <input
      type="text"
      className="form-control mb-3"
      placeholder="Enter city name"
      onChange={onChange}
    />
  );
}

export default Search;
