import axios from 'axios';

const API_URL = 'http://localhost:5000/api/employees'; // Adjust this according to your API URL








export const createEmployee = async (employee) => {
  const response = await axios.post(API_URL, employee);
  return response.data;
};

export const getEmployee = async (id) => {
    try {
      const response = await axios.get(`${API_URL}/${id}`);
      return response.data;  // Return the data for the single employee
    } catch (error) {
      console.error(`Error fetching employee with id ${id}`, error);
      throw error;
    }
};
export const updateEmployee = async (id, employee) => {
  const response = await axios.put(`${API_URL}/${id}`, employee);
  return response.data;
};

export const deleteEmployee = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};




