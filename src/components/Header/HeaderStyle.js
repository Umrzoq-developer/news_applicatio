import styled from "styled-components";

export const HeaderBrand = styled.div`
  font: bold 26px Roboto;
  color: white;
  width: 20%;
  line-height: 50px;
  
  @media (min-width: 400px) and (max-width: 800px) {
    width: 30%;
    font-size: 15px;
    text-align: left;
    margin-left: 0 !important;
    padding-left: 0;
  }
`;
