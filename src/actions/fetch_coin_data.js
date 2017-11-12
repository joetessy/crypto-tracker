import axios from 'axios';
import { baseUrl } from './../utils/constants';
export const FETCHING_DATA = 'FETCHING_DATA';
export const FETCHING_DATA_SUCCESS = 'FETCHING_DATA_SUCCESS';
export const FETCHING_DATA_FAIL = 'FETCHING_DATA_FAIL';

export default function fetchData(){
  return dispatch => {
    dispatch({type: FETCHING_DATA});
    return axios.get(`${baseUrl}/v1/ticker/?limit=10`)
      .then(res => {
        dispatch({type: FETCHING_DATA_SUCCESS, payload: res.data});
      })
      .catch( err => {
        dispatch({type: FETCHING_DATA_FAIL, payload: err.data});
      });
  };
}
