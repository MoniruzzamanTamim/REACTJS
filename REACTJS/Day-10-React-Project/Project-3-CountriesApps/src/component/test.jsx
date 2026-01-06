import React, { useState } from 'react';

function SearchFilter() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  // Sample array data
  const dataArray = [
    { id: 1, name: "John", age: 25 },
    { id: 2, name: "Alice", age: 30 },
    { id: 3, name: "Bob", age: 28 },
    { id: 4, name: "Emily", age: 35 },
    // Add more data as needed
  ];

  // Function to handle search input change
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    filterData(event.target.value);
  };

  // Function to filter data based on search term
  const filterData = (term) => {
    const filteredResults = dataArray.filter(item =>
      item.name.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredData(filteredResults);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <ul>
        {filteredData.map(item => (
          <p key={item.id}>
            {item.name} - {item.age} years old
          </p>
        ))}
      </ul>
    </div>
  );
}

export default SearchFilter;
