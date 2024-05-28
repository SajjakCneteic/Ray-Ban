import { Box, Typography, Button, Checkbox, FormControlLabel, Modal, TextField } from '@mui/material';
import { useState } from 'react';

const EditAddressModal = ({ open, onClose, addressData, onSave }) => {
    const [formData, setFormData] = useState(addressData);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSave = () => {
      onSave(formData);
      onClose();
    };
  
    return (
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="edit-address-modal"
        aria-describedby="edit-address-details"
      >
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', bgcolor: 'background.paper', boxShadow: 24, p: 4, minWidth: 400 }}>
          <Typography variant="h6" component="h2" gutterBottom>
            Edit Address
          </Typography>
          <TextField
            name="firstName"
            label="First Name"
            value={formData.firstName}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="lastName"
            label="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="streetLine1"
            label="Street Line 1"
            value={formData.streetLine1}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="streetLine2"
            label="Street Line 2"
            value={formData.streetLine2}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="city"
            label="City"
            value={formData.city}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="postalCode"
            label="Postal Code"
            value={formData.postalCode}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="countryCode"
            label="Country Code"
            value={formData.countryCode}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="phoneNumber"
            label="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          {/* Add any other fields as needed */}
          <Button onClick={handleSave} variant="contained" sx={{ mt: 2 }}>
            Save
          </Button>
        </Box>
      </Modal>
    );
  };
  export default EditAddressModal;
  