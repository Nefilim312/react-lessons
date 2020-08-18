import React from 'react';
import { createUseStyles } from 'react-jss';
import classes from '*.module.css';

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

interface StateRowProps {
  children: React.ReactNode;
}

const StateRow: React.FC<StateRowProps> = (props: StateRowProps) => {
  const classes = useStyles();

  return <div className={classes.statusBar}>{props.children}</div>;
};

export default StateRow;
