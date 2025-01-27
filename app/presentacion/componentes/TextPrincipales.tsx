import React from 'react';
import {StyleSheet, Text} from "react-native";

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
        fontSize: 26,
        textAlign: "center",
        marginVertical:20,
        fontFamily: 'Poppins'
    },
})