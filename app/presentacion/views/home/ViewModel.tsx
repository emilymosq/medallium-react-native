import { useEffect, useState } from "react";
import { DetallesYokaiInterface } from "../../../domain/entities/Yokai";
import { YokaiUseCase } from "../../../domain/useCases/yokai/YokaiUseCase";

const YokaiViewModel = () => {
    const [yokais, setYokais] = useState<DetallesYokaiInterface[]>([]);
    const [loading, setLoading] = useState(true);
    const [favorites, setFavorites] = useState<Record<string, boolean>>({});

    const getYokais = async () => {
        try {
            const response = await YokaiUseCase();
            setYokais(response);
        } catch (error) {
            console.error("Error fetching Yokais:", error);
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            await getYokais();
            setLoading(false);
        };

        fetchData();
    },[]);

    const toggleFavorite = (id_Yokai: number) => {
        setFavorites((prevFavorites) => ({
            ...prevFavorites,
            [id_Yokai]: !prevFavorites[id_Yokai],
        }));
    };

    return {
        yokais,
        getYokais,
        favorites,
        toggleFavorite,
    };
};

export default YokaiViewModel;
