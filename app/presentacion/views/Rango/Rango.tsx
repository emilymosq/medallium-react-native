import {Image, View, Text, TouchableOpacity, ScrollView, useWindowDimensions, FlatList} from "react-native";
import React, {useEffect} from "react";
import {useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RootStackParamlist} from "../../../../App";
import YokaiViewModel from "../home/ViewModel";
import {DetallesYokaiInterface} from "../../../domain/entities/Yokai";
import stylesRango from "./StylesRango";
import RenderYokai from "./ItemYokai";
import {styles} from "../tribus/StylesTribus";

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
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require("../../../../assets/back.png")} style={stylesRango.icon}/>
                </TouchableOpacity>
                <View style={styles.containerText}>
                    <Text style={styles.textCentrado}>Rango</Text>
                </View>
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