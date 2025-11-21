import axios from 'axios';

const BASE_URL = 'https://www.googleapis.com/youtube/v3';

export const fetchFromAPI = async (url, params = {}) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, {
    params: {
      key: process.env.REACT_APP_GOOGLE_API_KEY,
      ...params,
    },
  });
  return data;
};
