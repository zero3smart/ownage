import { SET_MARKETS, SET_COMPANIES, SET_STATES } from './types';
import axios from 'axios';

export function setMarkets(markets) {
  return {
    type: SET_MARKETS,
    markets
  };
}

export function setCompanies(companies) {
  return {
    type: SET_COMPANIES,
    companies
  };
}

export function setStates(states) {
  return {
    type: SET_STATES,
    states
  };
}

export function fetchMarkets() {
  return dispatch => {
    return axios.get(process.env.API_URL + '/api/markets').then(res => {
      if (res.status !== 200) {
        console.log(`There was a problem: ${res.status}`);
        return;
      }
      dispatch(setMarkets(res.data.markets));
    }, err => {

    });

    // fetch("src/data/data.json")
    // .then(response => {
    //   if (response.status !== 200) {
    //     console.log(`There was a problem: ${response.status}`)
    //     return;
    //   }
    //   response.json().then(data => {
    //     dispatch(setMarkets(data.markets));
    //   });
    // });
  }
}

export function fetchCompanies(url) {
  return dispatch => {
    return axios.get(url).then(res => {
      if (res.status !== 200) {
        console.log(`There was a problem: ${res.status}`);
        return;
      }
      dispatch(setCompanies(res.data.companies));
    }, err => {

    });
  }
}

export function fetchStates() {
  return dispatch => {
    return axios.get(process.env.API_URL + '/api/markets/clojure-companies.json?layout=map').then(res => {
      if (res.status !== 200) {
        console.log(`There was a problem: ${res.status}`);
        return;
      }
      dispatch(setStates(res.data.usStates));
      dispatch(setCompanies(res.data.companies));
    }, err => {

    });
  }
}