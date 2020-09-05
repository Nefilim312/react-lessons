import React from 'react';
import FilmTile from './FilmTile';
import { createUseStyles } from 'react-jss';
import { Loader } from './Loader/Loader';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/rootReducer';

interface FilmListProps {
  films: IFilm[];
  onItemClick: (item: IFilm) => void;
}

const FilmList: React.FC<FilmListProps> = ({ onItemClick, films }) => {
  const classes = useStyles();
  const loading = useSelector((state: RootState) => state.loading);

  if (loading) {
    return <Loader />;
  }

  if (films.length) {
    return (
      <div className={classes.filmList}>
        {films.map((film) => (
          <FilmTile key={film.id} filmData={film} onClick={onItemClick} />
        ))}
      </div>
    );
  } else {
    return <div className={classes.empty}>No films found</div>;
  }
};

const useStyles = createUseStyles({
  filmList: {
    background: 'var(--backGroundGrey)',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridGap: '3rem',
    padding: '4rem 3rem',
  },
  empty: {
    fontSize: '4rem',
    padding: '10rem',
    fontWeight: '300',
    color: '#AFAFAF',
    textAlign: 'center',
    background: 'var(--backGroundGrey)',
  },
});

export default FilmList;
