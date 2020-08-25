import styled from "styled-components";
import {Typography} from "antd";

const {Text} = Typography;

export const CarouselItem = styled.div`
  height: 500px;
  width: 100%;
  padding: 3%;
  color: #ff081c;
  line-height: 160px;
  position: relative;
  text-align: center;
  background-image: url(${props => props.urlToImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  
  &:hover {
   backdrop-filter: blur(10);
  }
`;

export const CarouselTitle = styled(Text)`
  width: 50% !important;
  text-align: left !important;
  font: bold 24px Roboto;
  position: absolute;
`;

