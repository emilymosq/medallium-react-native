import React from "react";
import {Text, TouchableOpacity, StyleSheet} from "react-native";
import {AppColors} from "../themes/AppTheme";

interface Props{
    onPress: () => void,
    text: string
}

export const BotonPersonalizado = ({text, onPress}: Props) => {
    return (
        <TouchableOpacity
            onPress={() => onPress()}
            style={styles.boton}>
            <Text>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    boton: {
        backgroundColor: AppColors.primary,
        padding: 10,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 10,
    },
})