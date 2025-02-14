import React from "react";
import { View, Image, Text } from "react-native";
import { styles } from "./StylesDetailYoKai";
import {ElementoRareza} from "../../componentes/ElementoRareza";
import {TopInfoYokai} from "../../componentes/TopInfoYokai";
import TabViewInfo from "../tabview/TabView";

const DetailYoKai = () => {
    return (
        <View style={styles.container}>
            <View style={styles.topSection}>
                <Image source={require("../../../../assets/back.png")} style={styles.icon} />
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
