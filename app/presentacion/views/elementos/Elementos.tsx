import {Image, View, Text, TouchableOpacity, ScrollView} from "react-native";
import React from "react";
import {TextPrincipales} from "../../componentes/TextPrincipales";
import {useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RootStackParamalist} from "../../../../App";
import {styles} from "./StylesElementos";
import CardElemento from "../../componentes/CardElemento";

const Elementos = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamalist>>();
    return(
        <View style={styles.container}>
            <View style={styles.topSection}>
                <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                <Image source={require("../../../../assets/back.png")} style={styles.icon}/>
                </TouchableOpacity>
                <TextPrincipales text={"Elementos"}/>
            </View>
            <ScrollView style={styles.containerCardElementos}>
                <CardElemento a_name={"Fuego"}
                           descripcion={"El fuego quema la tierra. Es fuerte contra tierra, pero se apaga con agua."}
                           image={require("../../../../assets/fuego.png")}/>
            </ScrollView>
        </View>
    )
}

export default Elementos;