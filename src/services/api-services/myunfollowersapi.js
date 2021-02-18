import axios from 'axios'

export function githubAPI(params) {
  
    return axios.get(`https://myunfollowersapi.herokuapp.com/githubapi/${params}`);
     //return axios.get(`http://127.0.0.1:5000/githubapi/${params}`);
  }

