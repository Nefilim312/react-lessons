import React from 'react';
import FilmTile from '../FilmTile/FilmTile';
import Loader from '../Loader/Loader';
import { createUseStyles } from 'react-jss';
import { BACKGROUND } from '../../constants/styles';

interface FilmListProps {
  films?: IFilm[];
  loading?: boolean;
}

const FilmList: React.FC<FilmListProps> = ({ films, loading }) => {
  const classes = useStyles();

  if (loading) {
    return <Loader />;
  }

  if (films?.length) {
    return (
      <div className={classes.filmList}>
        {films.map((film) => (
          <FilmTile key={film.id} filmData={film} />
        ))}
      </div>
    );
  } else {
    return <div className={classes.empty}>No films found</div>;
  }
};

const useStyles = createUseStyles({
  filmList: {
    background: BACKGROUND,
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
    background: BACKGROUND,
  },
});

export default FilmList;
