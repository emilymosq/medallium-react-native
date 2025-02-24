import * as React from 'react';
import {View, useWindowDimensions, Text, StyleSheet} from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import DescripcionYokai from "./DescripcionYokai";
import EstadisticasYokai from "./EstadisticasYokai";
import EvolucionesYokai from "./EvolucionesYokai";
import {DatosCombateInterface, DetallesYokaiInterface} from "../../../domain/entities/Yokai";
import {useEffect} from "react";
import {DetailYokaiViewModel} from "../detail-yokai/ViewModel";

interface TabViewInfoProps {
    yokai: DetallesYokaiInterface;
    estadisticas: DatosCombateInterface;
}

export default function TabViewInfo({ yokai, estadisticas }: TabViewInfoProps) {

    const comidas = yokai.comida.split(", ");

const FirstRoute = () => (
    <DescripcionYokai
        descripcion={yokai.descripcion}
        habilidad={""}
        comidaYK1={comidas[0]}
        comidaYK2={comidas[1]}
        comidaYK3={comidas[2]}
        medalla={{uri: yokai.medalla}}
    />
);
const SecondRoute = () => (
    <EstadisticasYokai
        pv={342}
        fuerza={172}
        espiritu={48}
        defensa={109}
        velocidad={221}
        total={892}
    />
);

const ThirdRoute = () => (
    <EvolucionesYokai
        imageYokai={require("../../../../assets/espinyan.png")}
        nombreYokai={"Espinyan"}
    />
);
    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'Descripción' },
        { key: 'second', title: 'Estadísticas' },
        { key: 'third', title: 'Evoluciones' },
    ]);

    const renderScene = SceneMap({
        first: FirstRoute,
        second: SecondRoute,
        third: ThirdRoute,
    });

    const renderTabBar = (props: any) => (
        <TabBar
            {...props}
            activeColor={'black'}
            inactiveColor={'#525252'}
            style={{backgroundColor: '#E1E1E1'}}
            indicatorStyle={{ backgroundColor: 'black', height: 2}}
        />
    );
    const { datosCombate, getDatosCombate } = DetailYokaiViewModel(); // Usar el ViewModel para obtener los datos

    useEffect(() => {
        // Llamar al ViewModel para obtener los datos de combate
        getDatosCombate();
    }, []);

    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            renderTabBar={renderTabBar}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
            style={styles.container}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        width: "90%",
        flex: 1,
        backgroundColor: '#DCDCDC',
        borderRadius: 25,
        marginBottom: 20,
    },
})