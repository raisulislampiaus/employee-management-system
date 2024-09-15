import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EmployeeForm from '../components/EmployeeForm';
import { createEmployee } from '../services/employeeService';
import Loader from '../components/Loader'; 

const AddEmployee = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleAddEmployee = async (employeeData) => {
    setLoading(true); 
    try {
      await createEmployee(employeeData);
      navigate('/');  
    } catch (error) {
      console.error('Error adding employee:', error);
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <EmployeeForm onSubmit={handleAddEmployee} />
      )}
    </div>
  );
};

export default AddEmployee;
