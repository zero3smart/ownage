import { SET_STATES } from '../actions/types';

export default (state = [], action = {} ) => {
  switch (action.type) {
    case SET_STATES:
      return action.states;
    default: return state;
  }
}