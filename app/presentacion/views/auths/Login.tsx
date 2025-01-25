import React, { useState } from 'react';
import {
    View,
    Text,
    ImageBackground, Image
} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import styles from "./StylesLogin";
import FormInput from "../../componentes/FormInput";
import {BotonPersonalizado} from "../../componentes/BotonPersonalizado";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RootStackParamalist} from "../../../../App";

const Login = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamalist>>();
    return (
        <ImageBackground
            source={require("../../../../assets/background.png")}
            style={styles.image}>
            <View style={styles.container}>
                <View style={styles.contenedorImagen}>
                    <Image source={require("../../../../assets/logo.png")} style={styles.imagen}></Image>
                </View>
                <View style={styles.backgroundInput}>
                    <Text style={styles.text}>¡Bienvenido a Medallium!</Text>
                    <FormInput
                        text={"Correo electrónico"}
                        placeholder={""}
                        keyboardType="email-address"
                        secureTextEntry={false}
                    ></FormInput>
                    <FormInput
                        text={"Contraseña"}
                        placeholder={""}
                        keyboardType="default"
                        secureTextEntry={true}
                    ></FormInput>
                    <BotonPersonalizado text={"INICIAR SESIÓN"} onPress={()=>{
                        navigation.navigate("Home");
                    }}/>
                    <View style={styles.containerFooter}>
                        <Text>¿No tienes cuenta?</Text>
                        <Text onPress={()=>{
                            navigation.navigate("Registro");
                        }}
                              style={styles.subrayado}>Registrate</Text>
                    </View>
            </View>
            </View>
        </ImageBackground>
    );
};

export default Login;
