import {Image, View, Text, TouchableOpacity, ScrollView} from "react-native";
import ModalSaga1 from "../../componentes/modales/saga/ModalSaga1";
import ModalSaga2 from "../../componentes/modales/saga/ModalSaga2";
import React, {useState} from "react";
import {TextPrincipales} from "../../componentes/TextPrincipales";
import {useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RootStackParamlist} from "../../../../App";
import {styles} from "./StylesSaga";
import ModalSaga3 from "../../componentes/modales/saga/ModalSaga3";

const Saga = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamlist>>();
    const [modalVisible1, setModalVisible1] = useState(false);
    const [modalVisible2, setModalVisible2] = useState(false);
    const [modalVisible3, setModalVisible3] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.topSection}>
                <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                    <Image source={require("../../../../assets/back.png")} style={styles.icon} />
                </TouchableOpacity>
                <TextPrincipales text={"Saga"} />
            </View>

            {/*<ScrollView style={styles.containerCardSaga}>*/}
            {/*    <CardSaga nombre={"Yo-kai Watch"}*/}
            {/*               descripcion={"Yo-Kai Watch es el primer juego de la saga de categoria de juego de rol en el que los jugadores capturan y coleccionan criaturas llamadas Yo-kai. " +*/}
            {/*                   "Usando un reloj especial, los jugadores luchan y resuelven problemas causados por estos seres invisibles, mientras avanzan en una historia con batallas por turnos. " +*/}
            {/*                   "El juego mezcla exploración, colección y combate"}*/}
            {/*               />*/}
            {/*</ScrollView>*/}

            <View>
                <TouchableOpacity onPress={() => setModalVisible1(true)}>
                    <Image source={require("../../../../assets/Yo-kai_Watch_Saga1.png")}
                       style={styles.sagaLogo}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setModalVisible2(true)}>
                    <Image source={require("../../../../assets/Yo-kai_Watch_Saga2.png")}
                           style={styles.sagaLogo}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setModalVisible3(true)}>
                    <Image source={require("../../../../assets/Yo-kai_Watch_Saga3.png")}
                           style={styles.sagaLogo}/>
                </TouchableOpacity>
            </View>

            <ModalSaga1 modalVisible={modalVisible1} setModalVisible={setModalVisible1}/>
            <ModalSaga2 modalVisible={modalVisible2} setModalVisible={setModalVisible2}/>
            <ModalSaga3 modalVisible={modalVisible3} setModalVisible={setModalVisible3}/>

        </View>
    )
}

export default Saga;