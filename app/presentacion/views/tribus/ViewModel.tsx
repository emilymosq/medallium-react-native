import React, {useState, useEffect} from "react";
import {TribusUseCase} from "../../../domain/useCases/yokai/YokaiUseCase";
import {TribusInterface} from "../../../domain/entities/Yokai";

export const TribusViewModel = () => {
    const [tribus, setTribus] = useState<TribusInterface[]>([]);
    const [loading, setLoading] = useState(true);

    const getTribus = async () => {
        try {
            const response = await TribusUseCase();
            setTribus(response);
        } catch (error) {
            console.error("Error fetching Tribus:", error);
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            await getTribus();
            setLoading(false);
        };

        fetchData();
    },[]);


    return {
        tribus,
        getTribus,
    }
}
