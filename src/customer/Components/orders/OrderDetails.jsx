import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { ordersById } from '../../../action';

const Container = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  font-family: 'Arial', sans-serif;

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const Section = styled.div`
  margin-bottom: 20px;
`;

const Title = styled.h2`
  margin-bottom: 10px;
  font-size: 2em;

  @media (max-width: 600px) {
    font-size: 1.5em;
  }
`;

const SubTitle = styled.h3`
  margin-bottom: 10px;
  font-size: 1.5em;

  @media (max-width: 600px) {
    font-size: 1.2em;
  }
`;

const Text = styled.p`
  margin: 5px 0;
  font-size: 1.1em;
`;

const Status = styled.span`
  color: white;
  background-color: ${props => props.statusColor || '#000'};
  padding: 4px 8px;
  border-radius: 4px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  margin: 16px 0;
  overflow: hidden;

  @media (min-width: 600px) {
    flex-direction: row;
  }
`;

const CardImage = styled.img`
  max-width: 40%;
  height: auto;


`;

const CardContent = styled.div`
  padding: 16px;
  flex: 1;
`;

const CardTitle = styled.h2`
  font-size: 1.5em;
  margin-bottom: 8px;
`;

const CardText = styled.p`
  font-size: 1em;
  margin-bottom: 8px;
`;

const CardPrice = styled.div`
  font-size: 1.2em;
  margin-bottom: 4px;
`;

const CardQuantity = styled.div`
  font-size: 1.2em;
  margin-bottom: 4px;
`;

const CardTotal = styled.div`
  font-size: 1.2em;
  margin-bottom: 4px;
`;

const getStatusColor = (status) => {
  switch (status) {
    case 'PaymentSettled':
      return '#4caf50';
    case 'Pending':
      return '#ff9800';
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
      <Section>
        <Title>Order Details</Title>
        <Text><strong>Order ID:</strong> {data?.code}</Text>
        <Text><strong>Sku:</strong> {data?.lines?.[0]?.productVariant?.sku}</Text>
        {/* <Text><strong>Order Date:</strong> {formatDate(data?.orderDate)}</Text> */}
        <Text><strong>Quantity:</strong> {data?.lines?.[0]?.quantity}</Text>
        <Text><strong>Total Amount:</strong>  {data?.totalWithTax}</Text>
        <Text><strong>Status:</strong> <Status statusColor={getStatusColor(data.state)}>{data.state}</Status></Text>
      </Section>

      <Card>
        <CardImage src={data?.lines?.[0]?.productVariant?.product?.featuredAsset?.preview}  />
        <CardContent>
          <CardTitle>{data?.lines?.[0]?.productVariant?.name}</CardTitle>
          <CardPrice>Price: {data?.lines?.[0]?.productVariant?.price}</CardPrice>
          {/* <CardQuantity>Quantity: {order.product.quantity}</CardQuantity>
          <CardTotal>Total: INR {order.product.total}</CardTotal> */}
        </CardContent>
      </Card>

      <Section>
        <SubTitle>Shipping Information</SubTitle>
        {/* <Text><strong>Name:</strong> {order.shipping.name}</Text>
        <Text><strong>Phone:</strong> {order.shipping.phone}</Text> */}
        <Text><strong>Address:</strong> {data?.shippingAddress?.company}</Text>
      </Section>
    </Container>
  );
};

export default OrderDetails;
