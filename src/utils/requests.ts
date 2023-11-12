/* eslint-disable camelcase */
import instance from './axios'


//! if we want to send file or image we can add this to options
const formdataHeader = { headers: { 'Content-Type': 'multipart/form-data' } }

//! our endpoints are here we can modify them as we want
export const CATEGORIES_GET = () => instance.get('/getCategories')

export const QUESTIONS_GET = () => instance.get('/getQuestions')