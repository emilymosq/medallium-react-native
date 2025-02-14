import {Image, Text, View, StyleSheet} from "react-native";
import React from "react";
import {AppColors, AppFonts} from "../themes/AppTheme";

interface Props{
    nombre: string,
    nombreJapones: string,
    yokaiImagen: any,
    tribuImagen: any
}

export const TopInfoYokai = ({nombre, nombreJapones, yokaiImagen, tribuImagen}: Props) => {
    return(
        <View style={styles.yoKaiContainer}>
            <View style={styles.yoKai}>
                <Text style={styles.yoKaiName}>{nombre}</Text>
                <Text style={styles.yoKaiName}>{nombreJapones}</Text>
                <Image source={yokaiImagen} style={styles.yoKaiImage} />
            </View>
            <View style={styles.tribu}>
                <Image source={tribuImagen} style={styles.tribuImagen} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    yoKaiContainer: {
        alignItems: "center",
        width: "100%",
    },
    yoKai: {
        width: 280,
        height: 280,
        backgroundColor: AppColors.tribuGuapo,
        borderRadius: 200,
        alignItems: "center",
        justifyContent: "center",
    },
    yoKaiName: {
        fontSize: 20,
        fontFamily: AppFonts.semiBold,
    },
    yoKaiImage: {
        width: 160,
        height: 160,
        resizeMode: "contain",
        marginVertical: 5,
    },
    tribu:{
        width: "100%",
        justifyContent:"center",
        alignItems: "center",
        bottom: 5,
        marginBottom: 10
    },
    tribuImagen: {
        width: 55,
        height: 55,
        resizeMode: "contain",
        position: "absolute"
    },
})