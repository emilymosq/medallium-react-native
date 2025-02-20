import React from "react";
import {Image, Text, View, StyleSheet, TouchableOpacity} from "react-native";
import {AppColors} from "../themes/AppTheme";

interface Props{
    title: string,
    onPress: () => void
}


export const BotonFiltro = ({title, onPress}: Props) => {
    return(
        <TouchableOpacity onPress={onPress}>
            <Text>{title}</Text>
        </TouchableOpacity>
    )
}


