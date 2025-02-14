import {Image, View, Text, TouchableOpacity, ScrollView} from "react-native";
import CardTribu from "../../componentes/CardTribu";
import React from "react";
import {styles} from "./StylesTribus";
import {TextPrincipales} from "../../componentes/TextPrincipales";
import {CardYoKai} from "../../componentes/CardYoKai";

const Tribus = () => {
    return(
        <View style={styles.container}>
            <View style={styles.topSection}>
                <Image source={require("../../../../assets/back.png")} style={styles.icon} />
                <TextPrincipales text={"Tribus"}/>
            </View>
            <ScrollView style={styles.containerCardYoKai}>
                <CardTribu/>
            </ScrollView>
        </View>
    )
}

export default Tribus;