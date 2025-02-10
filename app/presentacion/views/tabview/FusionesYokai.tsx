import React from "react";
import {View, Image, Text, StyleSheet} from "react-native";

const FusionesYokai = () => {
    return(
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={require("../../../../assets/espinyan.png")}/>
            <Text style={styles.text}>Espinyan</Text>
            <Image
                style={styles.image}
                source={require("../../../../assets/pelochnyan.png")}/>
            <Text style={styles.text}>Pelochnyan</Text>
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
    image:{
        width:100,
        height:100,
    },
    text:{
        paddingVertical: 10,
        fontSize: 17
    }

})


export default FusionesYokai;