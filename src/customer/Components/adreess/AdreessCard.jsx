import React from "react";
import { Box, Typography, Paper, Divider, Grid } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import HomeIcon from "@mui/icons-material/Home";

const AddressCard = ({ address }) => {
  const {
   
    
    phoneNumber,
    streetLine1,
    streetLine2,
    city,
    province,
    postalCode,
    country,
  } = address || {};

  return (
    <Paper elevation={5} sx={{ padding: 3, borderRadius: 2 }}>
      <Typography variant="h6" component="h1" sx={{ fontWeight: "bold", pb: 2 }}>
        Delivery Address
      </Typography>
      <Divider sx={{ mb: 2 }} />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="body1" component="p" sx={{ fontWeight: "bold" }}>
            {address?.fullName || `${address?.firstName }  ${address?.lastName }` || "N/A"}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <HomeIcon sx={{ mr: 1, color: "gray" }} />
            <Box>
              <Typography variant="body1" component="p" sx={{ fontWeight: "bold" }}>
                Address
              </Typography>
              <Typography variant="body2" component="p">
                {streetLine1 || "N/A"}
              </Typography>
              {streetLine2 && (
                <Typography variant="body2" component="p">
                  {streetLine2}
                </Typography>
              )}
              <Typography variant="body2" component="p">
                {`${city || "N/A"}, ${province || "Maharashtra"} ${postalCode || "N/A"}`}
              </Typography>
              <Typography variant="body2" component="p">
                {country || "India"}
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <PhoneIcon sx={{ mr: 1, color: "gray" }} />
            <Box>
              <Typography variant="body1" component="p" sx={{ fontWeight: "bold" }}>
                Phone Number
              </Typography>
              <Typography variant="body2" component="p">
                {phoneNumber || "N/A"}
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default AddressCard;
