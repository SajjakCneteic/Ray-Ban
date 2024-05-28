import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getCutomerOrdersNew } from '../../../action/cart';
import { Link } from 'react-router-dom';

const TableContainer = styled.div`
  width: 100%;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  margin: 10px auto;
  margin-bottom: 100px;
  @media (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  padding: 12px;
  text-align: left;
  background-color: #333;
  font-weight: bold;
  color:white;
`;

const Td = styled.td`
  padding: 12px;
  text-align: left;
 
`;

const Status = styled.span`
  color: white;
  background-color: #ff4d4f;
  padding: 4px 8px;
  border-radius: 4px;
`;

const Ellipsis = styled.td`
  cursor: pointer;
  text-decoration: underline;
  &:hover {
    text-decoration: none;
    Link{
      color: red;
    }
  }
`;

const CustomerInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const CustomerName = styled.span`
  font-weight: bold;
`;

const CustomerCompany = styled.span`
  color: #888;
`;

const CreatedAt = styled.div`
  display: flex;
  flex-direction: column;
`;

const CreatedDate = styled.span`
  font-weight: bold;
`;

const CreatedTime = styled.span`
  color: #888;
`;

const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #ffffff; /* Background color for even rows */
  }
  &:nth-child(odd) {
    background-color: #c8c8c8; /* Background color for odd rows */
  }
`

const Order = () => {
  const [data, setData] = useState([])
  const dispatch = useDispatch();
  const { newOrder } = useSelector((store) => store);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const orders = await dispatch(getCutomerOrdersNew());
        setData(orders) // Access the response data here
      } catch (error) {
        console.error('Error fetching customer orders:', error);
      }
    };

    fetchData();
  }, [dispatch]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.toLocaleDateString()} ${date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
  };
  console.log(data)
  return (
    <TableContainer>
      <Table>
        <thead>
          <tr>
            <Th>ID</Th>
            <Th>Product Name</Th>
            <Th>Total Amount</Th>
            <Th>Status</Th>
            <Th>Order Date</Th>
            <Th></Th>
          </tr>
        </thead>
        <tbody>
          {data?.orders?.map((data, index) =>

            <Tr>
              <Td>{data.orderId}</Td>
              <Td>
                <CustomerInfo>
                  <CustomerName>{data?.lines?.[0].productName}</CustomerName>
                </CustomerInfo>
              </Td>
              <Td>{data?.totalAmount}</Td>
              <Td><Status style={{ backgroundColor: `${data?.status == 'Delivered' ? 'green' : 'red'}` }}>{data?.status}</Status></Td>
              <Td>
                <CreatedAt>
                  <CreatedDate>{formatDate(data?.orderDate)}</CreatedDate>
                </CreatedAt>
              </Td>
              <Ellipsis><Link to={`/account/order/${data.orderId}`}>View Details</Link></Ellipsis>
            </Tr>
          )}
        </tbody>
      </Table>
    </TableContainer>
  );
}

export default Order;
