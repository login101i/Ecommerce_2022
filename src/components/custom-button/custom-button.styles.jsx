import styled, { css } from "styled-components";

const InvertedButtonStyles = css`
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

const GoogleSignInStyles = css`
  background-color: #4285f4;
  color: white;
  font-size: 14px;

  &:hover {
    background-color: white;
    border: none;
  }
`;

const ButtonStyles = css`
  background-color: black;
  color: white;
`;

const getButtonStyles = (props) => {
  if (props.isGoogleSignIn) {
    return GoogleSignInStyles;
  }
  return props.inverted ? InvertedButtonStyles : ButtonStyles;
};

export const CustomButtonContainter = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  border: none;
  cursor: pointer;
  transition: 0.15s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 4;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }

  ${getButtonStyles}
`;
