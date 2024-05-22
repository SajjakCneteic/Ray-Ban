import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

// Sample products data
const products = [
  { id: 1, name: 'Product 1', image: 'https://india.ray-ban.com/media/catalog/product/cache/ecdbd5a50e6b93b224fc4aacce3c4ac7/0/r/0rx7239_2012_6.png' },
  { id: 2, name: 'Product 2', image: 'https://india.ray-ban.com/media/catalog/product/cache/ecdbd5a50e6b93b224fc4aacce3c4ac7/0/r/0rx7239_2012_6.png' },
  { id: 3, name: 'Product 3', image: 'https://india.ray-ban.com/media/catalog/product/cache/ecdbd5a50e6b93b224fc4aacce3c4ac7/0/r/0rx7239_2012_6.png' },
  { id: 4, name: 'Product 4', image: 'https://india.ray-ban.com/media/catalog/product/cache/ecdbd5a50e6b93b224fc4aacce3c4ac7/0/r/0rx7239_2012_6.png' },
  { id: 5, name: 'Product 5', image: 'https://india.ray-ban.com/media/catalog/product/cache/ecdbd5a50e6b93b224fc4aacce3c4ac7/0/r/0rx7239_2012_6.png' },
  { id: 6, name: 'Product 6', image: 'https://india.ray-ban.com/media/catalog/product/cache/ecdbd5a50e6b93b224fc4aacce3c4ac7/0/r/0rx7239_2012_6.png' },
  { id: 7, name: 'Product 7', image: 'https://india.ray-ban.com/media/catalog/product/cache/ecdbd5a50e6b93b224fc4aacce3c4ac7/0/r/0rx7239_2012_6.png' },
  { id: 8, name: 'Product 8', image: 'https://india.ray-ban.com/media/catalog/product/cache/ecdbd5a50e6b93b224fc4aacce3c4ac7/0/r/0rx7239_2012_6.png' },
  { id: 9, name: 'Product 9', image: 'https://india.ray-ban.com/media/catalog/product/cache/ecdbd5a50e6b93b224fc4aacce3c4ac7/0/r/0rx7239_2012_6.png' },
  { id: 10, name: 'Product 10', image: 'https://india.ray-ban.com/media/catalog/product/cache/ecdbd5a50e6b93b224fc4aacce3c4ac7/0/r/0rx7239_2012_6.png' },
  { id: 11, name: 'Product 11', image: 'https://india.ray-ban.com/media/catalog/product/cache/ecdbd5a50e6b93b224fc4aacce3c4ac7/0/r/0rx7239_2012_6.png' },
];

const CarouselContainer = styled.div`
  width: 95%;
  margin: auto;
`;

const ProductCard = styled.div`
  padding: 30px;
  margin: 20px;  // Add margin here to create space between cards
  background-color: aliceblue;
  /* text-align: center; */
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);  // Add a slight shadow for better appearance
  border-radius: 8px;  // Add rounded corners
  img {
    width: 100%;
    height: auto;
    /* border-bottom: 1px solid #ccc;  // Add a border below the image */
    /* padding-bottom: 10px; */
  }
  p {
    margin: 5px 0;  // Add some margin to the text
  }
`;

const Arrow = styled.div`
  font-size: 2rem;
  color: black;
  cursor: pointer;
`;

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <Arrow className={className} style={{ ...style, left: '10px' }} onClick={onClick}>
      <MdKeyboardArrowLeft />
    </Arrow>
  );
};

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <Arrow className={className} style={{ ...style, right: '10px' }} onClick={onClick}>
      <MdKeyboardArrowRight />
    </Arrow>
  );
};

const Carousel = () => {
  const settings = {
    infinite: true,
    speed: 1500, // Duration of the scroll animation in milliseconds
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Delay between each auto scroll in milliseconds
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  return (
    <CarouselContainer>
      <Slider {...settings}>
        {products.map((product) => (
          <ProductCard key={product.id}>
            <img src={product.image} alt={product.name} />
            <p>{product.name}</p>
            <p>$2000.00</p>
          </ProductCard>
        ))}
      </Slider>
    </CarouselContainer>
  );
};

export default Carousel;
