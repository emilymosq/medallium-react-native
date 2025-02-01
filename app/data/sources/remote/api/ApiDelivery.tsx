import axios from "axios";

const ApiDelivery = axios.create({
    baseURL: "http://192.168.1.139:3305/api",
    headers: {
        "Content-Type": "application/json",
    },
})

export {ApiDelivery};