import React from 'react';
import {StyleSheet, Text} from "react-native";
import {AppFonts} from "../themes/AppTheme";

interface Props {
    text: string
}

export const TextPrincipales = ({text}: Props) => {
    return (
        <Text style={styles.text}>{text}</Text>
    )
}

const styles = StyleSheet.create({
    text: {
        fontWeight: "condensedBold",
        fontSize: 22,
        textAlign: "center",
        marginVertical:20,
        fontFamily: AppFonts.primary
    },
})