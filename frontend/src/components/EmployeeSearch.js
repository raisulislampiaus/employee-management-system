import React, { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
const EmployeeSearch = ({ onSearch }) => {
  const [formValues, setFormValues] = useState({
    name: "",
    dateOfBirth: "",
    email: "",
    mobile: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(formValues);
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", gap: "5px", padding: "10px", border: "1px solid #ccc", borderRadius: "8px", justifyContent:'space-between' }}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formValues.name}
        onChange={handleChange}
        style={{ padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
      />
      <input
        type="date"
        name="dateOfBirth"
        placeholder="Date of Birth"
        value={formValues.dateOfBirth}
        onChange={handleChange}
        style={{ padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formValues.email}
        onChange={handleChange}
        style={{ padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
      />
      <input
        type="text"
        name="mobile"
        placeholder="Mobile"
        value={formValues.mobile}
        onChange={handleChange}
        style={{ padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
      />
      <button type="submit" style={{ padding: "8px 16px", borderRadius: "4px", border: "1px solid #007bff", background: "#007bff", color: "#fff" }}>
        <SearchIcon style={{ marginRight: "8px" }} />
      </button>
    </form>
  );
};

export default EmployeeSearch;
