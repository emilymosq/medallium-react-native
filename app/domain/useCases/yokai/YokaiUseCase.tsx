import { YokaiRepositoryImpl } from "../../../data/repositories/YokaiRepository";
import { YokaiRepository } from "../../repositories/YokaiRepository";
import { ApiDeliveryResponse } from "../../../data/sources/remote/models/ResponseApiDelivery";
import { DetallesYokaiInterface } from "../../../domain/entities/Yokai";

const {getAllYokais} = new YokaiRepositoryImpl();
const {getAllTribus} = new YokaiRepositoryImpl();

export const YokaiUseCase = async () => {
    return await getAllYokais();
}

export const TribusUseCase = async () => {
    return await getAllTribus();
}
