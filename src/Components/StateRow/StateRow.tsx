import React from 'react';
import { createUseStyles } from 'react-jss';
import { GREY } from '../../constants/styles';

const StateRow: React.FC = ({ children }) => {
  const classes = useStyles();

  return <div className={classes.statusBar}>{children}</div>;
};

const useStyles = createUseStyles({
  statusBar: {
    padding: '0rem 5rem',
    height: '5rem',
    alignItems: 'center',
    background: GREY,
    display: 'flex',
    justifyContent: 'space-between',
  },
});

export default StateRow;
