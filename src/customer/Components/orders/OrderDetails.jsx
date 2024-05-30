import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { ordersById } from '../../../action';

import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import MapIcon from '@mui/icons-material/Map';
import MailIcon from '@mui/icons-material/Mail';
import FlagIcon from '@mui/icons-material/Flag';
import PhoneIcon from '@mui/icons-material/Phone';
import { FaUser, FaPhone, FaHome, FaMapMarkerAlt, FaGlobe } from 'react-icons/fa';
import AddressCard from '../adreess/AdreessCard';

const Container = styled.div`
    font-family: Arial, sans-serif;
    width: 90%;
    margin: auto;
    margin-top: 10px;
    padding: 20px;
    border: 1px solid #e0e0e0;
    border-radius: 8px;

    @media (max-width: 768px) {
        width: 100%;
        padding: 10px;
    }
`;

const BackLink = styled.p`
    text-decoration: none;
    color: #000;
    font-size: 14px;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;

const OrderTitle = styled.h1`
    font-size: 24px;
    margin-bottom: 5px;

    @media (max-width: 768px) {
        font-size: 20px;
    }
`;

const OrderDate = styled.span`
    font-size: 14px;
    color: #888;

    @media (max-width: 768px) {
        font-size: 12px;
    }
`;

const StatusBadge = styled.span`
    background-color: #E0E7FF;
    color: #ff6404;
    padding: 5px 10px;
    border-radius: 5px;
    margin-top: 10px;
    display: inline-block;
`;

const OrderProgress = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    padding: 20px 0;
    border-bottom: 1px solid #e0e0e0;

    @media (max-width: 768px) {
        flex-direction: row;
        padding: 10px 0;
    }
`;

const ProgressStep = styled.div`
    text-align: center;

    @media (max-width: 768px) {
        margin-bottom: 10px;
    }
`;

const ProgressCircle = styled.div`
    background-color: ${props => props.active ? '#fb0e0e' : '#e0e0e0'};
    color: ${props => props.active ? '#fff' : '#888'};
    width: 24px;
    height: 24px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
`;

const InputGroup = styled.div`
    margin-bottom: 10px;
    width: 100%;
`;

const Label = styled.label`
    font-size: 14px;
    color: #888;
`;

const Input = styled.input`
    width: 100%;
    padding: 10px;
    border: 1px solid #e0e0e0;
    border-radius: 5px;
    margin-top: 5px;
`;

const ItemSection = styled.div`
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    padding: 20px;
    margin-top: 20px;

    @media (max-width: 768px) {
        padding: 10px;
    }
`;

const Item = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    &:last-child {
        margin-bottom: 0;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
    }
`;

const ItemImage = styled.img`
    width: 180px;
    height: 100px;
    object-fit: cover;
    border-radius: 8px;
    margin-right: 20px;

    @media (max-width: 768px) {
        width: 100%;
        height: auto;
        margin-right: 0;
        margin-bottom: 10px;
    }
`;

const ItemDetails = styled.div`
    flex-grow: 1;
`;

const ItemTitle = styled.p`
    font-size: 14px;
    margin: 0;
`;

const ItemQuantity = styled.p`
    font-size: 14px;
    color: #888;
    margin: 0;
`;

const ItemPrice = styled.p`
    font-size: 14px;
    margin: 0;
`;

const Summary = styled.div`
    margin-top: 20px;
    padding: 20px;
    border-top: 1px solid #e0e0e0;

    @media (max-width: 768px) {
        padding: 10px;
    }
`;

// style={{ display: 'flex', gap: '20px', width: '100%', justifyContent: 'space-between', }}

const AddressCont = styled.div`
display: flex;
gap:20px;
width: 100%;
justify-content: space-between;
 @media(max-width: 768px){
  display: block;
  
}
`

const Div = styled.div`
@media(max-width: 768px){
  width:100%;
  margin-bottom:10px;
}
`

const SummaryRow = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    font-size: 14px;
    color: ${props => props.total ? '#000' : '#888'};
    font-weight: ${props => props.total ? 'bold' : 'normal'};
`;

const getStatusColor = (status) => {
  switch (status) {
    case 'Delivered':
      return '#4caf50';
    case 'Pending':
      return '#ff9800';
    case 'PaymentAuthorized':
      return '#008cff';
    case 'Cancelled':
      return '#f44336';
    default:
      return '#000';
  }
};

const OrderDetails = () => {
  const [data, setData] = useState({})
  const { orderId } = useParams()
  const dispatch = useDispatch()

  console.log(data)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const orders = await ordersById(orderId);
        setData(orders.data.order); // Access the response data here
      } catch (error) {
        console.error('Error fetching customer orders:', error);
      }
    };

    fetchData();
  }, [orderId]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.toLocaleDateString()} ${date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
  };

  return (
    <Container>
      <BackLink ><Link to='/account/order'> &larr; Orders</Link></BackLink>
      <OrderTitle>Order details #{data?.id}</OrderTitle>
      <OrderDate>Date: {formatDate(data?.orderPlacedAt)}</OrderDate>
      {/* <StatusBadge>SHIPPING</StatusBadge> */}
      <OrderProgress>
        <ProgressStep>
          <ProgressCircle active>{(data?.state==='PaymentAuthorized' || data?.state==='Delivered') ? '✔' : '1'}</ProgressCircle>
          <p>ORDER CONFIRMED</p>
          {/* <p>8:00 AM, Feb 8, 2023</p> */}
        </ProgressStep>
        <ProgressStep>
          <ProgressCircle active>{(data?.state==='PaymentAuthorized' || data?.state==='Delivered') ? '✔' : '2'}</ProgressCircle>

          <p>SHIPPING</p>
          {/* <p>Shipped with FedEX</p> */}
        </ProgressStep>
        <ProgressStep>
          <ProgressCircle active>{ data?.state==='Delivered' ? '✔' : '2'}</ProgressCircle>

          <p>TO DELIVER</p>
          {/* <p>Estimated date: Feb 15, 2023</p> */}
        </ProgressStep>
       
      </OrderProgress>

      <h2>Item ordered</h2>
      <ItemSection>
        {data?.lines?.map((el, index) =>
          <Item key={index}>
            <ItemImage src={el?.productVariant?.featuredAsset?.preview} alt="Item 1" />
            <ItemDetails>
              <ItemTitle>{el?.productVariant?.name}</ItemTitle>
            </ItemDetails>
            <ItemDetails>
              <ItemQuantity>{el?.quantity}</ItemQuantity>
            </ItemDetails>
            <ItemPrice>₹{el?.linePriceWithTax}.00</ItemPrice>
          </Item>
        )}
      </ItemSection>
      <Summary>
        <SummaryRow>
          <span>Product Total</span>
          <span>₹{data?.subTotalWithTax}.00</span>
        </SummaryRow>
        <SummaryRow>
          <span>Shipping cost</span>
          <span style={{ color: '#fc2008' }}>₹{data?.shippingWithTax}.00</span>
        </SummaryRow>
        <SummaryRow total>
          <span>Total</span>
          <span>₹{data?.totalWithTax}.00</span>
        </SummaryRow>
      </Summary>
      <AddressCont >
        <Div style={{ width: '100%',  }}>
          <AddressCard heading={"Shipping Address"} address={data?.shippingAddress} />
        </Div>
        <Div style={{ width: '100%',}}>
          <AddressCard heading={"Billing Address"} address={data?.billingAddress} />
        </Div>
      </AddressCont>
    </Container>
  );
};

export default OrderDetails;
