import {DatosCombateInterface, DetallesYokaiInterface, ElementosInterface, TribusInterface} from "../entities/Yokai";
import {ApiDeliveryResponse} from "../../data/sources/remote/models/ResponseApiDelivery";


export interface YokaiRepository {
    getAllYokais: () => Promise<DetallesYokaiInterface[]>;
    getAllTribus: () => Promise<TribusInterface[]>;
    getAllElementos: () => Promise<ElementosInterface[]>;
    getAllDatosCombate: () => Promise<DatosCombateInterface[]>;
}