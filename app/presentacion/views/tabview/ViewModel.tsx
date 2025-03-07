import React, { useState, useEffect } from "react";
import { DatosCombateInterface } from "../../../domain/entities/Yokai";
import { DatosCombateUseCase } from "../../../domain/useCases/yokai/YokaiUseCase";

export const DatosCombateViewModel = (idYokai: number) => {
    const [datosCombate, setDatosCombate] = useState<DatosCombateInterface[]>([]);
    const [loading, setLoading] = useState(true);

    const getDatosCombate = async () => {
        try {
            const response = await DatosCombateUseCase();
            // 🔹 Filtramos los datos para que solo coincidan con el `idYokai`
            const datosFiltrados = response.filter((dato: DatosCombateInterface) => dato.yokai.id_Yokai === idYokai);
            setDatosCombate(datosFiltrados);
        } catch (error) {
            console.error("Error fetching Datos combate:", error);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            if (!idYokai) return;
            setLoading(true);
            await getDatosCombate();
            setLoading(false);
        };

        fetchData();
    }, [idYokai]); // 🔹 Se ejecuta cuando cambia el `idYokai`

    return {
        datosCombate,
        loading,
    };
};
