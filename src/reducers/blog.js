import { SET_BLOG } from '../actions/types';

export default (state = {}, action = {}) => {
    switch (action.type) {
        case SET_BLOG:
            return action.blogs;
        default: return state;
    }
}