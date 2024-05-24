import React, { useState } from "react";
import styled from "styled-components";
import { MdArrowForwardIos } from "react-icons/md";
import Carousel from "../../Carousel/Carousel";

export default function ProductDetails() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const mainImage = "https://india.ray-ban.com/media/catalog/product/0/r/0rx7236i_8368_6.png";
  const thumbnailImages = [
    "https://india.ray-ban.com/media/catalog/product/0/r/0rx7236i_8368_2.png",
    "https://india.ray-ban.com/media/catalog/product/0/r/0rx7236i_8368_3.png",
    "https://india.ray-ban.com/media/catalog/product/0/r/0rx7236i_8368_4.png",
    "https://india.ray-ban.com/media/catalog/product/0/r/0rx7236i_8368_5.png",
    "https://india.ray-ban.com/media/catalog/product/0/r/0rx7236i_8368_6.png"
  ];
  const faceShapeGuide = "https://india.ray-ban.com/pub/media/wysiwyg/Rb_PDP_opti/eyeglasses_faceshapeguide-min.jpg";

  return (
    <div>
      <div style={{ display: 'flex', marginLeft: '20px',alignItems:'center' }}>
        <div style={{ marginRight: '10px', textDecoration: 'underline',color:'#333' }}>
          Home 
        </div>
        <div style={{color:'#333' }}><MdArrowForwardIos /></div>
        <div style={{marginLeft:'10px',fontWeight:'bold'}}>ALICE</div>
      </div>
      <MainContainer>
        <LeftDiv>
          <MainImage>
            <img src={mainImage} alt="Main Product" />
          </MainImage>
          <ExtraImages>
            {thumbnailImages.map((image, index) => (
              <Thumbnail key={index}>
                <img src={image} alt={`Thumbnail ${index + 1}`} />
              </Thumbnail>
            ))}
          </ExtraImages>
          {/* Mobile view details show after main image */}
          <StickyContainer className="pricedetails">
            <ProductInfo>
              <ProductTitle>ALICE</ProductTitle>
              <ProductTagline>New Arrivals</ProductTagline>
            </ProductInfo>
            <SizeInfo>
              <div>SIZE:</div>
              <div className="sizes">50</div>
            </SizeInfo>
            <Guides>
              <GuideLink>Size Guide</GuideLink>
              <GuideLink>Face Guide</GuideLink>
            </Guides>
            <FrameDetails>
              <FrameDetailItem>FRAME Gold</FrameDetailItem>
              <FrameDetailItem>LENSES Gold</FrameDetailItem>
            </FrameDetails>
            <ColorInfo>
              <div>1 COLOR</div>
              <ColorThumbnail src={mainImage} alt="Color Option" />
            </ColorInfo>
            <Container>
              <InfoList>
                <InfoItem onClick={() => handleToggle(0)}>
                  <span>MANUFACTURING, PACKAGING AND IMPORT INFO</span>
                  <span>&gt;</span>
                  {activeIndex === 0 && <AccordionContent>Here is some information about manufacturing, packaging, and import.</AccordionContent>}
                </InfoItem>
                <InfoItem onClick={() => handleToggle(1)}>
                  <span>SIZE</span>
                  <span>&gt;</span>
                  {activeIndex === 1 && <AccordionContent>Here is some information about size.</AccordionContent>}
                </InfoItem>
                <InfoItem onClick={() => handleToggle(2)}>
                  <InfoIcon>
                    <img src="https://img.icons8.com/ios-filled/50/000000/delivery.png" alt="Fast Delivery Icon" width="24" height="24" />
                    <span>FAST DELIVERY</span>
                  </InfoIcon>
                  {activeIndex === 2 && <AccordionContent>Here is some information about fast delivery.</AccordionContent>}
                </InfoItem>
              </InfoList>
            </Container>
            <WidgetContainer >
              <PriceContainer>
                <MRP>MRP</MRP>
                <Price>₹5,990.00</Price>
                <TaxInfo>(incl. of all taxes)</TaxInfo>
              </PriceContainer>
              <AddToBagButton>ADD TO BAG</AddToBagButton>
            </WidgetContainer>
          </StickyContainer>
          {/* mobile view end */}
          <ImageGuide>
            <img src={faceShapeGuide} alt="Face Shape Guide" />
          </ImageGuide>
          <DetailsSection>
            <Title>PRODUCT DETAILS</Title>
            <Description>INJECTED UNISEX OPTICAL FRAME</Description>
            <SKU>SKU: 0RX7236I8368</SKU>

            <Section>
              <SectionPart>
                <SectionTitle>
                  <img src="https://india.ray-ban.com/pub/media/wysiwyg/frame-description-ico.svg" alt="Frame Icon" /> FRAME DESCRIPTION
                </SectionTitle>
                <Divider />
                <List>
                  <ListItem><strong>SHAPE</strong> Phantos</ListItem>
                  <ListItem><strong>FRAME COLOR</strong> Green</ListItem>
                  <ListItem><strong>TEMPLE COLOR</strong> Gold</ListItem>
                  <ListItem><strong>MATERIAL</strong> Nylon</ListItem>
                </List>
              </SectionPart>
              <SectionPart>
                <SectionTitle>
                  <img src="https://india.ray-ban.com/pub/media/wysiwyg/lens-info-ico.svg" alt="Lens Icon" /> LENS INFORMATION
                </SectionTitle>
                <Divider />
                <List>
                  <ListItem><strong>COLOR</strong> Demo Lens</ListItem>
                  <ListItem><strong>TREATMENT</strong> Not Defined</ListItem>
                  <ListItem><strong>MATERIAL</strong> Nylon</ListItem>
                </List>
              </SectionPart>
            </Section>

            <Section>
              <SectionPart>
                <SectionTitle>
                  <img src="https://india.ray-ban.com/pub/media/wysiwyg/pro-dimension-ico.svg" alt="Dimensions Icon" /> PRODUCT DIMENSIONS
                </SectionTitle>
                <Divider />
                {/* Add content here */}
              </SectionPart>
              <SectionPart>
                <SectionTitle>
                  <img src="https://india.ray-ban.com/pub/media/wysiwyg/fitting-ico.svg" alt="Fitting Icon" /> FITTING TBD
                </SectionTitle>
                <Divider />
                {/* Add content here */}
              </SectionPart>
            </Section>
          </DetailsSection>
        </LeftDiv>
        <RightDiv>
          <StickyContainer className="details">
            <ProductInfo>
              <ProductTitle>ALICE</ProductTitle>
              <ProductTagline>New Arrivals</ProductTagline>
            </ProductInfo>
            <SizeInfo >
              <div>SIZE:</div>
              <div className="sizes">50</div>
            </SizeInfo>
            <Guides>
              <GuideLink>Size Guide</GuideLink>
              <GuideLink>Face Guide</GuideLink>
            </Guides>
            <FrameDetails>
              <FrameDetailItem>FRAME Gold</FrameDetailItem>
              <FrameDetailItem>LENSES Gold</FrameDetailItem>
            </FrameDetails>
            <ColorInfo>
              <div>1 COLOR</div>
              <ColorThumbnail src={mainImage} alt="Color Option" />
            </ColorInfo>
            <Container>
              <InfoList>
                <InfoItem onClick={() => handleToggle(0)}>
                  <span>MANUFACTURING, PACKAGING AND IMPORT INFO</span>
                  <span>&gt;</span>
                  {activeIndex === 0 && <AccordionContent>Here is some information about manufacturing, packaging, and import.</AccordionContent>}
                </InfoItem>
                <InfoItem onClick={() => handleToggle(1)}>
                  <span>SIZE</span>
                  <span>&gt;</span>
                  {activeIndex === 1 && <AccordionContent>Here is some information about size.</AccordionContent>}
                </InfoItem>
                <InfoItem onClick={() => handleToggle(2)}>
                  <InfoIcon>
                    <img src="https://img.icons8.com/ios-filled/50/000000/delivery.png" alt="Fast Delivery Icon" width="24" height="24" />
                    <span>FAST DELIVERY</span>
                  </InfoIcon>
                  {activeIndex === 2 && <AccordionContent>Here is some information about fast delivery.</AccordionContent>}
                </InfoItem>
              </InfoList>
            </Container>
            <WidgetContainer>
              <PriceContainer>
                <MRP>MRP</MRP>
                <Price>₹5,990.00</Price>
                <TaxInfo>(incl. of all taxes)</TaxInfo>
              </PriceContainer>
              <AddToBagButton>ADD TO BAG</AddToBagButton>
            </WidgetContainer>
          </StickyContainer>
        </RightDiv>
      </MainContainer>
      <div><h1 style={{textAlign:'center',fontSize:'24px',fontWeight:'bold',margin:'20px 0',textDecoration:'underline'}}>YOU MAY ALSO LIKE</h1></div>
      <Carousel/>
    </div>
  );
}

