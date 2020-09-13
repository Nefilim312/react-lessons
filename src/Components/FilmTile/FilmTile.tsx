import React from 'react';
import { createUseStyles } from 'react-jss';
import { Link } from 'react-router-dom';
import { GREY, BORDER_SIZE } from '../../constants/styles';

interface FilmTileProps {
  filmData: IFilm;
}

const FilmTile: React.FC<FilmTileProps> = ({ filmData }) => {
  const classes = useStyles();

  return (
    <Link to={'/film/' + filmData.id}>
      <div className={classes.filmTile}>
        <div className={classes.imageContainer}>
          <img
            className={classes.image}
            src={filmData.poster_path}
            alt={filmData.title}
          />
        </div>
        <div>
          <div className={classes.titleAndDate}>
            <div className={classes.title}>{filmData.title}</div>
            <div className={classes.date}>
              {new Date(filmData.release_date).getFullYear()}
            </div>
          </div>
          <div className={classes.genre}>{filmData.genres.join(', ')}</div>
        </div>
      </div>
    </Link>
  );
};

const useStyles = createUseStyles({
  filmTile: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    cursor: 'pointer',
    overflow: 'hidden',
  },
  titleAndDate: {
    color: '#AFAFAF',
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '1rem',
  },
  title: {
    fontSize: '1.3rem',
  },
  date: {
    border: `1px solid ${GREY}`,
    padding: '.2rem .5rem',
    borderRadius: BORDER_SIZE,
    height: '1.18rem',
  },
  genre: `
    color: #7D7D7D;
    marginTop: .5rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  `,
  image: { width: '100%' },
  imageContainer: `
    height: 34rem;
    width: 100%;
    flex-grow: 1;
    background: radial-gradient(black 0%, transparent 60%);
  `,
});

export default FilmTile;
