import axios, { AxiosInstance } from 'axios';

const apiBaseUrl = `${process.env.REACT_APP_API_BASE_URL}`;
const apiKey = `${process.env.REACT_APP_API_KEY}`;

const $axios: AxiosInstance = axios.create({
  baseURL: apiBaseUrl,
  params: {
    api_key : apiKey
  }
});

export default $axios;
