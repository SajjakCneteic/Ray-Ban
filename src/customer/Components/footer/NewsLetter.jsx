import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width:100%;
  background-color: #333;
  color: #fff;
  padding: 20px;
  text-align: center;
`;

const Icon = styled.div`
  display: inline-block;
  vertical-align: middle;
  margin-right: 10px;
`;

const Text = styled.div`
  display: inline-block;
  vertical-align: middle;
  font-size: 18px;
  font-weight: bold;
`;

const Form = styled.form`
  display: inline-block;
  vertical-align: middle;
  margin-left: 20px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #000;
  color:#000;
  border-radius: 4px 0 0 4px;
  outline: none;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  border: 1px solid #000;
  border-left: none;
  background-color: #000;
  color: #fff;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  outline: none;
`;

const Disclaimer = styled.p`
  font-size: 12px;
  margin-top: 10px;
  color: #ccc;
`;

const NewsLetter = () => {
  return (
    <Container>
      <Icon>📧</Icon>
      <Text>SIGN UP TO OUR MAILING LIST TO STAY ONE STEP AHEAD.</Text>
      <Form>
        <Input type="email" placeholder="Enter your email address" />
        <Button type="submit">SIGN UP</Button>
      </Form>
      <Disclaimer>
        By clicking sign up, I confirm that I am over 18 years old and I agree that my email address can be used by Luxottica S.p.A. to send me exclusive offers, contents, news and other marketing communication as a member of the Ray-Ban (visit <a href="#" style={{ color: '#fff' }}>Privacy Policy</a> for further information).
      </Disclaimer>
    </Container>
  );
};

export default NewsLetter;
