import React, { memo } from 'react';
import {TribusInterface} from "../../../domain/entities/Yokai";
import CardTribu from "../../componentes/CardTribu";

interface Props{
    item: TribusInterface;
}

const RenderTribus = ({ item }: Props) => {
    return (
        <CardTribu
            id_Tribu={item.id_Tribu}
            nombre={item.nombre}
            nombreJapones={item.nombreJapones}
            iconTribu={require("../../../../assets/guapa2.png")}/>
    );
};

//memo memoriza la salida renderizada y evita renderizaciones innecesarias.
export default memo(RenderTribus);
