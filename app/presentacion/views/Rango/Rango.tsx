import {Image, View, Text, TouchableOpacity, ScrollView, useWindowDimensions, FlatList} from "react-native";
import React, {useEffect} from "react";
import {TextPrincipales} from "../../componentes/TextPrincipales";
import {useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RootStackParamlist} from "../../../../App";
import {CardYoKai} from "../../componentes/CardYoKai";
import {Filtro} from "../../componentes/Filtro";
import YokaiViewModel from "../home/ViewModel";
import {DetallesYokaiInterface} from "../../../domain/entities/Yokai";
import stylesRango from "./StylesRango";
import RenderYokai from "./ItemYokai";

const Rango = () => {
    const { height } = useWindowDimensions();
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamlist>>();
    const { yokais, getYokais } = YokaiViewModel();

    useEffect(() => {
        getYokais();
    }, []);

    return(
        <View style={stylesRango.container}>
            <View style={stylesRango.topSection}>
                <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                    <Image source={require("../../../../assets/back.png")} style={stylesRango.icon}/>
                </TouchableOpacity>
                <TextPrincipales text={"Rango"}/>
            </View>

            <FlatList
                data={yokais}
                renderItem={({ item }: { item: DetallesYokaiInterface }) => <RenderYokai item={item} />}
                keyExtractor={(item, index) => item?.id_detallesYokai?.toString() || ''}
                style={[stylesRango.containerCardYoKai, { maxHeight: height * 0.85 }]}
                initialNumToRender={10} // los que se renderizan recién se abre la app
                windowSize={10} // items por pantalla
                // onEndReached={} evento para llamar por partes evento de desencadenado
                ListFooterComponent={<View style={{ paddingVertical: 10 }}><Text style={{ textAlign: 'center' }}>no hay más elementos</Text></View>}
            />
        </View>
    )
}

export default Rango;