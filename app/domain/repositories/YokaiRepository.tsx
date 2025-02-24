import {DatosCombateInterface, DetallesYokaiInterface, TribusInterface} from "../entities/Yokai";
import {ApiDeliveryResponse} from "../../data/sources/remote/models/ResponseApiDelivery";


export interface YokaiRepository {
    getAllYokais: () => Promise<DetallesYokaiInterface[]>;
    getAllTribus: () => Promise<TribusInterface[]>;
    getAllDatosCombate: () => Promise<DatosCombateInterface[]>;
}