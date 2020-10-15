import React from 'react';
import MainPage from '../../src/pages/MainPage/MainPage';
import globalSheet from '../../src/globalSheet';
import { JssProvider, SheetsRegistry, createUseStyles } from 'react-jss';
import { wrapper } from '../../src/redux/store';
import { requestMovies, changeFilter } from '../../src/redux/actions';

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

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store, query }) => {
    const moviesResult = await store.dispatch(
      requestMovies({
        ...store.getState().mainPage.filter,
        search: query.searchValue,
      })
    );

    store.dispatch(
      changeFilter({
        ...store.getState().mainPage.filter,
        search: query.searchValue,
      })
    );
    store.dispatch(moviesResult);
  }
);

export default Index;
