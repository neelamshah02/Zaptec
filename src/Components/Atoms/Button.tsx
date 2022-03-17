import React from "react";
import styled from "styled-components";

export interface ButtonProps {
  text: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  text,
  children,
  onClick,
  ...rest
}) => {
  return (
    <MyButton type="button" onClick={onClick} {...rest}>
      {text || children}
    </MyButton>
  );
};

const MyButton = styled.button`
  border-radius: 4px;
  height: 48px;
  border-color: transparent;
  color: orange;
  padding: 10px;
  margin: 10px 30px 30px 30px;
`;

export default Button;
