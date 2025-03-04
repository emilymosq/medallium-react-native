import React from "react";
import {View, Image, Text, StyleSheet} from "react-native";
import {AppFonts} from "../../themes/AppTheme";

interface Props{
    imageYokai: any,
    nombreYokai: string
}

const EvolucionesYokai = ({imageYokai, nombreYokai}: Props) => {
    return(
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={imageYokai}/>
            <Text style={styles.text}>{nombreYokai}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        width: '100%',
        justifyContent: "center",
        alignItems: "center",
        paddingTop:20,
        paddingHorizontal: 20
    },
    image:{
        width:90,
        height:90,
    },
    text:{
        paddingVertical: 10,
        fontSize: 16,
        fontFamily: AppFonts.secondary
    }

})


export default EvolucionesYokai;