import React from "react";
import {Text, TouchableOpacity, View, Image} from "react-native";
import {DrawerNavigationProp} from "@react-navigation/drawer";
import {RootStackParamlist} from "../../../../App";
import {useNavigation} from "@react-navigation/native";
import {styles} from "./StylesMisYokai";
import {Filtro} from "../../componentes/Filtro";

type MisYokaiScreenNavigationProp = DrawerNavigationProp<RootStackParamlist, 'DrawerNavigator'>;

export const MisYokais = () => {
    const navigation = useNavigation<MisYokaiScreenNavigationProp>();

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <Image style={styles.list} source={require("../../../../assets/menu.png")}></Image>
                </TouchableOpacity>
                <View style={styles.containerText}>
                    <Text style={styles.textCentrado}>Mis Yokai</Text>
                </View>
            </View>
            <Filtro/>
        </View>
    )
}