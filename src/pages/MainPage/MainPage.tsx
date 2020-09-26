import React, { useEffect, useState, useCallback } from 'react';
import RadioButtons from '../../components/RadioButtons/RadioButtons';
import FilmList from '../../components/FilmList/FilmList';
import StateRow from '../../components/StateRow/StateRow';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, requestMovies } from '../../redux/actions';
import { createUseStyles } from 'react-jss';
import { useRouter } from 'next/router';

const MainPage: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [counter, setCounter] = useState(0);
  const router = useRouter();
  const searchValue = router.query.searchValue as string;

  const filter = useSelector((state: IState) => state.mainPage.filter);
  const films = useSelector((state: IState) => state.mainPage.movies);
  const loading = useSelector((state: IState) => state.mainPage.loading);

  useEffect(() => {
    setCounter(films?.length || 0);
  }, [films]);

  const searchHandler = useCallback(
    (searchValue: string) => {
      dispatch(changeFilter({ ...filter, search: searchValue }));

      if (searchValue) {
        router.push(`/search/${searchValue}`);
      } else {
        router.push(`/`);
      }
    },
    [dispatch, filter, router]
  );

  return (
    <>
      <Header
        onSearch={searchHandler}
        onSearchByChanged={(searchBy) => {
          dispatch(changeFilter({ ...filter, searchBy }));
          dispatch(requestMovies({ ...filter, searchBy }));
        }}
        initialSearchValue={searchValue}
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
          onChange={(sortBy) => {
            dispatch(changeFilter({ ...filter, sortBy }));
            dispatch(requestMovies({ ...filter, sortBy }));
          }}
        />
      </StateRow>

      <FilmList films={films} loading={loading} />

      <Footer />
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
