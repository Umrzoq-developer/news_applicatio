import styled from "styled-components";
import {Button} from "antd";

export const AboutButton = styled(Button)`
  margin-top: 5%;
  margin-left: 60%;
  
  @media (min-width: 300px) and (max-width: 700px) {
    margin-left: 0;
    width: 100%;
  }
`;
