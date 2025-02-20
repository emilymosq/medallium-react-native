import React from "react";
import {Image, Text, View, StyleSheet} from "react-native";

interface Props{
    text: string,
    icon: any
}
export const ElementoRareza = ({text, icon}: Props) => {
    return(
        <View style={styles.extra}>
            <Text>{text}</Text>
            <Image source={icon} style={styles.icon} />
        </View>
    )
}
const styles = StyleSheet.create({
    extra: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderColor: "#535353",
        borderWidth: 1,
        borderRadius: 50,
        gap: 8,
    },
    icon: {
        width: 23,
        height: 23,
    },
})