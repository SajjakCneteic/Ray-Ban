import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  padding: 20px;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Sidebar = styled.div`
  width: 100%;
  border: 1px solid #ddd;
  padding: 10px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    width: 200px;
    margin-bottom: 0;
  }
`;

const SidebarList = styled.ul`
  list-style: none;
  padding: 0;
`;

const SidebarItem = styled.li`
  padding: 10px 0;
  cursor: pointer;

  &.active {
    font-weight: bold;
    border-left: 4px solid red;
    padding-left: 6px;
  }

  &:hover {
    background-color: #f0f0f0;
  }
`;

const Content = styled.div`
  flex-grow: 1;
  padding-left: 0;

  @media (min-width: 768px) {
    padding-left: 20px;
  }
`;

const Section = styled.section`
  margin-bottom: 20px;
`;

const Heading = styled.h2`
  margin-top: 0;
`;

const SubHeading = styled.h3`
  margin-bottom: 5px;
`;

const Paragraph = styled.p`
  margin: 5px 0;
`;

const Link = styled.a`
  color: #007bff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export default function Profile() {
  return (
    <Container>
      <Sidebar>
        <SidebarList>
          <SidebarItem className="active">My Account</SidebarItem>
          <SidebarItem>My Orders</SidebarItem>
          <SidebarItem>My Wish List</SidebarItem>
          <SidebarItem>Address Book</SidebarItem>
          <SidebarItem>Store Credit & Refunds</SidebarItem>
          <SidebarItem>My RMA Requests</SidebarItem>
        </SidebarList>
      </Sidebar>
      <Content>
        <Heading>MY ACCOUNT</Heading>
        <Section>
          <SubHeading>Account Information</SubHeading>
        </Section>
        <Section>
          <SubHeading>Contact Information</SubHeading>
          <Paragraph>Sajjak Ali</Paragraph>
          <Paragraph>sajjak2506@gmail.com</Paragraph>
        </Section>
        <Section>
          <SubHeading>Address Book <Link href="#">Manage Addresses</Link></SubHeading>
        </Section>
        <Section>
          <SubHeading>Default Billing Address</SubHeading>
          <Paragraph>You have not set a default billing address.</Paragraph>
          <Link href="#">EDIT ADDRESS</Link>
        </Section>
        <Section>
          <SubHeading>Default Shipping Address</SubHeading>
          <Paragraph>You have not set a default shipping address.</Paragraph>
          <Link href="#">EDIT ADDRESS</Link>
        </Section>
      </Content>
    </Container>
  );
}
