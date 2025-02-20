import * as React from 'react';
import {View, useWindowDimensions, Text, StyleSheet} from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import DescripcionYokai from "./DescripcionYokai";
import EstadisticasYokai from "./EstadisticasYokai";
import EvolucionesYokai from "./EvolucionesYokai";

const FirstRoute = () => (
    <DescripcionYokai

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

export default function TabViewInfo() {
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