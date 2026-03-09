import axios from "axios";


export const searchAPI = axios.create({
    baseURL: "https://www.thecocktaildb.com/api/json/v1/1/",
    timeout: 50000,
});