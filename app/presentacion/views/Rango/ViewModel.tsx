import {useEffect, useState} from "react";
import {RangosInterface} from "../../../domain/entities/Yokai";
import {RangosUseCase} from "../../../domain/useCases/yokai/YokaiUseCase";

export const RangosViewModel = () => {
    const [rango, setRango] = useState<RangosInterface[]>([]);

    const getRangos = async () => {
        try {
            const response = await RangosUseCase();
            setRango(response);
        } catch (error) {
            console.error("Error fetching Elementos:", error);
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            await getRangos();
        };

        fetchData();
    },[]);


    return {
        rango,
        getRangos,
    }
}