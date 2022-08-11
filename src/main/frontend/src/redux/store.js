import {combineReducers, createStore} from 'redux';
import reducer from './modules/reducers';

const store = createStore(reducer);

export default store;
