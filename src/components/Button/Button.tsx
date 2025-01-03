import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

export interface ButtonProps {
  label?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
}


const buttonStyles = {
  primary: css`
    color: #fff;
    background-color: #007bff;
    &:hover {
      background-color: #0056b3;
    }
  `,
  secondary: css`
    color: #fff;
    background-color: #6c757d;
    &:hover {
      background-color: #5a6268;
    }
  `,
};

// Styled-component для кнопки с использованием динамических стилей
const StyledButton = styled.button<ButtonProps>`
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.3s ease;
  ${({ variant = 'primary' }) => buttonStyles[variant]} // Добавляем стили в зависимости от prop
`;

const Button: React.FC<ButtonProps> = ({ label, onClick, variant = 'primary' }) => {
  return (
    <StyledButton onClick={onClick} variant={variant}>
      {label}
    </StyledButton>
  );
};

export default Button;
