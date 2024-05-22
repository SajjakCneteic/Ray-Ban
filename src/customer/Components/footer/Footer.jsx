import React from 'react';
import styled from 'styled-components';
import SocialMedia from './SocialMedia';
import NewsLetter from './NewsLetter';

const FooterContainer = styled.div`
  background-color: #f8f8f8;
  padding: 20px;
  text-align: center;
  font-family: Arial, sans-serif;
`;

const TopSection = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #e0e0e0;
`;

const CountrySelector = styled.div`
  display: flex;
  align-items: center;
`;

const CountryFlag = styled.img`
  width: 30px;
  height: 20px;
  margin-right: 10px;
`;

const Links = styled.div`
  display: flex;
  justify-content: space-around;
  width: 60%;
`;

const Link = styled.a`
  text-decoration: none;
  color: black;
  margin: 0 10px;
  &:hover {
    text-decoration: underline;
  }
`;

const MiddleSection = styled.div`
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

const BottomSection = styled.div`
  padding: 20px 0;
`;

const PaymentMethods = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

const PaymentIcon = styled.img`
  width: 50px;
  height: 30px;
  margin: 0 10px;
`;

const Disclaimer = styled.p`
  font-size: 12px;
  color: #666;
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
      <NewsLetter/>
      <SocialMedia/>
      <TopSection>
        <CountrySelector>
          <CountryFlag src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg" alt="India Flag" />
          <span>INDIA</span>
        </CountrySelector>
        <Links>
          <Link href="#">HOW CAN WE HELP</Link>
          <Link href="#">CONTACT US</Link>
          <Link href="#">ORDER STATUS INQUIRY? - CLICK HERE!</Link>
        </Links>
      </TopSection>
      <MiddleSection>
        <Guarantee>
          <GuaranteeIcon>🔒</GuaranteeIcon>
          <span>WE GUARANTEE EVERY TRANSACTION IS 100% SECURE</span>
        </Guarantee>
      </MiddleSection>
      <BottomSection>
        <Links>
          <Link href="#">STORE LOCATOR</Link>
          <Link href="#">RETURNS / REFUND POLICY</Link>
          <Link href="#">LEGAL</Link>
          <Link href="#">CORPORATE SALE</Link>
        </Links>
        <PaymentMethods>
          <PaymentIcon src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png" alt="MasterCard" />
          <PaymentIcon src="https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo_%282018%29.svg" alt="American Express" />
          <PaymentIcon src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" />
          <PaymentIcon src="https://upload.wikimedia.org/wikipedia/commons/4/44/Maestro_logo.svg" alt="Maestro" />
          <PaymentIcon src="https://upload.wikimedia.org/wikipedia/commons/4/4a/PayU_Logo.svg" alt="PayU" />
          <PaymentIcon src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Paytm_logo.png" alt="Paytm" />
        </PaymentMethods>
        <Disclaimer>
          Pictures and images on this website are for illustration purposes only. No qualities or characteristics of the products depicted herein could be inferred from the relevant pictures. Certain activities undertaken by Luxottica Group S.p.A. may be licensed under US Patent No. 6,624,843. Copyright ©2024 Luxottica Group S.p.A. - All Rights Reserved
        </Disclaimer>
      </BottomSection>
      <Copyright>
        Copyright ©2020 Luxottica group. All Rights Reserved
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
