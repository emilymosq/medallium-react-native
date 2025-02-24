import {Image, View, Text, TouchableOpacity, ScrollView, FlatList} from "react-native";
import React, {useEffect} from "react";
import {TextPrincipales} from "../../componentes/TextPrincipales";
import {useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RootStackParamlist} from "../../../../App";
import {styles} from "./StylesElementos";
import CardElemento from "../../componentes/CardElemento";
import {ElementosViewModel} from "./ViewModel"
import {ElementosInterface} from "../../../domain/entities/Yokai";
import RenderElementos from "./ItemElementos";

const Elementos = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamlist>>();
    const {elemento, getElementos} = ElementosViewModel();

    useEffect(() => {
        getElementos();
    }, []);

    return(
        <View style={styles.container}>
            <View style={styles.topSection}>
                <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                <Image source={require("../../../../assets/back.png")} style={styles.icon}/>
                </TouchableOpacity>
                <TextPrincipales text={"Elementos"}/>
            </View>
            {/*<ScrollView style={styles.containerCardElementos}>*/}
            {/*    <CardElemento a_name={"Fuego"}*/}
            {/*               descripcion={"El fuego quema la tierra. Es fuerte contra tierra, pero se apaga con agua."}*/}
            {/*               image={require("../../../../assets/fuego.png")}/>*/}
            {/*</ScrollView>*/}
            <View style={styles.containerCardElementos}>
                <FlatList
                    data={elemento}
                    renderItem={({ item }: { item: ElementosInterface }) => <RenderElementos item={item} />}
                    keyExtractor={(item) => item?.id_elemento?.toString() || ''}
                    initialNumToRender={10}
                    windowSize={10}
                    ListFooterComponent={<View style={{paddingVertical: 10 }}><Text style={{ textAlign: 'center' }}>no hay más elementos</Text></View>}
                />
            </View>
        </View>
    )
}

export default Elementos;