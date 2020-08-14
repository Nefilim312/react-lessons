export interface IFilm {
  title: string;
  img: string;
  date: string;
  description: string;
  genre: string;
  length: string;
  rating: string;
}

export interface IFilter {
  searchValue: string;
  searchBy: 'title' | 'genre';
  sortBy: 'date' | 'rating';
}
