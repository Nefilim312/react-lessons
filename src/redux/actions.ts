import {
  SHOW_LOADER,
  HIDE_LOADER,
  REQUEST_MOVIES,
  CHANGE_FILTER,
} from './types';
import { Dispatch } from 'redux';
import fetch from 'node-fetch';

export function requestMovies(filter?: IFilter, needShowLoader = true) {
  return async (dispatch: Dispatch) => {
    needShowLoader && dispatch(showLoader());

    const url = new URL('https://reactjs-cdp.herokuapp.com/movies');
    const searchObj: { [key: string]: any } = {
      sortOrder: 'desc',
      limit: '9',
      ...filter,
    };

    const searchParams = new URLSearchParams(searchObj);

    url.search = searchParams.toString();

    const response = await fetch(url.toString());
    const json = await response.json();

    needShowLoader && dispatch(hideLoader());
    return dispatch({ type: REQUEST_MOVIES, payload: json.data });
  };
}

export function changeFilter(filter: IFilter) {
  return { type: CHANGE_FILTER, payload: filter };
}

export function resetFilter() {
  return {
    type: CHANGE_FILTER,
    payload: { search: '', searchBy: 'title', sortBy: 'release_date' },
  };
}

export function showLoader() {
  return { type: SHOW_LOADER };
}

export function hideLoader() {
  return { type: HIDE_LOADER };
}
