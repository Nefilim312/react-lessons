import {
  REQUEST_MOVIES,
  CHANGE_FILTER,
  SHOW_LOADER,
  HIDE_LOADER,
  ActionTypes,
} from './types';
import { HYDRATE } from 'next-redux-wrapper';

export const initialState: IMainPageState = {
  movies: [],
  filter: { search: '', searchBy: 'title', sortBy: 'release_date' },
  loading: false,
};

export function mainPageReducer(
  state = initialState,
  action: ActionTypes
): IMainPageState {
  switch (action.type) {
    case REQUEST_MOVIES:
      return { ...state, movies: action.payload };
    case CHANGE_FILTER:
      return { ...state, filter: action.payload };
    case SHOW_LOADER:
      return { ...state, loading: true };
    case HIDE_LOADER:
      return { ...state, loading: false };
    case HYDRATE:
      return {
        ...state,
        ...action.payload.mainPage,
      };
    default:
      return state;
  }
}

export type RootState = ReturnType<typeof mainPageReducer>;

export default mainPageReducer;
