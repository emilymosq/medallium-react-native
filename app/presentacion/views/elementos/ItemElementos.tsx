import React, { memo } from 'react';
import {ElementosInterface, TribusInterface} from "../../../domain/entities/Yokai";
import CardTribu from "../../componentes/CardTribu";
import CardElemento from "../../componentes/CardElemento";

interface Props{
    item: ElementosInterface;
}

const RenderElementos = ({ item }: Props) => {
    return (
        <CardElemento
            id_Elementos={item.id_elemento}
            a_name={item.a_name}
            descripcion={item.descripcion}
            image={{uri: item.image}}/>
    );
};

//memo memoriza la salida renderizada y evita renderizaciones innecesarias.
export default memo(RenderElementos);
