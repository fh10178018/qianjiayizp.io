import React from "react";
import styled from "styled-components";
import homeModel from "../../model/home.json";
import LargeScreenScroll from "./LargeScreenScroll";

const Wrapper = styled.div``;

const Home: React.FC<any> = () => (
  <Wrapper>
    <LargeScreenScroll carousel={homeModel.carousel} />
  </Wrapper>
);
export default Home;
