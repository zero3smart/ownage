import { SET_VIDEOS } from '../actions/types';

export default (state = {}, action = {}) => {
    switch (action.type) {
        case SET_VIDEOS:
            return action.videos;
        default: return state;
    }
}