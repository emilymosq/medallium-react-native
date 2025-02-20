import React from "react";
import {View, Image, Text, TouchableOpacity} from "react-native";
import { styles } from "./StylesDetailYoKai";
import {ElementoRareza} from "../../componentes/ElementoRareza";
import {TopInfoYokai} from "../../componentes/TopInfoYokai";
import TabViewInfo from "../tabview/TabView";
import {useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RootStackParamalist} from "../../../../App";

const DetailYoKai = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamalist>>();
    return (
        <View style={styles.container}>
            <View style={styles.topSection}>
                <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                    <Image source={require("../../../../assets/back.png")} style={styles.icon}/>
                </TouchableOpacity>
                <Image source={require("../../../../assets/heartw.png")} style={styles.icon} />
            </View>
            <TopInfoYokai nombre={"Jibanyan"} nombreJapones={"ジバニャン"} yokaiImagen={require("../../../../assets/jibanyan2.png")} tribuImagen={require("../../../../assets/guapo.png")}/>
            <View style={styles.bottomSection}>
                <Image source={require("../../../../assets/addyokai.png")} style={styles.iconAdd} />
                <ElementoRareza
                    text={"Fuego"}
                    icon={require("../../../../assets/fuego.png")}/>
                <ElementoRareza
                    text={"Rango"}
                    icon={require("../../../../assets/rangod.png")}/>
            </View>
            <TabViewInfo/>
        </View>
    );
};

export default DetailYoKai;
