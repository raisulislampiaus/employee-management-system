// import React, { useState, useEffect } from 'react';
// import { TextField, Button, Grid, Paper } from '@mui/material';

// const EmployeeForm = ({ initialValues = null, onSubmit }) => {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     mobile: '',
//     dateOfBirth: '',
//     photo: null,
//   });

  
//   useEffect(() => {
//     if (initialValues) {
//       console.log('Initial Values:', initialValues); 
//       setFormData({
//         fullName: initialValues.fullName || '',
//         email: initialValues.email || '',
//         mobile: initialValues.mobile || '',
//         dateOfBirth: initialValues.dateOfBirth || '',
//         photo: null, 
//       });
//     }
//   }, [initialValues]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

  
//   const handleFileChange = (e) => {
//     setFormData({ ...formData, photo: e.target.files[0] });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const submitData = new FormData();
//     submitData.append('fullName', formData.fullName);
//     submitData.append('email', formData.email);
//     submitData.append('mobile', formData.mobile);
//     submitData.append('dateOfBirth', formData.dateOfBirth);

//     if (formData.photo) {
//       submitData.append('photo', formData.photo);
//     }

//     onSubmit(submitData);
//   };

//   return (
//     <Grid container justifyContent="center">
//       <Grid item xs={12} sm={8} md={6}>
//         <Paper style={{ padding: '20px' }}>
//           <form onSubmit={handleSubmit} encType="multipart/form-data">
//             <TextField
//               fullWidth
//               margin="normal"
//               label="Full Name"
//               name="fullName"
//               value={formData.fullName}
//               onChange={handleInputChange}
//               required
//             />
//             <TextField
//               fullWidth
//               margin="normal"
//               label="Email"
//               name="email"
//               value={formData.email}
//               onChange={handleInputChange}
//               required
//             />
//             <TextField
//               fullWidth
//               margin="normal"
//               label="Mobile"
//               name="mobile"
//               value={formData.mobile}
//               onChange={handleInputChange}
//               required
//             />
//             <TextField
//               fullWidth
//               margin="normal"
//               label="Date of Birth"
//               name="dateOfBirth"
//               type="date"
//               value={formData.dateOfBirth}
//               onChange={handleInputChange}
//               InputLabelProps={{ shrink: true }}
//               required
//             />
//             <input
//               accept="image/*"
//               type="file"
//               onChange={handleFileChange}
//               style={{ marginTop: '20px' }}
//             />
//             <Button type="submit" variant="contained" color="primary" style={{ marginTop: '20px' }}>
//               {initialValues ? 'Update Employee' : 'Add Employee'}
//             </Button>
//           </form>
//         </Paper>
//       </Grid>
//     </Grid>
//   );
// };

// export default EmployeeForm;
import React, { useState, useEffect } from 'react';
import { TextField, Button, Grid, Paper } from '@mui/material';

const EmployeeForm = ({ initialValues = null, onSubmit }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    dateOfBirth: '',
    photo: null,
  });

  useEffect(() => {
    if (initialValues) {
      console.log('Initial Values:', initialValues); 
      // Ensure the date format is correct
      const formattedDateOfBirth = initialValues.dateOfBirth ? new Date(initialValues.dateOfBirth).toISOString().split('T')[0] : '';
      setFormData({
        fullName: initialValues.fullName || '',
        email: initialValues.email || '',
        mobile: initialValues.mobile || '',
        dateOfBirth: formattedDateOfBirth,
        photo: null, 
      });
    }
  }, [initialValues]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, photo: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const submitData = new FormData();
    submitData.append('fullName', formData.fullName);
    submitData.append('email', formData.email);
    submitData.append('mobile', formData.mobile);
    submitData.append('dateOfBirth', formData.dateOfBirth);

    if (formData.photo) {
      submitData.append('photo', formData.photo);
    }

    onSubmit(submitData);
  };

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} sm={8} md={6}>
        <Paper style={{ padding: '20px' }}>
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <TextField
              fullWidth
              margin="normal"
              label="Full Name"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              required
            />
            <TextField
              fullWidth
              margin="normal"
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <TextField
              fullWidth
              margin="normal"
              label="Mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleInputChange}
              required
            />
            <TextField
              fullWidth
              margin="normal"
              label="Date of Birth"
              name="dateOfBirth"
              type="date"
              value={formData.dateOfBirth}
              onChange={handleInputChange}
              InputLabelProps={{ shrink: true }}
              required
            />
            <input
              accept="image/*"
              type="file"
              onChange={handleFileChange}
              style={{ marginTop: '20px' }}
            />
            <Button type="submit" variant="contained" color="primary" style={{ marginTop: '20px' }}>
              {initialValues ? 'Update Employee' : 'Add Employee'}
            </Button>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default EmployeeForm;
