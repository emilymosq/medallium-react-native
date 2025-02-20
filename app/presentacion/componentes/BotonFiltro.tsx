import React from "react";
import {Image, Text, View, StyleSheet, TouchableOpacity} from "react-native";
import {AppColors} from "../themes/AppTheme";




export const BotonFiltro = () => {

    return(
        <TouchableOpacity >
            <Text></Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    containerBotones:{
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
    botonFiltro:{
        width: "48%",
        height: 50,
        borderRadius: 25,
        backgroundColor: AppColors.botonTribus,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 15
    },
    botonFiltro2:{
        width: "48%",
        height: 50,
        borderRadius: 25,
        backgroundColor: AppColors.botonElementos,
        justifyContent: "center",
        alignItems: "center"
    },
    botonFiltro3:{
        width: "48%",
        height: 50,
        borderRadius: 25,
        backgroundColor: AppColors.botonRango,
        justifyContent: "center",
        alignItems: "center"
    },
    botonFiltro4:{
        width: "48%",
        height: 50,
        borderRadius: 25,
        backgroundColor: AppColors.botonFase,
        justifyContent: "center",
        alignItems: "center"
    },
})
