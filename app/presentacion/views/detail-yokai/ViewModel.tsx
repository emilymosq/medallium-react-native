import React, {useState, useEffect} from "react";
import {DatosCombateInterface} from "../../../domain/entities/Yokai";
import {DatosCombateUseCase} from "../../../domain/useCases/yokai/YokaiUseCase";

export const DetailYokaiViewModel = () => {
    const [datosCombate, setDatosCombate] = useState<DatosCombateInterface[]>([]);
    const [loading, setLoading] = useState(true);

    const getDatosCombate = async () => {
        try {
            const response = await DatosCombateUseCase();
            setDatosCombate(response);
        } catch (error) {
            console.error("Error fetching Datos combate:", error);
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            await getDatosCombate();
            setLoading(false);
        };

        fetchData();
    },[]);


    return {
        datosCombate,
        getDatosCombate,
    }
}
