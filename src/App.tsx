import React, { useState, useEffect, useRef, useCallback } from 'react';
import Footer from './Components/Footer';
import MainPage from './Pages/MainPage';
import FilmPage from './Pages/FilmPage';
import { ErrorBoundary } from './Components/ErrorBoundary';
import { requestMovies, resetFilter } from './redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './redux/rootReducer';

enum pages {
  main = 'main',
  film = 'film',
}

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<pages>(pages.main);
  const [film, setFilm] = useState<IFilm>();
  const dispatch = useDispatch();
  const filter = useSelector((state: RootState) => state.filter);
  const isInitialRequest = useRef(true);

  const openFilmHandler = useCallback((film: IFilm) => {
    setFilm(film);
    setActivePage(pages.film);
    window.scrollTo(0, 0);
  }, []);

  const backToMain = useCallback(() => {
    setActivePage(pages.main);
    dispatch(resetFilter());
    window.scrollTo(0, 0);
  }, [dispatch]);

  useEffect(() => {
    if (isInitialRequest.current) {
      isInitialRequest.current = false;
      dispatch(requestMovies(filter, false));
    } else {
      dispatch(requestMovies(filter));
    }
  }, [filter, dispatch]);

  return (
    <>
      <ErrorBoundary>
        {activePage === pages.main ? (
          <MainPage openFilm={openFilmHandler} />
        ) : (
          film && (
            <FilmPage
              film={film}
              onBackButtonClick={backToMain}
              openFilm={openFilmHandler}
            />
          )
        )}
      </ErrorBoundary>
      <Footer />
    </>
  );
};

export default App;
