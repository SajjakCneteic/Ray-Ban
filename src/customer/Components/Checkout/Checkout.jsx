import React, { useState, useEffect } from "react";
import { Box, Stepper, Step, StepLabel, CircularProgress, Button, Typography } from '@mui/material';
import { CheckCircle, CircleOutlined } from '@mui/icons-material/';
import { motion } from 'framer-motion';
import { useLocation, useNavigate } from "react-router-dom";
import AddDeliveryAddressForm from "./ShippingAddressForm";
import PaymentMethod from "./PaymentMethod";

const steps = ['Shipping', 'Review & Payments'];

export default function Checkout() {
  const [activeStep, setActiveStep] = useState(0);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const step = parseInt(queryParams.get('step'), 10) || 0;
  const navigate = useNavigate();

  useEffect(() => {
    setActiveStep(step);
  }, [step]);

  const handleNext = () => {
    const nextStep = activeStep + 1;
    setActiveStep(nextStep);
    navigate(`/checkout?step=${nextStep}`);
  };

  const handleBack = () => {
    const prevStep = activeStep - 1;
    setActiveStep(prevStep);
    navigate(`/checkout?step=${prevStep}`);
  };

  const handleReset = () => {
    setActiveStep(0);
    navigate('/checkout?step=0');
  };

  return (
    <Box className="px-5 lg:px-8" sx={{ width: "100%" }}>
      <Stepper alternativeLabel activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel
              StepIconComponent={(props) =>
                activeStep > index ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <CheckCircle color="secondary" style={{ fontSize: 30 }} />
                  </motion.div>
                ) : index === activeStep ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <CircularProgress color="secondary" size={30} />
                  </motion.div>
                ) : (
                  <CircleOutlined
                    sx={{
                      color: 'rgba(0,0,0,0.26)',
                      transition: 'color 0.3s ease',
                      '&:hover': {
                        color: 'red',
                      },
                    }}
                    style={{ fontSize: 30 }}
                  />
                )
              }
            >
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
          </Box>
          <div className="w-[100%]">
            {activeStep === 0 ? (
              <AddDeliveryAddressForm handleNext={handleNext} />
            ) : (
              <PaymentMethod handleNext={handleNext} />
            )}
          </div>
        </React.Fragment>
      )}
    </Box>
  );
}
