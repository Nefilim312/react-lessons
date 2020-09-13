import React, { useRef, useEffect, useState, useCallback } from 'react';
import RadioButtons from '../../components/RadioButtons/RadioButtons';
import FilmList from '../../components/FilmList/FilmList';
import StateRow from '../../components/StateRow/StateRow';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, requestMovies } from '../../redux/actions';
import { createUseStyles } from 'react-jss';
import { useParams, useHistory } from 'react-router-dom';

const MainPage: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const [counter, setCounter] = useState(0);
  const { searchValue } = useParams();
  const isInitialRequest = useRef(true);

  const filter = useSelector((state: IState) => state.mainPage.filter);
  const films = useSelector((state: IState) => state.mainPage.movies);
  const loading = useSelector((state: IState) => state.mainPage.loading);

  useEffect(() => {
    if (isInitialRequest.current) {
      isInitialRequest.current = false;
      dispatch(requestMovies({ ...filter, search: searchValue }, false));
    } else {
      dispatch(requestMovies({ ...filter, search: searchValue }));
    }
  }, [filter, dispatch, searchValue]);

  useEffect(() => {
    setCounter(films?.length || 0);
  }, [films]);

  const searchHandler = useCallback(
    (searchValue: string) => {
      if (searchValue) {
        history.push(`/search/${searchValue}`);
      } else {
        history.push(`/`);
      }

      dispatch(changeFilter({ ...filter, search: searchValue }));
    },
    [dispatch, filter, history]
  );

  return (
    <>
      <Header
        onSearch={searchHandler}
        onSearchByChanged={(searchBy) => {
          if (filter.search) {
            dispatch(changeFilter({ ...filter, searchBy }));
          }
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
          onChange={(sortBy) => dispatch(changeFilter({ ...filter, sortBy }))}
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
