import { Popover } from "antd";
import React from "react";
import { Map, Marker } from "react-amap";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 300px;
  height: 300px;
`;

const MapIcon = styled.div`
  background: url("http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/map-marker-icon.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 30px;
  height: 40px;
  color: #000;
  text-align: center;
  line-height: 40px;
`;

const CompanyMap = () => {
  console.error("d");
  return (
    <Wrapper>
      <Map
        amapkey="d137b3f7a39c6a29971ee376f76a80a9"
        center={{ longitude: 118.939731, latitude: 42.261111 }}
        zoom={15}
        dragEnable={false}
      >
        <Marker
          title="千家易宅配"
          position={{ longitude: 118.939731, latitude: 42.261111 }}
        >
          <Popover placement="top" content="千家易宅配门店" visible>
            <MapIcon />
          </Popover>
        </Marker>
      </Map>
    </Wrapper>
  );
};
export default CompanyMap;
