interface IFilm {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  overview: string;
  genres: string[];
  runtime: string | number;
  vote_average: string | number;
}

interface IFilter {
  search: string;
  searchBy: 'title' | 'genres';
  sortBy: 'release_date' | 'vote_average';
  limit?: string;
  filter?: string;
}

interface IMainPageState {
  movies: IFilm[];
  filter: IFilter;
  loading: boolean;
}

interface IFilmPageState {
  movies: IFilm[];
  film: IFilm;
  loading: boolean;
}

type IState = {
  mainPage: IMainPageState;
  filmPage: IFilmPageState;
};
