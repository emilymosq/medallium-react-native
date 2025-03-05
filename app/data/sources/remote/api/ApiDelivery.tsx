import axios from "axios";

const ApiDelivery = axios.create({
    baseURL: "http://172.20.16.1:8080/api",
    headers: {
        "Content-Type": "application/json",
    },
})

export {ApiDelivery};