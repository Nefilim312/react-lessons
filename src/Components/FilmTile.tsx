import React from 'react';
import { createUseStyles } from 'react-jss';

interface FilmTileProps {
  filmData: IFilm;
  onClick: (item: IFilm) => void;
}

const FilmTile: React.FC<FilmTileProps> = ({ filmData, onClick }) => {
  const classes = useStyles();

  return (
    <div className={classes.filmTile} onClick={onClick.bind(null, filmData)}>
      <img
        className={classes.image}
        src={filmData.poster_path}
        alt={filmData.title}
      />
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
    border: '1px solid var(--grey)',
    padding: '.2rem .5rem',
    borderRadius: 'var(--borderSize)',
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
});

export default FilmTile;
