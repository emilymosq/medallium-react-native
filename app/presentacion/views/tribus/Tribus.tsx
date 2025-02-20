import React, { useEffect } from 'react';
import {Image, View, Text, TouchableOpacity, FlatList} from "react-native";
import {TextPrincipales} from "../../componentes/TextPrincipales";
import {useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RootStackParamlist} from "../../../../App";
import {styles} from "./StylesTribus";
import { TribusInterface} from "../../../domain/entities/Yokai";
import {TribusViewModel} from "./ViewModel"
import RenderYokai from "../home/ItemYokai";
import RenderTribus from "./ItemTribus";

const Tribus = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamlist>>();
    const {tribus, getTribus} = TribusViewModel();

    useEffect(() => {
        getTribus();
    }, []);

    // Accede de manera segura a id_detallesYokai, convierte a cadena o devuelve una cadena vacía si está indefinido
    const keyExtractor = (item: TribusInterface) => item?.id_Tribu?.toString() || '';

    return(
        <View style={styles.container}>
            <View style={styles.topSection}>
                <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                <Image source={require("../../../../assets/back.png")} style={styles.icon}/>
                </TouchableOpacity>
                <TextPrincipales text={"Tribus"}/>
            </View>
            <View style={styles.containerCardTribu}>
                <FlatList
                    data={tribus}
                    renderItem={({ item }: { item: TribusInterface }) => <RenderTribus item={item} />}
                    keyExtractor={keyExtractor}
                    initialNumToRender={10}
                    windowSize={10}
                    ListFooterComponent={<View style={{paddingVertical: 10 }}><Text style={{ textAlign: 'center' }}>no hay más elementos</Text></View>}
                />
            </View>
        </View>
    )
}

export default Tribus;