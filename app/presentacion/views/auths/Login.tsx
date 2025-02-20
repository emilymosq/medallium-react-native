import React, {useEffect, useState} from 'react';
import {
    View,
    Text,
    ImageBackground, Image, ToastAndroid
} from 'react-native';
import styles from "./StylesLogin";
import FormInput from "../../componentes/FormInput";
import {BotonPersonalizado} from "../../componentes/BotonPersonalizado";
import {AppFonts} from "../../themes/AppTheme";
import viewModel from "./ViewModel";
import {PropsStackNavigation} from "../../interfaces/StackNav";

const Login = ({navigation, route}: PropsStackNavigation) => {
    //const navigation = useNavigation<NativeStackNavigationProp<RootStackParamlist>>();

    const {email, password, onChangeLogin, login, errorMessage, user} = viewModel.LoginViewModel();

    useEffect(() => {
            if (errorMessage != "")
                ToastAndroid.show(errorMessage, ToastAndroid.LONG)
        },
        [errorMessage])

    useEffect(() => {
        // En el momento que se abre la ventana esto se ejecuta y se comprueba si hay usuario.
        // También, si se efectua un cambio en su estado se ejecuta y vuelve a comprobar.
        console.log("Usuario actualizado:", user);
        if (user && user?.token) {
            navigation.replace("Home")
        }
    }, [user]);

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
                        onPressFormInterface={(text) => onChangeLogin('email', text)}
                    ></FormInput>
                    <FormInput
                        text={"Contraseña"}
                        placeholder={""}
                        keyboardType="default"
                        secureTextEntry={true}
                        onPressFormInterface={(text) => onChangeLogin('password', text)}
                    ></FormInput>
                    <BotonPersonalizado text={"INICIAR SESIÓN"} onPress={()=>{
                        login();
                        ToastAndroid.show("Login exitoso", ToastAndroid.SHORT);
                    }}/>
                    <View style={styles.containerFooter}>
                        <Text style={{fontFamily: AppFonts.secondary}}>¿No tienes cuenta?</Text>
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
