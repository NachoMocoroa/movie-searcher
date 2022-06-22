import $axios from './axios-conf';

const REQUEST_URL = `${process.env.REACT_APP_REQUEST_URL}`;
const SEARCH_URL = `${process.env.REACT_APP_SEARCH_URL}`;

const axiosRequest = async (request: string) => {
    try {
        const json = await $axios.get(request);
        return json;
    } catch (e) {
        return e;
    }
};

const requestData = () => {
    const request = `${REQUEST_URL}`;
    return axiosRequest(request);
};

const searchData = (query: string) => {
    const request = `${SEARCH_URL}&query=${query}`;
    return axiosRequest(request);
};

const DataService = {
    requestData,
    searchData
};

export default DataService;
