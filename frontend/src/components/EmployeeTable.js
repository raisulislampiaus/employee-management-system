


import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TableSortLabel,
  Avatar,
  IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown"; 
import { useNavigate } from "react-router-dom";

const EmployeeTable = ({ employees, onSort, sortBy, sortOrder, onDelete }) => {
  const navigate = useNavigate();

  const handleSortClick = (column) => {
    onSort(column);
  };

  const handleEdit = (id) => {
    navigate(`/edit-employee/${id}`);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      onDelete(id);
    }
  };

  return (
    <TableContainer component={Paper}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Photo</TableCell>
            <TableCell>
              <TableSortLabel
                active={sortBy === "fullName"}
                direction={sortBy === "fullName" ? sortOrder : "asc"}
                IconComponent={ArrowDropDownIcon} // Custom default sort icon
                onClick={() => handleSortClick("fullName")}
                sx={{
                  "& .MuiTableSortLabel-icon": {
                    opacity: sortBy === "fullName" ? 1 : 0.5,
                  },
                }}
              >
                Full Name
              </TableSortLabel>
            </TableCell>
            <TableCell>
              <TableSortLabel
                active={sortBy === "email"}
                direction={sortBy === "email" ? sortOrder : "asc"}
                IconComponent={ArrowDropDownIcon} 
                onClick={() => handleSortClick("email")}
                sx={{
                  "& .MuiTableSortLabel-icon": {
                    opacity: sortBy === "email" ? 1 : 0.5,
                  },
                }}
              >
                Email
              </TableSortLabel>
            </TableCell>
            <TableCell>
              <TableSortLabel
                active={sortBy === "mobile"}
                direction={sortBy === "mobile" ? sortOrder : "asc"}
                IconComponent={ArrowDropDownIcon} 
                onClick={() => handleSortClick("mobile")}
                sx={{
                  "& .MuiTableSortLabel-icon": {
                    opacity: sortBy === "mobile" ? 1 : 0.5,
                  },
                }}
              >
                Mobile
              </TableSortLabel>
            </TableCell>
            <TableCell>
              <TableSortLabel
                active={sortBy === "dateOfBirth"}
                direction={sortBy === "dateOfBirth" ? sortOrder : "asc"}
                IconComponent={ArrowDropDownIcon} 
                onClick={() => handleSortClick("dateOfBirth")}
                sx={{
                  "& .MuiTableSortLabel-icon": {
                    opacity: sortBy === "dateOfBirth" ? 1 : 0.5,
                  },
                }}
              >
                Date Of Birth
              </TableSortLabel>
            </TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employees.map((employee) => (
            <TableRow key={employee._id}>
              <TableCell>
                <Avatar
                  src={employee.photoUrl || "default-photo.png"}
                  alt="Employee"
                  sx={{ width: 40, height: 40 }}
                />
              </TableCell>
              <TableCell>{employee.fullName}</TableCell>
              <TableCell>{employee.email}</TableCell>
              <TableCell>{employee.mobile}</TableCell>
              <TableCell>{new Date(employee.dateOfBirth).toLocaleDateString()}</TableCell>
              <TableCell>
                <IconButton
                  color="primary"
                  aria-label="edit"
                  onClick={() => handleEdit(employee._id)}
                >
                  <EditIcon />
                </IconButton>
                <IconButton
                  color="secondary"
                  aria-label="delete"
                  onClick={() => handleDelete(employee._id)}
                >
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default EmployeeTable;
