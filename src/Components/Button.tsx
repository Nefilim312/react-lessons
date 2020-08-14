import React from 'react';
import { createUseStyles } from 'react-jss';
import classNames from 'classnames';

const useStyles = createUseStyles({
  button: {
    border: 'none',
    borderRadius: 'var(--borderSize)',
    fontSize: '1.2rem',
    padding: '1rem 4rem',
    background: 'var(--red)',
    color: '#FFF',
    cursor: 'pointer',
    outline: 'none',
    display: 'inline-block',
  },
});

export interface ButtonProps {
  caption?: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  className?: string;
  children?: React.ReactNode;
  as?: 'button' | 'label';
}

const Button: React.FC<ButtonProps> = ({
  children,
  caption,
  onClick,
  as,
  className,
  ...props
}: ButtonProps) => {
  const classes = useStyles();

  const Component = as || 'button';
  return (
    <Component
      {...props}
      className={classNames(classes.button, className)}
      onClick={onClick}
    >
      {children ? children : caption}
    </Component>
  );
};

export default Button;
