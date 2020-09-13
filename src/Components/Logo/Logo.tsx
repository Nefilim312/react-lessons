import React from 'react';
import { createUseStyles } from 'react-jss';
import { RED } from '../../constants/styles';

const Logo: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.logo}>
      <span className={classes.bold}>netflix</span>roulette
    </div>
  );
};

const useStyles = createUseStyles({
  logo: {
    color: RED,
    fontSize: '1.3rem',
  },
  bold: {
    fontWeight: 900,
  },
});

export default Logo;
