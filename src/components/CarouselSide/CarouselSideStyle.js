import styled from "styled-components";

export const CarouselItem = styled.div`
  height: 500px;
  width: 100%;
  padding: 3%;
  color: #ff081c;
  line-height: 160px;
  text-align: center;
  background-image: url(${props => props.urlToImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  
  &:hover {
   backdrop-filter: blur(10);
  }
`;

export const CarouselTitle = styled.div`
  width: 50%;
  text-align: left;
  font: bold 26px Roboto;
  margin-bottom: 15px;
`;

