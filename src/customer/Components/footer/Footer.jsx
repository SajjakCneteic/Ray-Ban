import React from 'react';
import { MdKeyboardArrowUp } from "react-icons/md";
import styled from 'styled-components';
import SocialMedia from './SocialMedia';
import NewsLetter from './NewsLetter';

const FooterContainer = styled.div`
  background-color: #f8f8f8;
  text-align: center;
  font-family: Arial, sans-serif;
 
`;

const Container = styled.div`
   padding: 0 70px;
  max-width: 1200px;
  margin: 0 auto;
`;

const TopSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid #e0e0e0;
`;

const CountrySelector = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const CountryFlag = styled.img`
  width: 30px;
  height: 20px;
  margin-right: 10px;
`;

const Links = styled.div`
  display: flex;
  /* justify-content: flex-start; */
  /* flex-direction: column; */
  gap: 10px;
`;

const LinkItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;

  a {
    text-decoration: none;
    color: black;
    margin-right: 5px;
    &:hover {
      text-decoration: underline;
    }
  }

  svg {
    font-size: 18px;
  }
`;

const MiddleSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid #e0e0e0;
`;

const Guarantee = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;

`;

const GuaranteeIcon = styled.span`
  margin-right: 10px;
`;

const PaymentMethods = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;

`;

const PaymentIcon = styled.img`
  width: 50px;
  height: 30px;
`;

const BottomSection = styled.div`
  padding: 20px 0;
`;

const SecondSection = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  padding: 20px 0;
  border-bottom: 1px solid #e0e0e0;
`;

const Disclaimer = styled.p`
  font-size: 12px;
  color: #666;
  /* max-width: 600px; */
  margin: 20px auto;
  line-height: 1.4;
`;

const Copyright = styled.p`
  background-color: #666;
  color: white;
  padding: 10px 0;
  margin: 0;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <NewsLetter />
      <SocialMedia />
      <Container>
        <TopSection>
          <CountrySelector>
            <CountryFlag src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg" alt="India Flag" />
          </CountrySelector>
          <Links>
            <LinkItem>
              <a href="#">INDIA</a>
              <MdKeyboardArrowUp />
            </LinkItem>
            <LinkItem>
              <a href="#">HOW CAN WE HELP</a>
              <MdKeyboardArrowUp />
            </LinkItem>
            <LinkItem>
              <a href="#">CONTACT US</a>
              <MdKeyboardArrowUp />
            </LinkItem>
            <LinkItem>
              <a href="#">ORDER STATUS INQUIRY? - CLICK HERE!</a>
            </LinkItem>
          </Links>
        </TopSection>
        <SecondSection>
          <Links>
            <LinkItem>
              <a href="#">STORE LOCATOR</a>
            </LinkItem>
            <LinkItem>
              <a href="#">RETURNS / REFUND POLICY</a>
            </LinkItem>
            <LinkItem>
              <a href="#">LEGAL</a>
            </LinkItem>
            <LinkItem>
              <a href="#">CORPORATE SALE</a>
            </LinkItem>
          </Links>
        </SecondSection>
        <MiddleSection>
          <Guarantee>
            <GuaranteeIcon>🔒</GuaranteeIcon>
            <span>WE GUARANTEE EVERY TRANSACTION IS 100% SECURE</span>
          </Guarantee>
          <PaymentMethods>
            <PaymentIcon src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png" alt="MasterCard" />
            <PaymentIcon src="https://www.aexp-static.com/cdaas/one/statics/axp-static-assets/1.8.0/package/dist/img/logos/dls-logo-bluebox-solid.svg" alt="American Express" />
            <PaymentIcon src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" />
            <PaymentIcon src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Maestro_2016.svg/1200px-Maestro_2016.svg.png" alt="Maestro" />
            <PaymentIcon src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/PayU.svg/1200px-PayU.svg.png" alt="PayU" />
            <PaymentIcon src="https://w7.pngwing.com/pngs/827/101/png-transparent-paytm-logo-online-payment-brand-flat-icon.png" alt="Paytm" />
          </PaymentMethods>
        </MiddleSection>
        <BottomSection>
          <Disclaimer>
            Pictures and images on this website are for illustration purposes only. No qualities or characteristics of the products depicted herein could be inferred from the relevant pictures. Certain activities undertaken by Luxottica Group S.p.A. may be licensed under US Patent No. 6,624,843. Copyright ©2024 Luxottica Group S.p.A. - All Rights Reserved
          </Disclaimer>
        </BottomSection>
      </Container>
      <Copyright>
        Copyright ©2020 Luxottica group. All Rights Reserved
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
