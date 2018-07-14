import { SET_VIDEO, SET_BLOG } from './types';
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
                    dispatch(setVideo(data.videos));
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
                    dispatch(setBlog(data.blogs));
                });
            });
    };
}

// export function fetchCompanies(url) {
//   return dispatch => {
//     return axios.get(url).then(res => {
//       if (res.status !== 200) {
//         console.log(`There was a problem: ${res.status}`);
//         return;
//       }
//       dispatch(setCompanies(res.data.companies));
//     }, err => {

//     });
//   }
// }

// export function fetchStates() {
//   return dispatch => {
//     return axios.get(process.env.API_URL + '/api/markets/clojure-companies.json?layout=map').then(res => {
//       if (res.status !== 200) {
//         console.log(`There was a problem: ${res.status}`);
//         return;
//       }
//       dispatch(setStates(res.data.usStates));
//       dispatch(setCompanies(res.data.companies));
//     }, err => {

//     });
//   }
// }