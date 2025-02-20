import React, {useEffect} from "react";
import {Image, FlatList, Text, TouchableOpacity, View, ActivityIndicator, ScrollView} from "react-native";
import styles from "./StylesHome";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamlist } from "../../../../App";
import { CardYoKai } from "../../componentes/CardYoKai";
import { TextPrincipales } from "../../componentes/TextPrincipales";
import { Filtro } from "../../componentes/Filtro";
import { AppFonts } from "../../themes/AppTheme";
import YokaiViewModel from "./ViewModel";
import {DetallesYokaiInterface} from "../../../domain/entities/Yokai";

function Home() {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamlist>>();
    const { yokais, getYokais } = YokaiViewModel();

    useEffect(() => {
        getYokais()
    }, [yokais]);

    const renderYokai = ({ item }: { item: DetallesYokaiInterface }) => (
        <TouchableOpacity onPress={() => {
            navigation.navigate("DetailYoKai");
        }}>
            <CardYoKai
                nombre={item.yokai.name}
                nombreJapones={item.nombreJapo}
                iconHeart={require("../../../../assets/Heart.png")}
                imagenYoKai={{uri: item.image}}
                iconTribu={require("../../../../assets/guapo.png")}
                iconElemento={require("../../../../assets/fuego.png")}
                iconRango={require("../../../../assets/rangod.png")}
            />
        </TouchableOpacity>
    );

        return (
            <View style={styles.container}>
                <View style={styles.navbar}>
                    <View style={styles.navbarNombre}>
                        <Image source={require("../../../../assets/logo.png")} style={styles.imagen} />
                        <Text style={{
                            fontSize: 20,
                            fontWeight: "bold",
                            color: "#000",
                            marginLeft: 10,
                        }}>Medallium</Text>
                    </View>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate("Profile");
                    }}>
                        <Image style={styles.imagen} source={{ uri: 'https://i.postimg.cc/yx0JFLjV/Whats-App-Image-2025-02-11-at-10-19-53.jpg' }} />
                    </TouchableOpacity>
                </View>
                <Filtro />
                <View style={styles.containerBotones}>
                    <TouchableOpacity style={styles.botonFiltro} onPress={() => {
                        navigation.navigate("Tribus");
                    }}>
                        <Text style={{ fontFamily: AppFonts.semiBold }}>Tribus</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.botonFiltro2}>
                        <Text style={{ fontFamily: AppFonts.semiBold }}>Elementos</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.botonFiltro3}>
                        <Text style={{ fontFamily: AppFonts.semiBold }}>Rango</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.botonFiltro4}>
                        <Text style={{ fontFamily: AppFonts.semiBold }}>Fase</Text>
                    </TouchableOpacity>
                </View>
                <TextPrincipales text={"Populares"}></TextPrincipales>
                <FlatList
                    data={yokais}
                    renderItem={renderYokai}
                    keyExtractor={(item) => item.id_detallesYokai.toString()}
                    style={styles.containerCardYoKai}
                    initialNumToRender={10}//los aeu renderizan recien se habre al app
                    windowSize={10}//items por pantalla
                   // onEndReached={}evento para lamar por partes evento de desencadenado
                    ListFooterComponent={<View style={{marginBottom: 60, paddingVertical: 10}}><Text style={{textAlign:"center"}}>no hay mas elementos</Text></View>}
                />
            </View>
        );

}

export default Home;

