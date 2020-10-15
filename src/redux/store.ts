import { createStore, applyMiddleware, Store } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';
import { MakeStore, createWrapper } from 'next-redux-wrapper';

let store: Store | undefined;

const makeStore: MakeStore<IState> = () => {
  return createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
};

const wrapper = createWrapper<IState>(makeStore, { debug: true });

export { store, wrapper };
