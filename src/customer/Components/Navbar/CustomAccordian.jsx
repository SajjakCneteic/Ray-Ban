import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../../Redux/Auth/Action';
import { FaSearch } from "react-icons/fa";
import { API_BASE_URL } from '../../../config/api';
import OpenSunglasses from './OpenSunglasses';

const CustomAccordion = ({ drawer, setDrawer, sunglasses, eyeGlasses, pages }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const auth = useSelector(state => state.auth.auth);
  const dispatch = useDispatch();

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
console.log(sunglasses,"sunglasses",eyeGlasses)
  const datas = [
    { name: 'MY ACCOUNT', children: [{ name: 'LOGIN' ,address:'/sign-in'}, { name: 'MY ORDERS' }, { name: 'MY STORE CREDIT' }, { name: 'MY SELECTIONS' }, { name: 'GIFT CARD BALANCE' }] },
    { name: 'SUNGLASSES' ,component:OpenSunglasses,data:sunglasses},
    { name: 'EYEGLASSES',component:OpenSunglasses, data:eyeGlasses},
    { name: 'NEW ARRIVALS' },
    // { name: 'PRESCRIPTION' },
    // { name: 'GIFT CARD' },
    { name: 'ORDER STATUS' },
    { name: 'PROMO', }
  ];

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <AccordionWrapper>
        {datas.map((item, index) => (
          <AccordionItem key={index}>
            <AccordionButton onClick={() => toggleAccordion(index)}>
              <div>{item.name}</div>
              {(item.children || item.component) && (
  <div>{openIndex === index ? '-' : '+'}</div>
)}
            </AccordionButton>
            {item.component && openIndex === index && <item.component data={item.data}/>}
            {item.children && openIndex === index && (
              <AccordionContent isOpen={openIndex === index}>
                <NestedAccordionContent>
                  {item.children.map((child, childIndex) => (
                    <Link to={child.address}>
                    <NestedLink key={childIndex} >
                      {child.name}
                    </NestedLink>
                    </Link>
                  ))}
                </NestedAccordionContent>
              </AccordionContent>
            )}
          </AccordionItem>
        ))}

      </AccordionWrapper>
    </div>
  );
};

export default CustomAccordion;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const AccordionWrapper = styled.div`
  width: 100%;
  z-index: 20;
`;

const AccordionItem = styled.div`
  border: 1px solid #f0f0f0;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
`;

const AccordionButton = styled.button`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: #f9f9f9;
  border: none;
  padding: 15px 20px;
  text-align: left;
  cursor: pointer;
  outline: none;
  border-radius: 5px 5px 0 0;
  transition: background-color 0.3s;

  &:hover {
    background-color: #eaeaea;
  }

  div {
    font-size: 16px;
    color: #333;
    font-weight: bold;
  }
`;

const AccordionContent = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  animation: ${fadeIn} 0.5s ease;
  border-top: 1px solid #f0f0f0;
  border-radius: 0 0 5px 5px;
  padding: 15px 20px;
`;

const NestedAccordionContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const NestedLink = styled(Link)`
  display: block;
  text-decoration: none;
  color: #333;
  padding: 10px;
  background-color: #ffffff;
  border-bottom: 1px solid #f0f0f0;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f9f9f9;
  }
`;

const FrameIcon = styled.img`
  width: 25px;
  height: 20px;
  flex: 1;
  position: relative;
  max-height: 100%;
`;

const Svg = styled.div`
  width: 25px;
  height: 20px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
