import { SET_VIDEOS } from './types';
import axios from 'axios';

export function setVideos(videos) {
    return {
        type: SET_VIDEOS,
        videos
    };
}

export function fetchVideos() {
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
                    dispatch(setMarkets(data.markets));
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