import React from 'react';
import FilmPage from '../../src/pages/FilmPage/FilmPage';
import globalSheet from '../../src/globalSheet';
import { JssProvider, SheetsRegistry, createUseStyles } from 'react-jss';
import { wrapper } from '../../src/redux/store';
import { loadFilm, requestSimilarMovies } from '../../src/redux/actions';

const useStyle = createUseStyles(globalSheet);

function Index() {
  useStyle();
  const sheets = new SheetsRegistry();

  return (
    <JssProvider registry={sheets}>
      <FilmPage />
    </JssProvider>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store, query }) => {
    const filmResult = await store.dispatch(loadFilm(query.id));
    store.dispatch(filmResult);

    const similarFilmsResult = await store.dispatch(
      requestSimilarMovies(store.getState().filmPage.film.genres)
    );
    store.dispatch(similarFilmsResult);
  }
);

export default Index;
