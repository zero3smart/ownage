import { SET_VIDEO, SET_BLOG, SET_PRODUCT, SET_GAG } from './types';
import axios from 'axios';

export function setVideo(videos) {
    return {
        type: SET_VIDEO,
        videos
    };
}

export function setBlog(blogs) {
    return {
        type: SET_BLOG,
        blogs
    };
}

export function setGag(gags) {
    return {
        type: SET_GAG,
        blogs
    };
}

export function fetchVideo() {
    // return dispatch => {
    //     return axios.get(process.env.API_URL + '/api/markets').then(res => {
    //         if (res.status !== 200) {
    //             console.log(`There was a problem: ${res.status}`);
    //             return;
    //         }
    //         dispatch(setVideos(res.data.markets));
    //     }, err => {

    //     });

    return dispatch => {
        return fetch("data/video.json")
            .then(response => {
                if (response.status !== 200) {
                    console.log(`There was a problem: ${response.status}`)
                    return;
                }
                response.json().then(data => {
                    dispatch(setVideo(data.video));
                });
            });
        };
}

export function fetchBlog() {
    return dispatch => {
        return fetch("data/blog.json")
            .then(response => {
                if (response.status !== 200) {
                    console.log(`There was a problem: ${response.status}`)
                    return;
                }
                response.json().then(data => {
                    dispatch(setBlog(data.blog));
                });
            });
    };
}

export function fetchProduct() {
    return dispatch => {
        return fetch("data/product.json")
            .then(response => {
                if (response.status !== 200) {
                    console.log(`There was a problem: ${response.status}`)
                    return;
                }
                response.json().then(data => {
                    dispatch(setProduct(data.product));
                });
            });
    };
}

export function fetchGag() {
    return dispatch => {
        return fetch("data/gag.json")
            .then(response => {
                if (response.status !== 200) {
                    console.log(`There was a problem: ${response.status}`)
                    return;
                }
                response.json().then(data => {
                    dispatch(setGag(data.gag));
                });
            });
    };
}