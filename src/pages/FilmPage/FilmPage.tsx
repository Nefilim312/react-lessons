import React, { useEffect } from 'react';
import classNames from 'classnames';
import Logo from '../../components/Logo/Logo';
import StateRow from '../../components/StateRow/StateRow';
import FilmList from '../../components/FilmList/FilmList';
import Footer from '../../components/Footer/Footer';
import { createUseStyles } from 'react-jss';
import { useDispatch, useSelector } from 'react-redux';
import { loadFilm, requestSimilarMovies } from '../../redux/actions';
import { useParams, Link } from 'react-router-dom';

const FilmPage: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { filmId } = useParams();

  const film = useSelector((state: IState) => state.filmPage.film);
  const films = useSelector((state: IState) => state.filmPage.movies);

  useEffect(() => {
    dispatch(loadFilm(filmId));
  }, [filmId, dispatch]);

  useEffect(() => {
    dispatch(requestSimilarMovies(film.genres));
  }, [film, dispatch]);

  return (
    <>
      <div className={classes.filmPage}>
        <div className={classes.top}>
          <Logo />
          <Link to='/'>
            <span className={classNames('material-icons', classes.backButton)}>
              search
            </span>
          </Link>
        </div>
        <div className={classes.contentContainer}>
          <div className={classes.imageContainer}>
            <img
              className={classes.image}
              src={film.poster_path}
              alt={film.title}
            />
          </div>
          <div className={classes.filmInfo}>
            <div className={classes.titleAndRating}>
              <div className={classes.title}>{film.title}</div>
              <div className={classes.rating}>{film.vote_average}</div>
            </div>
            <div className={classes.genre}>{film.genres?.join(', ')}</div>
            <div className={classes.yearAndLength}>
              <div className={classes.year}>
                {new Date(film.release_date).getFullYear()}
              </div>
              {film.runtime ? <div>{film.runtime} min</div> : null}
            </div>
            <div className={classes.description}>{film.overview}</div>
          </div>
        </div>
      </div>

      <StateRow>
        <div className={classes.searchByGenre}>
          Films by {film.genres?.join(', ')} genre
        </div>
      </StateRow>

      <FilmList films={films} />

      <Footer />
    </>
  );
};

const useStyles = createUseStyles({
  filmPage: {
    height: '30rem',
    background:
      'linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(/bg.jpg)',
    padding: '1rem 3rem 4rem 3rem',
    display: 'flex',
    flexDirection: 'column',
  },
  top: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '2rem',
  },
  contentContainer: {
    display: 'flex',
    overflow: 'hidden',
    height: '100%',
  },
  filmInfo: {
    margin: '2rem 4rem',
  },
  image: {
    height: '100%',
  },
  imageContainer: {
    height: '100%',
    width: '20rem',
  },
  title: {
    fontSize: '3rem',
    fontWeight: '300',
    color: '#C3C3C3',
  },
  rating: `
    color: #A1E66F;
    width: 3rem;
    border: 1px solid #AFAFAF;
    height: 3rem;
    padding: 0.4rem;
    font-size: 2rem;
    font-weight: 300;
    margin-left: 2rem;
    border-radius: 50%;
    display: grid;
    place-items: center;
  `,
  titleAndRating: {
    display: 'flex',
    alignItems: 'flex-start',
  },
  genre: {
    color: '#AFAFAF',
  },
  yearAndLength: {
    display: 'flex',
    margin: '2rem 0',
    fontSize: '1.8rem',
    fontWeight: '300',
    color: '#F65261',
  },
  year: {
    marginRight: '2rem',
  },
  description: {
    color: '#AFAFAF',
  },
  backButton: {
    color: '#F65261',
    fontSize: '2rem',
    cursor: 'pointer',
  },
  searchByGenre: {
    color: '#FFF',
    fontWeight: '900',
    alignSelf: 'center',
  },
});

export default FilmPage;
