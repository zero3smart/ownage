import { SET_GAG } from '../actions/types';

export default (state = {}, action = {}) => {
    switch (action.type) {
        case SET_GAG:
            return action.gag;
        default: return state;
    }
}