import { useEffect, useState } from "react";
import { DetallesYokaiInterface } from "../../../domain/entities/Yokai";
import { YokaiUseCase } from "../../../domain/useCases/yokai/YokaiUseCase";

const YokaiViewModel = () => {
    const [yokais, setYokais] = useState<DetallesYokaiInterface[]>([]);


    const getYokais = async () => {
        try {
            const response = await YokaiUseCase();
            setYokais(response.data);
            console.log(response.data);
            console.log(response);
        } catch (error) {
            console.error("Error fetching Yokais:", error);
        }
    }

    getYokais()

    return {
        yokais,
    };
};

export default YokaiViewModel;
