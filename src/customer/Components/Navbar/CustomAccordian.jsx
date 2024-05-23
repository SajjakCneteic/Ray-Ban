import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../../Redux/Auth/Action';
import { FaSearch } from "react-icons/fa";
import { API_BASE_URL } from '../../../config/api';

const CustomAccordion = ({ drawer, setDrawer, sunglasses, eyeGlasses, pages }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const auth = useSelector(state => state.auth.auth);
  const dispatch = useDispatch();

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const datas = [
    { name: 'MY ACCOUNT', children: [{ name: 'LOGIN' }, { name: 'MY ORDERS' }, { name: 'MY STORE CREDIT' }, { name: 'MY SELECTIONS' }, { name: 'GIFT CARD BALANCE' }] },
    { name: 'SUNGLASSES',children:[] },
    { name: 'EYEGLASSES',children:[] },
    { name: 'NEW ARRIVALS',children:[] },
    { name: 'PRESCRIPTION',children:[] },
    { name: 'GIFT CARD',children:[] },
    { name: 'ORDER STATUS',children:[] },
    { name: 'PROMO',children:[] }
  ];

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <AccordionWrapper>
        {datas.map((item, index) => (
          <AccordionItem key={index}>
            <AccordionButton onClick={() => toggleAccordion(index)}>
              <div>{item.name}</div>
              <div>{openIndex === index ? '-' : '+'}</div>
            </AccordionButton>
            {item.children &&
            <AccordionContent isOpen={openIndex === index}>
              <NestedAccordionContent>
                {item.children && item.children.map((child, childIndex) => (
                  <NestedLink key={childIndex} to={`/${child.name.toLowerCase().replace(/ /g, '-')}`}>
                    {child.name}
                  </NestedLink>
                ))}
              </NestedAccordionContent>
            </AccordionContent>
            }
          </AccordionItem>
        ))}

        <AccordionItem>
          <AccordionButton>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Svg>
                <FrameIcon alt="" src="/frame.svg" />
              </Svg>
              <div style={{ marginLeft: '10px' }}>
                Delivery Country <a style={{ textDecoration: 'underline' }} href="#">Australia</a>
              </div>
            </div>
          </AccordionButton>
        </AccordionItem>
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
