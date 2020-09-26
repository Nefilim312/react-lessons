import React from 'react';
import { createUseStyles } from 'react-jss';
import { BACKGROUND } from '../../constants/styles';

const Loader: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.loaderContainer}>
      <div className={classes.spinner}>
        <div className={classes.loader}>
          <div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const useStyles = createUseStyles({
  loaderContainer: `
    display: grid;
    place-items: center;
    background: ${BACKGROUND};
  `,

  '@keyframes loader': {
    '0%': {
      transform: 'rotate(0deg)',
    },
    '100%': {
      transform: 'rotate(360deg)',
    },
  },

  loader: {
    width: '100%',
    height: '100%',
    position: 'relative',
    transform: 'translateZ(0) scale(1)',
    'backface-visibility': 'hidden',
    'transform-origin': '0 0',

    '& div': {
      'box-sizing': 'content-box',
    },

    '& > div > div': {
      position: 'absolute',
      'border-radius': '50%',
    },

    '& > div > div:nth-child(1)': {
      top: '36.72px',
      left: '36.72px',
      width: '130.56px',
      height: '130.56px',
      background: '#f65261',
    },

    '& > div > div:nth-child(2)': {
      top: '47.1648px',
      left: '88.944px',
      width: '26px',
      height: '26px',
      background: '#ffffff',
      animation: 'loader 1s linear infinite',
      'transform-origin': '13px 54px',
    },
  },

  spinner: `
    width: 204px;
    height: 204px;
    display: inline-block;
    overflow: hidden;
    background: none;
  `,
});

export default Loader;
