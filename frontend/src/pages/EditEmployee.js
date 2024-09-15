import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import EmployeeForm from '../components/EmployeeForm';
import { getEmployee, updateEmployee } from '../services/employeeService';
import { CircularProgress, Box, } from '@mui/material';

const EditEmployee = () => {
  const { id } = useParams(); 
  const [loading, setLoading] = useState(true); 
  const [employee, setEmployee] = useState(null); 
  const navigate = useNavigate(); 


  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const data = await getEmployee(id); 
        setEmployee(data); 
        setLoading(false); 
      } catch (error) {
        console.error('Error fetching employee:', error);
        setLoading(false); 
      }
    };
    fetchEmployee();
  }, [id]);

 
  const handleUpdate = async (formData) => {
    try {
      await updateEmployee(id, formData); 
      navigate('/'); 
    } catch (error) {
      console.error('Error updating employee:', error);
    }
  };

  
  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
      </Box>
    );
  }

 
  return (
    <div>
      {employee && (
        <EmployeeForm initialValues={employee} onSubmit={handleUpdate} />
      )}
    </div>
  );
};

export default EditEmployee;
