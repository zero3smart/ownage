import { SET_MARKETS } from '../actions/types';

export default (state = [], action = {} ) => {
  switch (action.type) {
    case SET_MARKETS:
      return action.markets;
    default: return state;
  }
}