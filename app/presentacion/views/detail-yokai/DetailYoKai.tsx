import React from "react";
import { View, Image, Text } from "react-native";
import { styles } from "./StylesDetailYoKai";
import TabViewYokai from "../tabview/TabView";
import TabViewExample from "../tabview/TabView";

const DetailYoKai = () => {
    return (
        <View style={styles.container}>
            <View style={styles.topSection}>
                <Image source={require("../../../../assets/back.png")} style={styles.icon} />
                <Image source={require("../../../../assets/heartw.png")} style={styles.icon} />
            </View>
            <View style={styles.yoKaiContainer}>
                <View style={styles.yoKai}>
                    <Text style={styles.yoKaiName}>Jibanyan</Text>
                    <Text style={styles.yoKaiName}>ジバニャン</Text>
                    <Image source={require("../../../../assets/jibanyan2.png")} style={styles.yoKaiImage} />
                </View>
                <View style={styles.tribu}>
                    <Image source={require("../../../../assets/guapo.png")} style={styles.tribuImagen} />
                </View>
            </View>
            <View style={styles.bottomSection}>
                <Image source={require("../../../../assets/addyokai.png")} style={styles.iconAdd} />
                <View style={styles.extra}>
                    <Text>Fuego</Text>
                    <Image source={require("../../../../assets/fuego.png")} style={styles.icon} />
                </View>
                <View style={styles.extra}>
                    <Text>Rango</Text>
                    <Image source={require("../../../../assets/rangod.png")} style={styles.icon} />
                </View>
            </View>
            <TabViewExample/>
        </View>
    );
};

export default DetailYoKai;
