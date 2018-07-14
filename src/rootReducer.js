import { combineReducers } from 'redux';
import video from './reducers/video';
import blog from './reducers/blog';

export default combineReducers({
    video,
    blog
});