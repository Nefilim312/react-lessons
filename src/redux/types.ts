import { REHYDRATE } from 'redux-persist';
export const REQUEST_MOVIES = 'REQUEST_MOVIES';
export const CHANGE_FILTER = 'CHANGE_FILTER';
export const SHOW_LOADER = 'SHOW_LOADER';
export const HIDE_LOADER = 'HIDE_LOADER';

export const REQUEST_SIMILAR_MOVIES = 'REQUEST_SIMILAR_MOVIES';
export const LOAD_FILM = 'LOAD_FILM';

interface RequestMoviesAction {
  type: typeof REQUEST_MOVIES;
  payload: IFilm[];
}

interface ChangeFilterAction {
  type: typeof CHANGE_FILTER;
  payload: IFilter;
}

interface ToggleLoaderAction {
  type: typeof SHOW_LOADER | typeof HIDE_LOADER;
}

interface Rehydrate {
  type: typeof REHYDRATE;
  payload: IState;
}

interface RequestSimilarMoviesAction {
  type: typeof REQUEST_SIMILAR_MOVIES;
  payload: IFilm[];
}

interface LoadFilmAction {
  type: typeof LOAD_FILM;
  payload: IFilm;
}

export type ActionTypes =
  | RequestMoviesAction
  | ChangeFilterAction
  | ToggleLoaderAction
  | RequestSimilarMoviesAction
  | LoadFilmAction
  | Rehydrate;
