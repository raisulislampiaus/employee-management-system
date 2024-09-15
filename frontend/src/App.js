import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Employees from './pages/Employees';
import AddEmployee from './pages/AddEmployee';
import Sidebar from './components/Sidebar';
import EditEmployee from './pages/EditEmployee'
import { CssBaseline, Box } from '@mui/material';

const App = () => {
  return (
    <Router>
      
      
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Routes>
            <Route path="/" element={<Employees />} />
            <Route path="/add-employee" element={<AddEmployee />} />
            <Route path="/edit-employee/:id" element={<EditEmployee />} />
          </Routes>
        </Box>
     
    </Router>
  );
};

export default App;
