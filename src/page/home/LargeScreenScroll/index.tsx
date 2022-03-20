import { Carousel } from "antd";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div``;
const Box = styled.div`
  height: 100vh;
  width: 100vw;
  color: #fff;
  background: rgb(228, 228, 228);
  font-size: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
`;
const LargeScreenScroll = () => (
  <Wrapper>
    <Carousel>
      <div>
        <Box>1</Box>
      </div>
      <div>
        <Box>2</Box>
      </div>
      <div>
        <Box>3</Box>
      </div>
      <div>
        <Box>4</Box>
      </div>
    </Carousel>
  </Wrapper>
);
export default LargeScreenScroll;
