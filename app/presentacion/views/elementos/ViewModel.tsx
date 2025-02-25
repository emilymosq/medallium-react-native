import React, {useState, useEffect} from "react";
import {ElementosUseCase} from "../../../domain/useCases/yokai/YokaiUseCase";
import {ElementosInterface} from "../../../domain/entities/Yokai";

export const ElementosViewModel = () => {
    const [elemento, setElemento] = useState<ElementosInterface[]>([]);
    const [loading, setLoading] = useState(true);

    const getElementos = async () => {
        try {
            const response = await ElementosUseCase();
            setElemento(response);
        } catch (error) {
            console.error("Error fetching Elementos:", error);
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            await getElementos();
            setLoading(false);
        };

        fetchData();
    },[]);


    return {
        elemento,
        getElementos,
    }
}
