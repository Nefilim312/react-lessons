import React from 'react';
import { IFilm } from '../interfaces';
import FilmTile from './FilmTile';
import { createUseStyles } from 'react-jss';

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

interface FilmListProps {
  filmSet: IFilm[];
  onItemClick: (item: IFilm) => void;
}

const FilmList: React.FC<FilmListProps> = ({
  filmSet,
  onItemClick,
}: FilmListProps) => {
  const classes = useStyles();

  if (filmSet.length) {
    return (
      <div className={classes.filmList}>
        {filmSet.map((film, idx) => (
          <FilmTile onClick={onItemClick} filmData={film} key={idx}></FilmTile>
        ))}
      </div>
    );
  } else {
    return <div className={classes.empty}>No films found</div>;
  }
};

export default FilmList;
