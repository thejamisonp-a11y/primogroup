import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', className, ...props }) => {
  const baseClasses = "inline-flex items-center px-6 py-3 font-semibold text-sm uppercase tracking-wider rounded-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variantClasses = {
    primary: "bg-primo-accent text-primo-blue hover:bg-primo-accent/90 focus:ring-primo-accent",
    secondary: "bg-white text-primo-blue border border-primo-blue hover:bg-primo-blue hover:text-white focus:ring-primo-blue"
  };

  return (
    <button className={`${baseClasses} ${variantClasses[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
