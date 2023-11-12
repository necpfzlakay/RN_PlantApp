/* eslint-disable arrow-body-style */
import axios from 'axios';


//! interceptors allows to manage requests
//! to check before and after

const instance = axios.create({
  baseURL: "https://dummy-api-jtg6bessta-ey.a.run.app/",
  timeout: 15 * 1000,
  timeoutErrorMessage: 'change_as_what_you_want',

});
instance.interceptors.request.use(async request => {
  try {
    //! we can manipulate data with this block
    //! such as adding auth header 
    //!! request.headers.authorization = token
  } catch (error) {
    //! if there is a problem sending request throws here
    console.warn("QUERY ERROR TRY CATCH", error.message);
  }

  return request;
});

// Add a response interceptor
instance.interceptors.response.use(
  response => {
    //! status ok 200 response
    return response.data;
  },
  error => {
    //! if status !200 throws this block and we can handle with error management
    console.warn("AXIOS ERROR-> ", error, error.response.data);
    return Promise.reject(error.response.data);
  },
);

export default instance;
