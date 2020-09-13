import React from 'react';
import Logo from '../Logo/Logo';
import { createUseStyles } from 'react-jss';
import { DARKGREY } from '../../constants/styles';

const Footer: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <Logo />
    </div>
  );
};

const useStyles = createUseStyles({
  footer: {
    padding: '2rem 5rem 1.5rem 5rem',
    display: 'flex',
    justifyContent: 'center',
    background: DARKGREY,
  },
});

export default Footer;
