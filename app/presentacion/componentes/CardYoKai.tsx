import React from "react";
import {TextPrincipales} from "./TextPrincipales";
import {Image, Text, View, StyleSheet} from "react-native";
import {AppColors} from "../themes/AppTheme";

interface Props{
    nombre: string,
    icon: any,
    imagenYoKai: any

}

export const CardYoKai =  ({nombre, icon, imagenYoKai}: Props) => {
return(
    <View style={styles.containerCardYoKai}>
        <View style={styles.card}>
            <View style={styles.textContainer}>
                <Text style={styles.textNombre}>{nombre}</Text>
                <Text style={styles.textNombre}>{nombre}</Text>
            </View>
            <View style={styles.containerCorazon}>
                <Image source={icon}></Image>
            </View>
            <View style={styles.containerImagenYoKai}>
                <Image
                    source={imagenYoKai}
                    style={styles.image}
                />
            </View>
            <View style={styles.containerIcons}>
                <Image source={icon}
                       style={styles.icons}
                />
                <Image source={icon}
                       style={styles.icons}/>
                <Image source={icon}
                       style={styles.icons}/>
            </View>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
        containerCardYoKai:{
        width: "100%"
    },
        card: {
        width: "100%",
        padding: 20,
        borderRadius: 15,
        borderWidth: 3.5,
        borderColor: AppColors.tribuGuapo,
        backgroundColor: '#fff',
        position: 'relative',
    },
        textContainer: {
        alignItems: 'flex-start',
    },
        textNombre:{
        fontWeight: 'bold',
        fontSize: 18
    },
        containerCorazon:{
        position: "absolute",
        top: 15,
        right: 20,
        padding: 5,
    },
        containerImagenYoKai:{
        alignItems: "flex-end",
        position: "absolute",
        top: 20,
        right: 55,
    },
        text: {
        fontWeight: "condensedBold",
        fontSize: 26,
        textAlign: "center",
        marginVertical:20,
        fontFamily: 'Poppins'
    },
        image: {
        width: 80,
        height: 100,
    },
        containerIcons: {
        width: "35%",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        paddingTop: 18
    },
        icons: {
        width: 30,
        height: 30,
        resizeMode: "contain",
    }
    })