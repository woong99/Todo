import {combineReducers} from 'redux';
import todos from './todos';
import today from './today';

const reducer = combineReducers({
  todos,
  today,
});

export default reducer;
