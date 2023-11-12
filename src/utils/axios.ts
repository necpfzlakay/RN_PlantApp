/* eslint-disable arrow-body-style */
import axios from 'axios';
// import Config from 'react-native-config';

// import Storage from './storage';  
const instance = axios.create({
  baseURL: "https://dummy-api-jtg6bessta-ey.a.run.app/",
  timeout: 15 * 1000,
  timeoutErrorMessage: 'change_as_what_you_want',

});
instance.interceptors.request.use(async request => {
  try {
    // const accessToken = await Storage.getItem('userToken');
    // if (accessToken && accessToken !== null) { 
    //   request.headers.authorization = JSON.parse(accessToken);
    // }
  } catch (error) {
    console.warn("QUERY ERROR TRY CATCH", error.message);

  }

  return request;
});

// Add a response interceptor
instance.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    console.warn("AXIOS ERROR-> ", error, error.response.data);
    return Promise.reject(error.response.data);
  },
);

export default instance;
