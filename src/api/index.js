import axios from 'axios';
import * as urls from './url';

export const getThemAll = () => axios.get(urls.POKE_URL);
