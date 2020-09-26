import React from 'react';
import NotFound from '../src/pages/NotFound/NotFound';
import globalSheet from '../src/globalSheet';
import { JssProvider, SheetsRegistry, createUseStyles } from 'react-jss';

const useStyle = createUseStyles(globalSheet);

function Error({ statusCode }) {
  useStyle();
  const sheets = new SheetsRegistry();
  return (
    <JssProvider registry={sheets}>
      <NotFound errorCode={statusCode} />
    </JssProvider>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
