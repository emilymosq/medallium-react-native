import React, {useState, useEffect} from "react";
import {TribusUseCase} from "../../../domain/useCases/yokai/YokaiUseCase";
import {TribusInterface} from "../../../domain/entities/Yokai";

export const TribusViewModel = () => {
    const [tribus, setTribus] = useState<TribusInterface[]>([]);

    const getTribus = async () => {
        try {
            const response = await TribusUseCase();
            setTribus(response);
        } catch (error) {
            console.error("Error fetching Tribus:", error);
        }
    }

    getTribus()

    return {
        tribus,
        getTribus,
    }
}
