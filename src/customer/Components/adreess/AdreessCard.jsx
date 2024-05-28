import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const AddressCard = ({ addressData }) => {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Address Details
        </Typography>
        <Typography variant="body1" component="p">
          <strong>Name:</strong> {addressData?.firstName} {addressData?.lastName}
        </Typography>
        <Typography variant="body1" component="p">
          <strong>Street:</strong> {addressData?.streetLine1}, {addressData?.streetLine2}
        </Typography>
        <Typography variant="body1" component="p">
          <strong>City:</strong> {addressData?.city}
        </Typography>
        <Typography variant="body1" component="p">
          <strong>State:</strong> {addressData?.state}
        </Typography>
        <Typography variant="body1" component="p">
          <strong>Postal Code:</strong> {addressData?.postalCode}
        </Typography>
        <Typography variant="body1" component="p">
          <strong>Country:</strong> {addressData?.countryCode}
        </Typography>
        <Typography variant="body1" component="p">
          <strong>Phone:</strong> {addressData?.phoneNumber}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default AddressCard;
