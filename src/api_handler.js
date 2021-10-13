import { API_HOST } from "./config"
import axios from 'axios';

const apiServer = axios.create({
    baseURL: `${API_HOST}/api/v1`,
});

export function getSearchResult(params) {
    return apiServer.get('/products', {params})
}