const MainContainer = styled.div`
  display: flex;
  /* flex-wrap: wrap; */
  gap: 20px;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
    gap:5px;
    padding:5px;
    width:100%;
  }
`;

const LeftDiv = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow-y:auto;
  .pricedetails{
    display: none;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    gap:5px;
    padding:5px;
    width:100%;
    .pricedetails{
    display: block;
  }
  }
`;

const RightDiv = styled.div`
  width: 35%;
  position: relative;
  padding-left: 10px;
  @media(max-width: 768px){
    width: 100%;
    .details{
      display:none;
    }
  }
`;

const StickyContainer = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-height: calc(100vh - 20px);
  overflow-y: auto;

  @media (max-width: 768px) {
    position: static; /* Set position to static for smaller screens */
    gap: 5px;
    padding: 5px;
    width: 100%;
    max-height: none; /* Reset max-height for smaller screens */
  }
`;


const MainImage = styled.div`
  background-color: #f2f2f2;
  img {
    width: 100%;
    border-radius: 8px;
  }
`;

const ExtraImages = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;

  @media (max-width: 768px) {
    display: flex;
    gap: 5px;
    overflow-x:auto;
  }
`;

const Thumbnail = styled.div`
  flex: 0 0 80px;
  cursor: pointer;
  background-color: #f2f2f2;

  img {
    width: 100%;
    border-radius: 8px;
    transition: transform 0.3s;

    &:hover {
      transform: scale(1.05);
    }
  }
