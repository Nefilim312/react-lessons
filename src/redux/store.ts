import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['filter'],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, compose(applyMiddleware(thunk)));
const persistor = persistStore(store);

export { store, persistor };
