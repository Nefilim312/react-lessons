import React, { useState, useEffect } from 'react';
import FilmList from './FilmList';
import DemoData from '../DemoData';
import { IFilter, IFilm } from '../interfaces';

interface FilmBrowserProps {
  filter: IFilter;
  onItemClick: (item: IFilm) => void;
  dataLoadCallback?: (items: IFilm[]) => void;
}

const FilmBrowser: React.FC<FilmBrowserProps> = ({
  filter,
  onItemClick,
  dataLoadCallback,
}: FilmBrowserProps) => {
  const [films, setFilms] = useState(DemoData);

  function sortFilms(filmSet: IFilm[], sortBy: 'date' | 'rating') {
    return filmSet
      .sort((a: IFilm, b: IFilm) => {
        if (a[sortBy] < b[sortBy]) {
          return 1;
        } else if (a[sortBy] > b[sortBy]) {
          return -1;
        } else {
          return 0;
        }
      })
      .slice();
  }

  function searchFilms(
    filmSet: IFilm[],
    searchValue: string,
    searchBy: 'title' | 'genre'
  ) {
    return filmSet.filter((film: IFilm) =>
      film[searchBy].toLowerCase().includes(searchValue.toLocaleLowerCase())
    );
  }

  useEffect(() => {
    setFilms(
      sortFilms(
        searchFilms(DemoData, filter.searchValue, filter.searchBy),
        filter.sortBy
      )
    );
  }, [filter]);

  useEffect(() => {
    dataLoadCallback && dataLoadCallback(films);
  }, [films]);

  return <FilmList filmSet={films} onItemClick={onItemClick} />;
};

export default FilmBrowser;
