import React from 'react';
import { createUseStyles } from 'react-jss';

const StateRow: React.FC = ({ children }) => {
  const classes = useStyles();

  return <div className={classes.statusBar}>{children}</div>;
};

const useStyles = createUseStyles({
  statusBar: {
    padding: '0rem 5rem',
    height: '5rem',
    alignItems: 'center',
    background: 'var(--grey)',
    display: 'flex',
    justifyContent: 'space-between',
  },
});

export default StateRow;
