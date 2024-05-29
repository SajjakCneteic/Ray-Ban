import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled, { createGlobalStyle, keyframes } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px;
  animation: ${fadeIn} 0.5s ease-in-out;
`;

const Section = styled.div`
  width: 100%;
  padding: 20px;
  @media (min-width: 768px) {
    width: 48%;
  }
`;

const ThankYou = styled.div`
  text-align: center;
  .successImage{
    display: flex;
    justify-content: center;
  }
  img {
    width: 100px;
    height: 100px;
    margin-bottom: 20px;
  }
  h1 {
    font-size: 24px;
    margin: 20px 0 10px;
  }
  p {
    margin: 5px 0;
  }
  a {
    color: #007bff;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const NewCollection = styled.div`
  img {
    width: 100%;
    height: auto;
    margin-top: 20px;
    border-radius: 10px;
  }
`;

const CreateAccount = styled.div`
  margin-top: 20px;
  h2 {
    font-size: 20px;
    margin-bottom: 10px;
  }
  input {
    width: calc(50% - 10px);
    padding: 10px;
    margin: 5px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  button {
    background-color: #8bc34a;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
      background-color: #7cb342;
    }
  }
`;

const ItemsOrdered = styled.div`
  margin-top: 20px;
  h2 {
    margin-bottom: 10px;
  }
  table {
    width: 100%;
    border-collapse: collapse;
    th, td {
      border: 1px solid #ccc;
      padding: 10px;
      text-align: left;
    }
    th {
      background-color: #f9f9f9;
    }
    tfoot td {
      text-align: right;
    }
  }
`;

const AddressInfo = styled.div`
  margin-top: 20px;
  .flex {
    border: 1px solid #ccc;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    border-radius: 5px;
    h3{
      font-weight: bold;
      font-size:18px;
    }
    .method{
      margin:0 auto;
    }
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
      <Container>
        <Section>
          <ThankYou>
            <div className='successImage'>
            <img src="https://cdn-icons-png.flaticon.com/512/5709/5709755.png" alt="Checkmark" />
            </div>
            <h1>THANK YOU FOR YOUR PURCHASE!</h1>
            <p>You will receive an order confirmation email with details of your order.</p>
            <p>Your order # is: 4000000005.</p>
            <Link to="/shops">Continue Shopping</Link>
          </ThankYou>
          <NewCollection>
            <img src="https://india.ray-ban.com/media/wysiwyg/Rb_sunglasses_clp_opti/07_RB_Sunglasses_Page_Bottom_Banner_Desktop.jpg" alt="New Collection" />
          </NewCollection>
          <CreateAccount>
            <h2>CREATE ACCOUNT FOR NEXT TIME</h2>
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm Password" />
            <button>Create Account</button>
          </CreateAccount>
        </Section>
        <Section>
          <ItemsOrdered>
            <h2>ITEMS ORDERED</h2>
            <table>
              <thead>
                <tr>
                  <th>Product Name</th>
                  <th>SKU</th>
                  <th>Price</th>
                  <th>Qty</th>
                  <th>Subtotal</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Jackie O Round Sunglasses</td>
                  <td>ace001</td>
                  <td>$225.00</td>
                  <td>Ordered: 1</td>
                  <td>$225.00</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan="4">Subtotal</td>
                  <td>$225.00</td>
                </tr>
                <tr>
                  <td colSpan="4">Shipping & Handling</td>
                  <td>$5.00</td>
                </tr>
                <tr>
                  <td colSpan="4">Grand Total</td>
                  <td>$230.00</td>
                </tr>
              </tfoot>
            </table>
          </ItemsOrdered>
          <AddressInfo>
            <div className='flex'>
              <div>
              <h3>Shipping Address</h3>
              <p>Drew France</p>
              <p>Lake view st</p>
              <p>Paris, Paris, 75008</p>
              <p>France</p>
              <p>T: 907-555-3209</p>
              </div>
            <div className='method'>
              <h3>Shipping Method</h3>
              <p>Flat Rate - Fixed</p>
            </div>
            </div>
            <div className='flex'>
              <div>
              <h3>Billing Address</h3>
              <p>Drew France</p>
              <p>Lake view st</p>
              <p>Paris, Paris, 75008</p>
              <p>France</p>
              <p>T: 907-555-3209</p>
              </div>
            <div className='method'>
              <h3>Payment Method</h3>
              <p>Cash On Delivery</p>
            </div>
            </div>
          </AddressInfo>
        </Section>
      </Container>
    </>
  );
};

export default PaymentSuccess;
