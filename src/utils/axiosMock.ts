import axios from './axios';
import AxiosMockAdapter from 'axios-mock-adapter';

const axiosMockAdapter = new AxiosMockAdapter(axios, { delayResponse: 200 });

export default axiosMockAdapter;
