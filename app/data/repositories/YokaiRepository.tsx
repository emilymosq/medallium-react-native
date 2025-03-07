import { AxiosError } from "axios";
import { ApiDeliveryResponse } from "../sources/remote/models/ResponseApiDelivery";
import { ApiDelivery } from "../sources/remote/api/ApiDelivery";
import {YokaiRepository} from "../../domain/repositories/YokaiRepository";
import {
    DetallesYokaiInterface,
    YokaiInterface,
    TribusInterface,
    ElementosInterface,
    DatosCombateInterface
} from "../../domain/entities/Yokai";

export class YokaiRepositoryImpl implements YokaiRepository{
    async getAllYokais(): Promise<DetallesYokaiInterface[]> {
        try {
            const response = await ApiDelivery.get("/detalles/get-detallesYokai");

            return Promise.resolve(response.data);
        } catch (error) {
            let e = (error as AxiosError);
            console.log("Error: " + JSON.stringify(e.response?.data));
            return Promise.resolve(JSON.parse(JSON.stringify(e.response?.data)));
        }
    }

    async getAllTribus(): Promise<TribusInterface[]> {
        try {
            const response = await ApiDelivery.get("/tribus/get-tribus");
            return Promise.resolve(response.data);
        } catch (error) {
            let e = (error as AxiosError);
            console.log("Error: " + JSON.stringify(e.response?.data));
            return Promise.resolve(JSON.parse(JSON.stringify(e.response?.data)));
        }
    }

    async getAllElementos(): Promise<ElementosInterface[]> {
        try {
            const response = await ApiDelivery.get("/elemento/get-all-elementos");
            return Promise.resolve(response.data);
        } catch (error) {
            let e = (error as AxiosError);
            console.log("Error: " + JSON.stringify(e.response?.data));
            return Promise.resolve(JSON.parse(JSON.stringify(e.response?.data)));
        }
    }

    async getAllDatosCombate(): Promise<DatosCombateInterface[]>{
        try {
            const response = await ApiDelivery.get("/datosCombate/get-tDatosCombate");
            return Promise.resolve(response.data);
        } catch (error) {
            let e = (error as AxiosError);
            console.log("Error: " + JSON.stringify(e.response?.data));
            return Promise.resolve(JSON.parse(JSON.stringify(e.response?.data)));
        }
    }

    async getAddFavorito(userId: number, yokaiId: number): Promise<boolean>{
        try {
            await ApiDelivery.post("/favoritos/add", null, {
                params: { userId, yokaiId },
            });
            return Promise.resolve(true);
        } catch (error) {
            let e = error as AxiosError;
            console.log("Error al agregar favorito: " + JSON.stringify(e.response?.data));
            return Promise.resolve(false);
        }
    }
}
