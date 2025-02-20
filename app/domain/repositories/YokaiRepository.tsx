import {YokaiInterface} from "../entities/Yokai";
import {ApiDeliveryResponse} from "../../data/sources/remote/models/ResponseApiDelivery";


export interface YokaiRepository {
    getAllYokais: () => Promise<ApiDeliveryResponse>;
}