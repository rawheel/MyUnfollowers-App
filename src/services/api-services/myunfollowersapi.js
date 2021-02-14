import axios from 'axios'

export function myunfollowersgithub(params) {
    return axios.get('http://127.0.0.1:5000/github/?username'+params);
  }

