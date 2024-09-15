
import React, { useState, useEffect } from "react";
import axios from "axios";

import EmployeeSearch from "./EmployeeSearch";
import EmployeeTable from "./EmployeeTable";
import Loader from "./Loader"; 

const Products = () => {
  const [employees, setEmployees] = useState([]);
  const [searchParams, setSearchParams] = useState({
    name: "",
    dateOfBirth: "",
    email: "",
    mobile: "",
  });
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");
  const [loading, setLoading] = useState(false);
  const [totalCount, setTotalCount] = useState(0);

  

  const fetchEmployees = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/employees", {
        params: { ...searchParams, page, sortBy, sortOrder },
      });
      setEmployees(response.data.employees);
      setTotalPages(response.data.totalPages);
      setTotalCount(response.data.total);
    } catch (error) {
      console.error("Error fetching employee data:", error);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, [searchParams, page, sortBy, sortOrder]);

  const handleSearch = (newSearchParams) => {
    setSearchParams(newSearchParams);
    setPage(1); 
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  const handleSort = (column) => {
    const order = sortBy === column && sortOrder === "asc" ? "desc" : "asc";
    setSortBy(column);
    setSortOrder(order);
  };

  const handleDelete = async (id) => {
    setLoading(true); 
    try {
      await axios.delete(`http://localhost:5000/api/employees/${id}`);
      setEmployees(employees.filter((employee) => employee._id !== id));

      
    } catch (error) {
      console.error("Error deleting employee:", error);
    } finally {
      setLoading(false);
      fetchEmployees();
    }
  };

  return (
    <div className="new">
      <EmployeeSearch onSearch={handleSearch} />
      <div className="newgap">
        {loading ? (
          <Loader /> 
        ) : (
          <EmployeeTable
            employees={employees}
            onSort={handleSort}
            sortBy={sortBy}
            sortOrder={sortOrder}
            onDelete={handleDelete}
          />
        )}
      </div>
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div>
          <p>Total Employees: {totalCount}</p>
        </div>
        <div>
          <button
            onClick={() => handlePageChange(page - 1)}
            disabled={page === 1}
          >
            {"<<"}
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              disabled={page === index + 1}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(page + 1)}
            disabled={page === totalPages}
          >
            {">>"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
