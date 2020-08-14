import React, { useState, useEffect } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import MainPage from './Pages/MainPage';
import { IFilm } from './interfaces';
import FilmPage from './Pages/FilmPage';
import { ErrorBoundary } from './Components/ErrorBoundary';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<'main' | 'film'>('main');
  const [film, setFilm] = useState<IFilm | undefined>(undefined);

  const openFilmHandler = (item: IFilm) => {
    setActivePage('film');
    setFilm(item);
  };

  const backToMain = () => {
    setActivePage('main');
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage, film]);

  return (
    <>
      <ErrorBoundary>
        {activePage === 'main' ? (
          <MainPage openFilm={openFilmHandler} />
        ) : (
          <FilmPage
            film={film as IFilm}
            onBackButtonClick={backToMain}
            openFilm={openFilmHandler}
          />
        )}
      </ErrorBoundary>
      <Footer />
    </>
  );
};

export default App;
