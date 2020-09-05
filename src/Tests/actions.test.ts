import * as actions from '../redux/actions';
import * as types from '../redux/types';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Actions', () => {
  it('should show loader', () => {
    const expectedAction = {
      type: types.SHOW_LOADER,
    };

    expect(actions.showLoader()).toEqual(expectedAction);
  });

  it('should hide loader', () => {
    const expectedAction = {
      type: types.HIDE_LOADER,
    };

    expect(actions.hideLoader()).toEqual(expectedAction);
  });

  it('should change filter', () => {
    const filter = {
      search: 'some text',
      searchBy: 'genres',
      sortBy: 'release_date',
    } as IFilter;
    const expectedAction = {
      type: types.CHANGE_FILTER,
      payload: filter,
    };

    expect(actions.changeFilter(filter)).toEqual(expectedAction);
  });

  it('should change filter and then reset', () => {
    const filter = {
      search: 'some text',
      searchBy: 'genres',
      sortBy: 'release_date',
    } as IFilter;
    const resetedFilter = {
      search: '',
      searchBy: 'title',
      sortBy: 'release_date',
    } as IFilter;

    const expectedActions = [
      { type: types.CHANGE_FILTER, payload: filter },
      { type: types.CHANGE_FILTER, payload: resetedFilter },
    ];
    const store = mockStore({});

    store.dispatch(actions.changeFilter(filter));
    store.dispatch(actions.resetFilter());
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should request films', async () => {
    const expectedActions = [
      { type: types.SHOW_LOADER },
      { type: types.HIDE_LOADER },
      { type: types.REQUEST_MOVIES, payload: [] },
    ];
    const store = mockStore({});

    //@ts-ignore
    const films = await store.dispatch(actions.requestMovies());

    expect(films.length).not.toEqual(0);
    store.getActions()[2].payload = [];
    expect(store.getActions()).toEqual(expectedActions);
  });
});
