import React from "react";
import {View, Text, StyleSheet} from "react-native";

const DescripcionYokai = () => {
    return(
        <View style={styles.container}>
            <Text style={{paddingVertical: 5, fontSize: 15,}}>Tras ser atropellado por un coche, espiritó un cruce para poder vengarse de los coches que pasen.</Text>
            <View style={styles.containerConjunto}>
                <Text style={styles.text}>Habilidad</Text>
                <View style={styles.containerRow}>
                    <Text style={[styles.textRow, styles.boldText]}>Yo-kai Watch</Text>
                    <Text style={[styles.textRow, styles.boldText]}>Yo-kai Watch 2</Text>
                    <Text style={[styles.textRow, styles.boldText]}>Yo-kai Watch 3</Text>
                </View>
                <View style={styles.containerRow}>
                    <Text style={styles.textRow}>Adrenalina</Text>
                    <Text style={styles.textRow}>Adrenalina</Text>
                    <Text style={styles.textRow}>Adrenalina</Text>
                </View>
            </View>
            <View style={styles.containerConjunto}>
                <Text style={styles.text}>Comida favorita</Text>
                <View style={styles.containerRow}>
                    <Text style={[styles.textRow, styles.boldText]}>Yo-kai Watch</Text>
                    <Text style={[styles.textRow, styles.boldText]}>Yo-kai Watch 2</Text>
                    <Text style={[styles.textRow, styles.boldText]}>Yo-kai Watch 3</Text>
                </View>
                <View style={styles.containerRow}>
                    <Text style={styles.textRow}>Pescado</Text>
                    <Text style={styles.textRow}>Chocobarritas</Text>
                    <Text style={styles.textRow}>Chocobarritas</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        justifyContent: "center",
        alignItems: "center",
        paddingVertical:20,
        paddingHorizontal: 20
    },
    containerConjunto: {
        width: "100%",
        alignItems: "center",
        paddingVertical: 8,
    },
    text: {
        fontSize: 17,
        fontWeight: "bold",
        paddingVertical: 5,
    },
    containerRow: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 5,
    },
    textRow: {
        flex: 1,
        textAlign: "center",
        fontSize: 16,
    },
    boldText: {
        fontWeight: '500',
    },
})

export default DescripcionYokai;