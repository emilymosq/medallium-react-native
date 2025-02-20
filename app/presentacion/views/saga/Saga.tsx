import {Image, View, Text, TouchableOpacity, ScrollView} from "react-native";
import CardSaga from "../../componentes/CardSaga";
import React from "react";
import {TextPrincipales} from "../../componentes/TextPrincipales";
import {useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RootStackParamlist} from "../../../../App";
import {styles} from "./StylesSaga";

const Saga = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamlist>>();
    return(
        <View style={styles.container}>
            <View style={styles.topSection}>
                <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                    <Image source={require("../../../../assets/back.png")} style={styles.icon}/>
                </TouchableOpacity>
                <TextPrincipales text={"Saga"}/>
            </View>

            {/*<ScrollView style={styles.containerCardSaga}>*/}
            {/*    <CardSaga nombre={"Yo-kai Watch"}*/}
            {/*               descripcion={"Yo-Kai Watch es el primer juego de la saga de categoria de juego de rol en el que los jugadores capturan y coleccionan criaturas llamadas Yo-kai. " +*/}
            {/*                   "Usando un reloj especial, los jugadores luchan y resuelven problemas causados por estos seres invisibles, mientras avanzan en una historia con batallas por turnos. " +*/}
            {/*                   "El juego mezcla exploración, colección y combate"}*/}
            {/*               />*/}
            {/*</ScrollView>*/}

            <View>
                <Image source={require("../../../../assets/Yo-kai_Watch_Saga1.png")} style={styles.sagaLogo}/>
                <Image source={require("../../../../assets/Yo-kai_Watch_Saga2.png")} style={styles.sagaLogo}/>
                <Image source={require("../../../../assets/Yo-kai_Watch_Saga3.png")} style={styles.sagaLogo}/>
            </View>
        </View>
    )
}

export default Saga;