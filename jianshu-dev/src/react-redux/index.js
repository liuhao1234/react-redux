import { createStore,applyMiddleware,compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = applyMiddleware(thunk);
const store = createStore(
    reducers,
    composeEnhancers(middlewares)
);

export default store;