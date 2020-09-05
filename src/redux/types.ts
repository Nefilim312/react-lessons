import { REHYDRATE } from 'redux-persist';
export const REQUEST_MOVIES = 'REQUEST_MOVIES';
export const CHANGE_FILTER = 'CHANGE_FILTER';
export const SHOW_LOADER = 'SHOW_LOADER';
export const HIDE_LOADER = 'HIDE_LOADER';

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

export type ActionTypes =
  | RequestMoviesAction
  | ChangeFilterAction
  | ToggleLoaderAction
  | Rehydrate;
