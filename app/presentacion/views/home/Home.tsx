import React from "react";
import {Image, ScrollView, Text, TextInput, TouchableOpacity, View} from "react-native";
import stylesHome from "./StylesHome";
import styles from "./StylesHome";
import {useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RootStackParamalist} from "../../../../App";
import {CardYoKai} from "../../componentes/CardYoKai";
import {TextPrincipales} from "../../componentes/TextPrincipales";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {Filtro} from "../../componentes/Filtro";


function Home () {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamalist>>();
    return (
        <View style={styles.container}>
            <View style={styles.navbar}>
                <View style={styles.navbarNombre}>
                    <Image source={require("../../../../assets/logo.png")} style={styles.imagen} ></Image>
                    <Text style={{
                        fontSize: 20,
                        fontWeight: "bold",
                        color: "#000",
                        marginLeft: 10,
                    }}>Medallium</Text>
                </View>
                <TouchableOpacity onPress={()=>{
                    navigation.navigate("Profile");
                }}>
                    <Image style={styles.imagen} source={require('../../../../assets/user.jpg')} />
                </TouchableOpacity>
            </View>
            <Filtro/>
            <View style={styles.containerBotones}>
                <TouchableOpacity style={styles.botonFiltro} onPress={() => {
                    navigation.navigate("Tribus");
                }}>
                    <Text>Tribus</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botonFiltro2}>
                    <Text>Elementos</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botonFiltro3}>
                    <Text>Rango</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botonFiltro4}>
                    <Text>Fase</Text>
                </TouchableOpacity>
            </View>
            <TextPrincipales text={"Populares"}></TextPrincipales>

            <ScrollView style={styles.containerCardYoKai}>
                <TouchableOpacity onPress={()=>{
                    navigation.navigate("DetailYoKai");
                }}>
                    <CardYoKai nombre={"Jibanyan"}
                              nombreJapones={"ジバニャン"}
                              iconHeart={require("../../../../assets/Heart.png")}
                              imagenYoKai={require("../../../../assets/jibanyan.png")}
                              iconTribu={require("../../../../assets/guapo.png")}
                              iconElemento={require("../../../../assets/fuego.png")}
                              iconRango={require("../../../../assets/rangod.png")}>
                    </CardYoKai>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

export default Home;