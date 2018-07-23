import { SET_PRODUCT } from '../actions/types';

export default (state = {}, action = {}) => {
    switch (action.type) {
        case SET_PRODUCT:
            return action.product;
        default: return state;
    }
}