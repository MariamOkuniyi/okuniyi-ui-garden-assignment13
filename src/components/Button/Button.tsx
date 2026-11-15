import styled from 'styled-components';
import type { ButtonProps } from './Button.types';

// This styled button uses CSS to control its appearance.
// It changes colour and cursor style when disabled.
const StyledButton = styled.button<{
  $backgroundColor?: string;
  $textColor?: string;
}>`
  /* Default button appearance */
  background-color: ${({ $backgroundColor }) => $backgroundColor || '#2563eb'};

  color: ${({ $textColor }) => $textColor || '#ffffff'};

  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;

  /* Make the button visually change when disabled */
  &:disabled {
    background-color: #cccccc;
    color: #666666;
    cursor: not-allowed;
    opacity: 0.7;
  }

  /* Responsive styling for smaller screens */
  @media (max-width: 600px) {
    width: 100%;
    padding: 10px 16px;
    font-size: 14px;
  }
`;

// This is our reusable React Button component.
export const Button = ({
  children = 'Click Me',
  backgroundColor,
  textColor,
  disabled = false,
  ...rest
}: ButtonProps) => {
  return (
    <StyledButton
      $backgroundColor={backgroundColor}
      $textColor={textColor}
      disabled={disabled}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
