import React from 'react';
import { IFilm } from '../interfaces';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  filmTile: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    cursor: 'pointer',
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
  },
  genre: {
    color: '#7D7D7D',
    marginTop: '.5rem',
  },
  image: { width: '100%' },
});

interface FilmTileProps {
  filmData: IFilm;
  onClick: (item: IFilm) => void;
}

const FilmTile: React.FC<FilmTileProps> = ({
  filmData,
  onClick,
}: FilmTileProps) => {
  const classes = useStyles();

  return (
    <div className={classes.filmTile} onClick={onClick.bind(null, filmData)}>
      <img className={classes.image} src={filmData.img} alt={filmData.title} />
      <div>
        <div className={classes.titleAndDate}>
          <div className={classes.title}>{filmData.title}</div>
          <div className={classes.date}>{filmData.date}</div>
        </div>
        <div className={classes.genre}>{filmData.genre}</div>
      </div>
    </div>
  );
};

export default FilmTile;
