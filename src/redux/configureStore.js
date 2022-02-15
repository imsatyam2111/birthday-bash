import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import loginReducer from './reducers/isLoggedIn';
import birthdayReducer from './reducers/birthdays'
import loaderReducer from './reducers/loader'
import rootSaga from './sagas/rootSaga';

const reducer = combineReducers({
	loader: loaderReducer,
	login: loginReducer,
	birthday: birthdayReducer 
})

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = createStore(reducer, {}, applyMiddleware(...middleware));

sagaMiddleware.run(rootSaga);

export default store;