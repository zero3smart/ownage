import { combineReducers } from 'redux';
import markets from './reducers/markets';
import companies from './reducers/companies';
import states from './reducers/states';

export default combineReducers({
  markets,
  companies,
  states
});