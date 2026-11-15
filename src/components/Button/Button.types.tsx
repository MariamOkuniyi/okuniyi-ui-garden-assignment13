import type { ButtonHTMLAttributes, ReactNode } from 'react';

// This interface defines the properties our Button can receive.
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  // The text or content displayed inside the button.
  children?: ReactNode;

  // The background colour of the button.
  backgroundColor?: string;

  // The text colour of the button.
  textColor?: string;

  // Controls whether the button is disabled.
  disabled?: boolean;
}
