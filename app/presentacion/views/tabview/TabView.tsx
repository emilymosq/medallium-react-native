import React from 'react';
import {useWindowDimensions, View} from "react-native";
import {SceneMap, TabBar} from "react-native-tab-view";

const DescriptionYokai = () => (
    <View style={{flex: 1, backgroundColor: '#ff4081'}}/>
);

const EstadisticasYokai = () => (
    <View style={{flex: 1, backgroundColor: '#673ab7'}}/>
)

const FusionesYokai = () => (
    <View style={{flex: 1, backgroundColor: '#3a66b7'}}/>
);


function TabView() {
    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        {key: 'first', title: 'First'},
        {key: 'second', title: 'Second'},
        {key: 'third', title: 'Third'},
    ]);

    const renderScene = SceneMap({
        first: DescriptionYokai,
        second: EstadisticasYokai,
        third: FusionesYokai,
    });


    return (
        <View></View>
    );
}

export default TabView;