import React from 'react';
import MainPage from '../src/pages/MainPage/MainPage';
import globalSheet from '../src/globalSheet';
import { JssProvider, SheetsRegistry, createUseStyles } from 'react-jss';

const useStyle = createUseStyles(globalSheet);

function Index() {
  useStyle();
  const sheets = new SheetsRegistry();

  return (
    <JssProvider registry={sheets}>
      <MainPage />
    </JssProvider>
  );
}

export default Index;
