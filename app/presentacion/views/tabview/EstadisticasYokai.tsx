import React from "react";
import {View, Text, StyleSheet} from "react-native";
import {AppFonts} from "../../themes/AppTheme";

interface Props{
    pv: number,
    fuerza: number,
    espiritu: number,
    defensa: number,
    velocidad: number,
    total: number
}

const EstadisticasYokai = ({pv, fuerza, espiritu, defensa, velocidad, total}: Props) => {
    return(
        <View style={styles.container}>
            <View style={styles.containerRow}>
                <Text style={styles.leftText}>Puntos de vida</Text>
                <Text style={styles.rightText}>{pv}</Text>
            </View>
            <View style={styles.containerRow}>
                <Text style={styles.leftText}>Fuerza</Text>
                <Text style={styles.rightText}>{fuerza}</Text>
            </View>
            <View style={styles.containerRow}>
                <Text style={styles.leftText}>Espiritu</Text>
                <Text style={styles.rightText}>{espiritu}</Text>
            </View>
            <View style={styles.containerRow}>
                <Text style={styles.leftText}>Defensa</Text>
                <Text style={styles.rightText}>{defensa}</Text>
            </View>
            <View style={styles.containerRow}>
                <Text style={styles.leftText}>Velocidad</Text>
                <Text style={styles.rightText}>{velocidad}</Text>
            </View>
            <View style={styles.containerRow}>
                <Text style={styles.leftText}>Total</Text>
                <Text style={styles.rightText}>{total}</Text>
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
        fontFamily: AppFonts.semiBold,
        paddingVertical: 7
    },
    rightText: {
        fontSize: 16,
        textAlign: 'center',
        fontFamily: AppFonts.secondary
    }
});
export default EstadisticasYokai;