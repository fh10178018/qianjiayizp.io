import { Carousel } from "antd";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div``;
const ImBox = styled.div.attrs((props: { url: string }) => ({
  url: props.url,
}))`
  height: 100vh;
  width: 100vw;
  display: block;
  background: url(${(props) => props.url});
  background-position: center top;
  background-size: cover;
  background-repeat: no-repeat;
`;
const LargeScreenScroll = ({ carousel }) => (
  <Wrapper>
    <Carousel autoplay>
      {carousel.map((item, index) => (
        <div key={index}>
          <ImBox url={item.url} />
        </div>
      ))}
    </Carousel>
  </Wrapper>
);
export default LargeScreenScroll;
