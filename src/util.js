import axios from "axios";

const API_URL = "https://localhost:44392/api"

export const callAPI = (endpoint, method = 'GET', body) => {
    try {
        return axios({
            method: method,
            url: `${API_URL}/${endpoint}`,
            data: body
        });
    } catch (err) {
        console.log(err);
    }
};