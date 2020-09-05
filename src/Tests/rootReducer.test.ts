import { ActionTypes } from './../redux/types';
import DemoData from './DemoData';
import rootReducer from '../redux/rootReducer';
import * as types from '../redux/types';

describe('Root reducer', () => {
  it('should return the initial state', () => {
    expect(rootReducer(undefined, {} as ActionTypes)).toMatchSnapshot();
  });

  it('should handle REQUEST_MOVIES', () => {
    expect(
      rootReducer(undefined, {
        type: types.REQUEST_MOVIES,
        payload: DemoData,
      })
    ).toMatchSnapshot();
  });

  it('should handle CHANGE_FILTER', () => {
    expect(
      rootReducer(undefined, {
        type: types.CHANGE_FILTER,
        payload: {
          search: 'some text',
          sortBy: 'release_date',
          searchBy: 'title',
        },
      })
    ).toMatchSnapshot();
  });

  it('should handle SHOW_LOADER', () => {
    expect(
      rootReducer(undefined, {
        type: types.SHOW_LOADER,
      })
    ).toMatchSnapshot();
  });

  it('should handle HIDE_LOADER', () => {
    expect(
      rootReducer(undefined, {
        type: types.HIDE_LOADER,
      })
    ).toMatchSnapshot();
  });
});
