
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', className, ...props }) => {
  const baseClasses = "px-8 py-3 font-bold text-lg rounded-full transition-transform duration-300 ease-in-out transform hover:scale-105 shadow-lg focus:outline-none focus:ring-4";
  
  const variantClasses = {
    primary: "bg-primo-light-blue text-white hover:bg-primo-blue focus:ring-primo-blue/50",
    secondary: "bg-white text-primo-blue border-2 border-primo-blue hover:bg-primo-blue hover:text-white focus:ring-primo-blue/50"
  };

  return (
    <button className={`${baseClasses} ${variantClasses[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
