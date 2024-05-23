import React from 'react';
import styled from 'styled-components';
import { FaEnvelope } from 'react-icons/fa';

const Container = styled.div`
  width: 100%;
  background-color: #333;
  color: #fff;
  padding: 50px 100px;
  text-align: center;
  @media (max-width: 600px) {
    padding: 20px;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const IconTextWrapper = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 600px) {
    justify-content: center;
    margin-bottom: 20px;
  }
`;

const Icon = styled.div`
  display: inline-block;
  vertical-align: middle;
  margin-right: 10px;
  font-size: 24px;
`;

const Text = styled.div`
  display: inline-block;
  vertical-align: middle;
  font-size: 18px;
  font-weight: bold;
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  @media (max-width: 600px) {
    flex-direction: column;
    width: 100%;
  }
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #000;
  color: #000;
  border-radius: 4px 0 0 4px;
  outline: none;
  @media (max-width: 600px) {
    width: 100%;
    border-radius: 4px;
    margin-bottom: 10px;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  border: 1px solid #000;
  border-left: none;
  display:flex-box;
  background-color: #000;
  color: #fff;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  outline: none;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #555;
  }
  @media (max-width: 600px) {
    width: calc(100% - 20px);
    border-radius: 4px;
    border-left: 1px solid #000;
  }
`;

const Disclaimer = styled.p`
  font-size: 12px;
  padding: 0 20px;
  margin-top: 30px;
  color: #ccc;
  text-align: start;
  @media (max-width: 1000px) {
    padding: 0;
    margin-top: 10px;
  }
  @media (max-width: 600px) {
    padding: 0 20px;
    display: none;
  }
`;

const NewsLetter = () => {
  return (
    <Container>
      <Content>
        <IconTextWrapper>
          <Icon><FaEnvelope /></Icon>
          <Text>SIGN UP TO OUR MAILING LIST TO STAY ONE STEP AHEAD.</Text>
        </IconTextWrapper>
        <Form>
          <Input type="email" placeholder="Enter your email address" />
          <Button type="submit">SIGN UP</Button>
        </Form>
      </Content>
      <Disclaimer>
        By clicking sign up, I confirm that I am over 18 years old and I agree that my email address can be used by Luxottica S.p.A. to send me exclusive offers, contents, news and other marketing communication as a member of the Ray-Ban (visit <a href="#" style={{ color: '#fff' }}>Privacy Policy</a> for further information).
      </Disclaimer>
    </Container>
  );
};

export default NewsLetter;
