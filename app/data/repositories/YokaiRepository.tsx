import { AxiosError } from "axios";
import { ApiDeliveryResponse } from "../sources/remote/models/ResponseApiDelivery";
import { ApiDelivery } from "../sources/remote/api/ApiDelivery";
import {YokaiRepository} from "../../domain/repositories/YokaiRepository";
import {YokaiInterface} from "../../domain/entities/Yokai";

export class YokaiRepositoryImpl implements YokaiRepository{
    async getAllYokais(): Promise<ApiDeliveryResponse> {
        try {
            const response = await ApiDelivery.get("/detalles/get-detallesYokai");
            return Promise.resolve(response.data);
        } catch (error) {
            let e = (error as AxiosError);
            console.log("Error: " + JSON.stringify(e.response?.data));
            return Promise.resolve(JSON.parse(JSON.stringify(e.response?.data)) as ApiDeliveryResponse);
        }
    }
}
