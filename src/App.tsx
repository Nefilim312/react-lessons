import React from 'react';
import MainPage from './pages/MainPage/MainPage';
import FilmPage from './pages/FilmPage/FilmPage';
import NotFound from './pages/NotFound/NotFound';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createUseStyles } from 'react-jss';
import { BACKGROUND } from './constants/styles';

const App: React.FC = () => {
  useStyles();

  return (
    <>
      <ErrorBoundary>
        <BrowserRouter>
          <Switch>
            <Route exact path='/'>
              <MainPage />
            </Route>
            <Route path='/search/:searchValue'>
              <MainPage />
            </Route>
            <Route path='/film/:filmId'>
              <FilmPage />
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
          <ScrollToTop />
        </BrowserRouter>
      </ErrorBoundary>
    </>
  );
};

const useStyles = createUseStyles({
  '@global': {
    html: `
      height: 100%;
      background-color: ${BACKGROUND};
    `,
    body: `
      height: 100%;
      background-color: ${BACKGROUND};
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    `,
    input: `
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    `,
    'a:any-link': `
      text-decoration: none;
    `,
    '.material-icons': `
      font-family: 'Material Icons';
      font-weight: normal;
      font-style: normal;
      font-size: 24px;
      display: inline-block;
      line-height: 1;
      text-transform: none;
      letter-spacing: normal;
      word-wrap: normal;
      white-space: nowrap;
      direction: ltr;
      -webkit-font-smoothing: antialiased;
      text-rendering: optimizeLegibility;
      -moz-osx-font-smoothing: grayscale;
      font-feature-settings: 'liga';
    `,
  },
});

export default App;
