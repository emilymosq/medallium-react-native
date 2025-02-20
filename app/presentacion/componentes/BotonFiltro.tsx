import React from "react";
import {Image, Text, View, StyleSheet, TouchableOpacity} from "react-native";
import {AppColors} from "../themes/AppTheme";

const botonFiltro = ( ) => {
    return(
        <TouchableOpacity style={styles.botonFiltro2}>
            <Text>Elementos</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    botonFiltro2:{
        width: "48%",
        height: 50,
        borderRadius: 25,
        backgroundColor: AppColors.botonElementos,
        justifyContent: "center",
        alignItems: "center"
    },
})
