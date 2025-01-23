import React from "react";
import {Image, Text, TextInput, TouchableOpacity, View} from "react-native";
import stylesHome from "./StylesHome";
import styles from "./StylesHome";

function Home () {
    return (
        <View style={styles.container}>
            <View style={styles.navbar}>
                <Image source={require("../../../../assets/logo.png")} style={styles.imagen}></Image>
                <Image source={require("../../../../assets/user.jpg")} style={styles.imagen}></Image>
            </View>
            <View>
                <TextInput></TextInput>
            </View>
            <View>
                <TouchableOpacity></TouchableOpacity>
                <TouchableOpacity></TouchableOpacity>
                <TouchableOpacity></TouchableOpacity>
                <TouchableOpacity></TouchableOpacity>
            </View>
            <View>
                <Text></Text>
                <View>
                    <View>
                        <Text></Text>
                        <Image></Image>
                    </View>
                    <View>
                        <Image></Image>
                    </View>
                    <View>
                        <Image></Image>
                        <Image></Image>
                        <Image></Image>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Home;