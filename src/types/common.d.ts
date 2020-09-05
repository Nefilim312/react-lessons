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

interface IState {
  movies: IFilm[];
  filter: IFilter;
  loading: boolean;
}
