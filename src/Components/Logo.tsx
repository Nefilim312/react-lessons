import React from 'react';
import { createUseStyles } from 'react-jss';

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
    color: 'var(--red)',
    fontSize: '1.3rem',
  },
  bold: {
    fontWeight: 900,
  },
});

export default Logo;
