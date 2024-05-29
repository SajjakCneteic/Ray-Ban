import React from "react";
import { Card, CardContent, Typography, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import MapIcon from '@mui/icons-material/Map';
import MailIcon from '@mui/icons-material/Mail';
import FlagIcon from '@mui/icons-material/Flag';
import PhoneIcon from '@mui/icons-material/Phone';

const AddressCard = ({ addressData }) => {
  return (
    <Card variant="outlined" sx={{ margin: '1rem 0', padding: '1rem' }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Address Details
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary={`${addressData?.firstName} ${addressData?.lastName}`} secondary="Name" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary={`${addressData?.streetLine1}, ${addressData?.streetLine2}`} secondary="Street" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <LocationCityIcon />
            </ListItemIcon>
            <ListItemText primary={addressData?.city} secondary="City" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <MapIcon />
            </ListItemIcon>
            <ListItemText primary={addressData?.state} secondary="State" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary={addressData?.postalCode} secondary="Postal Code" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <FlagIcon />
            </ListItemIcon>
            <ListItemText primary={addressData?.countryCode} secondary="Country" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <PhoneIcon />
            </ListItemIcon>
            <ListItemText primary={addressData?.phoneNumber} secondary="Phone" />
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
};

export default AddressCard;