`;

const ImageGuide = styled.div`
  img {
    width: 100%;
    border-radius: 8px;
  }
`;

const DetailsSection = styled.div`
  h3 {
    margin-bottom: 10px;
  }

  div {
    margin-bottom: 5px;
  }
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
`;

const Description = styled.p`
  margin: 5px 0;
`;

const SKU = styled.p`
  margin: 5px 0;
  font-weight: bold;
`;

const Section = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const SectionPart = styled.div`
  width: 45%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const SectionTitle = styled.h3`
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: bold;

  img {
    margin-right: 10px;
  }
`;

const Divider = styled.div`
  border-top: 1px solid #000;
  margin: 10px 0;
`;

const List = styled.ul`
  list-style-type: disc;
  margin: 10px 0;
  padding-left: 20px;
`;

const ListItem = styled.li`
  margin: 5px 0;
`;

const ProductInfo = styled.div`
  text-align: start;
`;

const ProductTitle = styled.h3`
  margin: 0;
  font-weight: bold;
  font-size:24px;
`;

const ProductTagline = styled.p`
  margin: 0;
  color: red;
`;

const SizeInfo = styled.div`
  display: flex;
  flex-direction: column;
  .sizes{
    width:40px;
    color:blue;
    border: 2px solid gray;
    padding:5px;
    background-color: aliceblue;
  }
`;

const Guides = styled.div`
  display: flex;
  flex-direction: column;
`;

const GuideLink = styled.p`
  cursor: pointer;
  color: #1e1e1f;
  text-decoration: underline;
`;

const FrameDetails = styled.div`
  p {
    margin: 5px 0;
  }
`;

const FrameDetailItem = styled.p`
  margin: 5px 0;
`;

const ColorInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const ColorThumbnail = styled.img`
  width: 80px;
  background-color: #f2f2f2;
`;

const Container = styled.div`
`;

const InfoList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;

const InfoItem = styled.li`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    padding: 15px;
    border-top: 1px solid #ddd;
    font-weight: bold;
    cursor: pointer;

    &:last-child {
        border-bottom: none;
    }
`;

const InfoIcon = styled.div`
    display: flex;
    align-items: center;

    img {
        margin-right: 10px;
    }
`;

const AccordionContent = styled.div`
    margin-top: 10px;
    font-weight: normal;
    font-size: 14px;
    color: #555;
    width: 100%;
`;
const WidgetContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #f5f5f5;
  padding: 10px;
  @media(max-width: 768px){
    position:fixed;
    bottom:0;
    width:100%;
    padding:10px;
    margin-left:-15px;
  }
`;

const PriceContainer = styled.div`
  margin-right: auto;
`;

const MRP = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const Price = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const TaxInfo = styled.div`
  font-size: 14px;
`;

const AddToBagButton = styled.button`
  background-color: #e40000;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  border: none;
  cursor: pointer;
`;