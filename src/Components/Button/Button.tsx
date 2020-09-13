import React from 'react';
import classNames from 'classnames';
import { createUseStyles } from 'react-jss';
import { RED, BORDER_SIZE } from '../../constants/styles';

export interface ButtonProps {
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  className?: string;
  as?: 'button' | 'label';
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  as,
  className,
  ...props
}) => {
  const classes = useStyles();
  const Component = as || 'button';

  return (
    <Component
      {...props}
      className={classNames(classes.button, className)}
      onClick={onClick}
    >
      {children}
    </Component>
  );
};

const useStyles = createUseStyles({
  button: {
    border: 'none',
    borderRadius: BORDER_SIZE,
    fontSize: '1.2rem',
    padding: '1rem 4rem',
    background: RED,
    color: '#FFF',
    cursor: 'pointer',
    outline: 'none',
    display: 'inline-block',
  },
});

export default Button;
