import { YokaiRepositoryImpl } from "../../../data/repositories/YokaiRepository";
import { YokaiRepository } from "../../repositories/YokaiRepository";
import { ApiDeliveryResponse } from "../../../data/sources/remote/models/ResponseApiDelivery";
import { DetallesYokaiInterface } from "../../../domain/entities/Yokai";

const {getAllYokais} = new YokaiRepositoryImpl();

export const YokaiUseCase = async (): Promise<ApiDeliveryResponse> => {
    return await getAllYokais();
}
