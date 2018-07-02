import { SET_COMPANIES } from '../actions/types';

export default (state = [], action = {} ) => {
  switch (action.type) {
    case SET_COMPANIES:
      return action.companies;
    default: return state;
  }
}