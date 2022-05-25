import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  @media screen and (max-width: 800px) {
    height: 50px;
    padding:10px
    border: 2px solid green;
    margin-bottom:20px;
  }
`;

export const LogoContainer = styled(Link)`
  height: 50px;
  width: 100%;
  @media screen and (max-width: 800px) {
    height: 40px;
    width: 30%;

  }
`;

export const OptionsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 90%;
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  display: flex;
  align-items: center;
`;
