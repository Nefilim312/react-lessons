import {
  REQUEST_SIMILAR_MOVIES,
  LOAD_FILM,
  SHOW_LOADER,
  HIDE_LOADER,
  ActionTypes,
} from './types';
import { HYDRATE } from 'next-redux-wrapper';

const initialState: IFilmPageState = {
  movies: [],
  film: {
    id: 0,
    title: '',
    poster_path: '',
    release_date: '',
    overview: '',
    genres: [],
    runtime: '',
    vote_average: '',
  },
  loading: false,
};

export function filmPageReducer(
  state = initialState,
  action: ActionTypes
): IFilmPageState {
  switch (action.type) {
    case REQUEST_SIMILAR_MOVIES:
      return { ...state, movies: action.payload };
    case LOAD_FILM:
      return { ...state, film: action.payload };
    case SHOW_LOADER:
      return { ...state, loading: true };
    case HIDE_LOADER:
      return { ...state, loading: false };
    case HYDRATE:
      return {
        ...state,
        ...action.payload.filmPage,
      };
    default:
      return state;
  }
}

export type FilmPageState = ReturnType<typeof filmPageReducer>;

export default filmPageReducer;
