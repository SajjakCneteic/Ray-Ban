import React from 'react';
import { Link } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
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

const Icon = styled.div`
 width:100%;
 padding:20px 100px;
 img{
  width:100%;
 }
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
  return (
    <>
      <GlobalStyle />
      <Card>
        <Title>Payment successful!</Title>
        <Icon><img src="https://cdn-icons-png.flaticon.com/512/5709/5709755.png" alt="" /></Icon>
        <Details>
          <Detail>Payment type <span>Net banking</span></Detail>
          <Detail>Bank <span>HDFC</span></Detail>
          <Detail>Mobile <span>8897131444</span></Detail>
          <Detail>Email <span>example@example.com</span></Detail>
          <BoldDetail>Amount paid <span>500.00</span></BoldDetail>
          <Detail>Transaction id <span>125478965698</span></Detail>
        </Details>
        <Buttons>
          <Button primary>PRINT</Button>
          <Button> <Link to='/shops'> CLOSE</Link></Button>
        </Buttons>
      </Card>
    </>
  );
}

export default PaymentSuccess;
