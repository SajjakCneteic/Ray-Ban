import React, { useEffect, useState } from "react";
import HomeCarousel from "../customer/Components/Carousel/HomeCarousel";
import { homeCarouselData } from "../customer/Components/Carousel/HomeCaroselData";
import HomeProductSection from "../customer/Components/Home/HomeProductSection";
import { receiveGetContent, receiveProducts } from "../action";
import styled from "styled-components";
import Carousel from "../customer/Components/Carousel/Carousel";

const Homepage = () => {
  const [topProducts, setTopProducts] = useState();
  const [banners, setBanners] = useState()

  useEffect(() => {
    receiveProducts().then((data) => {
      setTopProducts(data.hits);
    });
  }, []);


  useEffect(() => {
    receiveGetContent().then((data) => {
      console.log("this is banners", data)
      setBanners(data);
    });
  }, []);

  //   console.log("this is landing page", topProducts);
  return (
    <MainContainer>
      <div className="firstbanner">
        <img src="https://india.ray-ban.com/media/wysiwyg/Banner_7__1.jpg" alt="" />
      </div>
      <div>
        <Carousel/>
      </div>
      <div style={{margin: '30px 0',textAlign:'center',fontSize:'23px',fontWeight:'800'}}>
        <h1>THIS IS WHAT DISRUPTION LOOKS LIKE</h1>
      </div>
      <div className="flexdiv">
        <div className="hover">
          <img src="https://india.ray-ban.com/media/wysiwyg/Item.jpg" alt="" />
        </div>
        <div className="hover">
          <img src="https://india.ray-ban.com/media/wysiwyg/Item1.jpg" alt="" />
        </div>
      </div>

      <div className="firstbanner">
        <img src="https://india.ray-ban.com/media/wysiwyg/home/Banner_4_.jpg" alt="" />
      </div>

    </MainContainer>
  );
};

export default Homepage;

const MainContainer = styled.div`
  width:100%;
.firstbanner{
  width:100%;
  img{
    height: 100%;
    width:100%
  }
}
.flexdiv {
  display: flex;
  /* gap: 20px; */
}

.flexdiv .hover {
  transition: filter 0.3s ease; /* Smooth transition for the hover effect */
}

.flexdiv .hover:hover {
  filter: brightness(0.8); /* Adjust the brightness to make the image slightly darker */
}

`