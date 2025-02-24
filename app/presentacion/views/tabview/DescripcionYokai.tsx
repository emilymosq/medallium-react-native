import React from "react";
import {View, Text, StyleSheet, Image} from "react-native";
import {AppFonts} from "../../themes/AppTheme";

interface Props{
    descripcion: string,
    habilidad: string,
    comidaYK1: string,
    comidaYK2: string,
    comidaYK3: string,
    medalla: any
}

const DescripcionYokai = ({descripcion, habilidad, comidaYK1, comidaYK2, comidaYK3, medalla}: Props) => {
    return(
        <View style={styles.container}>
            <Text style={{paddingVertical: 5, fontSize: 15,}}>{descripcion}</Text>
            <View style={styles.containerConjunto}>
                <Text style={styles.text}>Comida favorita</Text>
                <View style={styles.containerRow}>
                    <Text style={[styles.textRow, styles.boldText]}>Yo-kai Watch</Text>
                    <Text style={[styles.textRow, styles.boldText]}>Yo-kai Watch 2</Text>
                    <Text style={[styles.textRow, styles.boldText]}>Yo-kai Watch 3</Text>
                </View>
                <View style={styles.containerRow}>
                    <Text style={styles.textRow}>{comidaYK1}</Text>
                    <Text style={styles.textRow}>{comidaYK2}</Text>
                    <Text style={styles.textRow}>{comidaYK3}</Text>
                </View>
            </View>
            <View style={styles.containerConjunto}>
               <View style={styles.containerRow}>
                   <Text style={[styles.textRow, styles.boldText]}>Habilidad</Text>
                   <Text style={[styles.textRow, styles.boldText]}>Medalla</Text>
               </View>
                <View style={styles.containerRow}>
                    <Text style={styles.textRow2}>{habilidad}</Text>
                    <Image source={medalla} style={styles.medalla}/>
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
        fontSize: 16,
        paddingVertical: 5,
        fontFamily: AppFonts.semiBold
    },
    containerRow: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 6,
    },
    textRow: {
        flex: 1,
        textAlign: "center",
        fontSize: 14,
        fontFamily: AppFonts.secondary
    },
    boldText: {
        fontFamily: AppFonts.semiBold
    },
    medalla:{
        width: 50,
        height: 50,
        resizeMode: "contain",
    },
    textRow2:{
        flex: 1,
        textAlign: "center",
        fontSize: 14,
        fontFamily: AppFonts.secondary,
        marginLeft: -30
    }
})

export default DescripcionYokai;