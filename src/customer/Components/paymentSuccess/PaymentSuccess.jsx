import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled, { createGlobalStyle, keyframes } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const Card = styled.div`
  width: 100%;
  max-width: 350px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  text-align: center;
  margin: 20px auto;
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 600px) {
    padding: 15px;
  }
`;

const Title = styled.h2`
  color: #4CAF50;
  margin-bottom: 20px;
  font-size: 1.5em;

  @media (max-width: 600px) {
    font-size: 1.2em;
    margin-bottom: 15px;
  }
`;

const IconWrapper = styled.div`
  width: 100%;
  padding: 20px 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AnimationContainer = styled.div`
  animation: ${fadeIn} 1s ease-in-out;
`;

const Details = styled.div`
  text-align: left;
  margin-bottom: 20px;

  @media (max-width: 600px) {
    margin-bottom: 15px;
  }
`;

const Detail = styled.p`
  margin: 5px 0;
  color: #666;
  display: flex;
  justify-content: space-between;

  @media (max-width: 600px) {
    margin: 3px 0;
    font-size: 0.9em;
  }
`;

const BoldDetail = styled(Detail)`
  font-weight: bold;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-around;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  color: #fff;
  background-color: ${props => (props.primary ? '#2196F3' : '#f44336')};
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${props => (props.primary ? '#1976D2' : '#d32f2f')};
  }

  @media (max-width: 600px) {
    width: 100%;
    margin: 5px 0;
  }
`;

const PaymentSuccess = () => {
  const location = useLocation();
  const paymentsuccessdata = location.state;
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDetails(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <GlobalStyle />
      <Card>
        <Title>Payment successful!</Title>
        <IconWrapper>
          {!showDetails ? (
            <AnimationContainer>
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="green" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check-circle">
                <path d="M9 11l3 3L22 4"></path>
                <path d="M21 12v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-9"></path>
                <path d="M22 4L12 14 9 11 4 16"></path>
              </svg>
            </AnimationContainer>
          ) : (
            <img src="https://cdn-icons-png.flaticon.com/512/5709/5709755.png" alt="Success" />
          )}
        </IconWrapper>
        {showDetails && (
          <Details>
            <Detail>Payment type <span>{paymentsuccessdata?.paymentMethod}</span></Detail>
            <Detail>Mobile <span>{paymentsuccessdata?.mobile}</span></Detail>
            <BoldDetail>Amount paid <span>₹ {paymentsuccessdata?.totalAmount}</span></BoldDetail>
            <Detail>Transaction id <span>125478965698</span></Detail>
          </Details>
        )}
        <Buttons>
          <Button primary>PRINT</Button>
          <Button><Link to='/shops'>CLOSE</Link></Button>
        </Buttons>
      </Card>
    </>
  );
};

export default PaymentSuccess;
