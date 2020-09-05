import React from 'react';
import Logo from './Logo';
import { createUseStyles } from 'react-jss';

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
    background: 'var(--darkGrey)',
  },
});

export default Footer;
