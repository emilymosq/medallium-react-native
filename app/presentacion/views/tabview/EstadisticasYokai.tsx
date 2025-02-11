import React from "react";
import {View, Text, StyleSheet} from "react-native";

const EstadisticasYokai = () => {
    return(
        <View style={styles.container}>
            <View style={styles.containerRow}>
                <Text style={styles.leftText}>Puntos de vida</Text>
                <Text style={styles.rightText}>342</Text>
            </View>
            <View style={styles.containerRow}>
                <Text style={styles.leftText}>Fuerza</Text>
                <Text style={styles.rightText}>172</Text>
            </View>
            <View style={styles.containerRow}>
                <Text style={styles.leftText}>Espiritu</Text>
                <Text style={styles.rightText}>48</Text>
            </View>
            <View style={styles.containerRow}>
                <Text style={styles.leftText}>Defensa</Text>
                <Text style={styles.rightText}>109</Text>
            </View>
            <View style={styles.containerRow}>
                <Text style={styles.leftText}>Velocidad</Text>
                <Text style={styles.rightText}>221</Text>
            </View>
            <View style={styles.containerRow}>
                <Text style={styles.leftText}>Total</Text>
                <Text style={styles.rightText}>892</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: "center",
        alignItems: "center",
        paddingVertical:20,
        paddingHorizontal: "auto"
    },
    containerRow: {
        width: "50%",
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
        fontSize: 18
    },
    leftText: {
        fontSize: 16,
        flex: 1,
        textAlign: 'left',
        fontWeight: '500',
        paddingVertical: 7
    },
    rightText: {
        fontSize: 16,
        textAlign: 'center',
    }
});
export default EstadisticasYokai;