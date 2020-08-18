import React from 'react';
import { IFilm } from '../interfaces';
import Logo from '../Components/Logo';
import { createUseStyles } from 'react-jss';
import classNames from 'classnames';
import StateRow from '../Components/StateRow';
import FilmList from '../Components/FilmList';
import FilmBrowser from '../Components/FilmBrowser';

const useStyles = createUseStyles({
  filmPage: {
    height: '30rem',
    background:
      'linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(bg.jpg)',
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
  rating: {
    color: '#A1E66F',
    fontSize: '2rem',
    fontWeight: '300',
    border: '1px solid #AFAFAF',
    borderRadius: '50%',
    padding: '1rem',
    marginLeft: '2rem',
  },
  titleAndRating: {
    display: 'flex',
    alignItems: 'center',
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

interface FilmPageProps {
  film: IFilm;
  onBackButtonClick: () => void;
  openFilm: (item: IFilm) => void;
}

const FilmPage: React.FC<FilmPageProps> = ({
  film,
  onBackButtonClick,
  openFilm,
}: FilmPageProps) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.filmPage}>
        <div className={classes.top}>
          <Logo />
          <span
            onClick={onBackButtonClick}
            className={classNames('material-icons', classes.backButton)}
          >
            search
          </span>
        </div>
        <div className={classes.contentContainer}>
          <div className={classes.imageContainer}>
            <img className={classes.image} src={film.img} alt={film.title} />
          </div>
          <div className={classes.filmInfo}>
            <div className={classes.titleAndRating}>
              <div className={classes.title}>{film.title}</div>
              <div className={classes.rating}>{film.rating}</div>
            </div>
            <div className={classes.genre}>{film.genre}</div>
            <div className={classes.yearAndLength}>
              <div className={classes.year}>{film.date}</div>
              <div>{film.length} min</div>
            </div>
            <div className={classes.description}>{film.description}</div>
          </div>
        </div>
      </div>

      <StateRow>
        <div className={classes.searchByGenre}>Films by {film.genre} genre</div>
      </StateRow>
      <FilmBrowser
        filter={{ searchValue: film.genre, searchBy: 'genre', sortBy: 'date' }}
        onItemClick={openFilm}
      />
    </>
  );
};

export default FilmPage;
