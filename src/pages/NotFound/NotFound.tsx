import React from 'react';
import Footer from '../../components/Footer/Footer';
import Button from '../../components/Button/Button';
import { createUseStyles } from 'react-jss';
import { useHistory } from 'react-router-dom';
import { RED, BACKGROUND } from '../../constants/styles';

interface IErrorProps {
  errorCode?: number;
}

const NotFound: React.FC<IErrorProps> = ({ errorCode = 404 }) => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className={classes.fullPage}>
      <div className={classes.errorContainer}>
        <div className={classes.error}>{errorCode}</div>

        <Button onClick={() => history.goBack()}>BACK</Button>
      </div>

      <Footer />
    </div>
  );
};

const useStyles = createUseStyles({
  fullPage: `
    height: 100vh;
    display: flex;
    flex-direction: column;
  `,
  errorContainer: `
    display: grid;
    place-items: center;
    flex-grow: 1;
    background: ${BACKGROUND};
  `,
  error: `
    color: ${RED};
    font-size: 10rem;
    font-weight: bold;
  `,
});

export default NotFound;
