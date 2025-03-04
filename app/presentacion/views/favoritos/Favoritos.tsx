import React from "react";
import {Text, TouchableOpacity, View, Image} from "react-native";
import {RootStackParamlist} from "../../../../App";
import {DrawerNavigationProp} from "@react-navigation/drawer";
import {useNavigation} from "@react-navigation/native";
import {styles} from "./StylesFavoritos";
import {Filtro} from "../../componentes/Filtro";

type FavoritosScreenNavigationProp = DrawerNavigationProp<RootStackParamlist, 'DrawerNavigator'>;

export const Favoritos = () => {
    const navigation = useNavigation<FavoritosScreenNavigationProp>();
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <Image style={styles.list} source={require("../../../../assets/menu.png")}/>
                </TouchableOpacity>
                <View style={styles.containerText}>
                    <Text style={styles.textCentrado}>Favoritos</Text>
                </View>
            </View>
            <Filtro/>
        </View>
    )
}
