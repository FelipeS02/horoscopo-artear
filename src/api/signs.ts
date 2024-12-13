import { api_key, api_url } from '@/utils/config';
import axios from 'axios';

const signsApi = axios.create({
  baseURL: `${api_url}/zodiac_signs`,
  headers: {
    Authorization: api_key,
  },
});

export default signsApi;
