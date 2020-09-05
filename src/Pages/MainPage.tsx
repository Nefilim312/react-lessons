import React from 'react';
import RadioButtons from '../Components/RadioButtons';
import FilmList from '../Components/FilmList';
import StateRow from '../Components/StateRow';
import { createUseStyles } from 'react-jss';
import Header from '../Components/Header';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../redux/actions';
import { RootState } from '../redux/rootReducer';

interface MainPageProps {
  openFilm: (item: IFilm) => void;
}

const MainPage: React.FC<MainPageProps> = ({ openFilm }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const filter = useSelector((state: RootState) => state.filter);
  const films = useSelector((state: RootState) => state.movies);
  const counter = films.length;

  return (
    <>
      <Header
        onSearch={(searchValue) =>
          dispatch(changeFilter({ ...filter, search: searchValue }))
        }
        onSearchByChanged={(searchBy) => {
          if (filter.search) {
            dispatch(changeFilter({ ...filter, searchBy }));
          }
        }}
      />
      <StateRow>
        <div className={classes.searchCounter}>
          {filter?.search && counter ? counter + ' movie found' : null}
        </div>
        <RadioButtons
          caption='SORT BY'
          buttons={[
            { value: 'release_date', title: 'RELEASE DATE' },
            { value: 'vote_average', title: 'RATING' },
          ]}
          selectedValue='release_date'
          onChange={(sortBy) => dispatch(changeFilter({ ...filter, sortBy }))}
        />
      </StateRow>

      <FilmList films={films} onItemClick={openFilm} />
    </>
  );
};

const useStyles = createUseStyles({
  searchCounter: {
    color: '#FFF',
    fontWeight: '900',
    alignSelf: 'center',
  },
});

export default MainPage;
