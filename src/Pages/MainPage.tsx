import React, { useState, useEffect } from 'react';
import RadioButtons from '../Components/RadioButtons';
import FilmList from '../Components/FilmList';
import DemoData from '../DemoData';
import StateRow from '../Components/StateRow';
import { IFilm } from '../interfaces';
import { createUseStyles } from 'react-jss';
import Header from '../Components/Header';
import FilmBrowser from '../Components/FilmBrowser';

const useStyles = createUseStyles({
  searchCounter: {
    color: '#FFF',
    fontWeight: '900',
    alignSelf: 'center',
  },
});

interface MainPageProps {
  openFilm: (item: IFilm) => void;
}

const MainPage: React.FC<MainPageProps> = ({ openFilm }: MainPageProps) => {
  const classes = useStyles();
  const [sortBy, setSortBy] = useState<'date' | 'rating'>('date');
  const [searchValue, setSearchValue] = useState('');
  const [searchBy, setSearchBy] = useState<'title' | 'genre'>('title');
  const [counter, setCounter] = useState(0);

  return (
    <>
      <Header onSearch={setSearchValue} onSearchByChanged={setSearchBy} />
      <StateRow>
        <div className={classes.searchCounter}>
          {searchValue && counter ? counter + ' movie found' : null}
        </div>
        <RadioButtons
          caption='SORT BY'
          buttons={[
            { value: 'date', title: 'RELEASE DATE' },
            { value: 'rating', title: 'RATING' },
          ]}
          selectedValue='date'
          onChange={setSortBy}
        />
      </StateRow>

      <FilmBrowser
        filter={{
          searchValue,
          searchBy,
          sortBy,
        }}
        onItemClick={openFilm}
        dataLoadCallback={(films: IFilm[]) => {
          setCounter(films.length);
        }}
      />
    </>
  );
};

export default MainPage;
