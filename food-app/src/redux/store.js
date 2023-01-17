import { createStore, applyMiddleware, compose} from 'redux';
import persistStore from 'redux-persist/es/persistStore';
import appReducer from './appReducer';

const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

const store =createStore(appReducer,composeEnhancers(applyMiddleware()))

const persistor =persistStore(store);

export {store, persistor};