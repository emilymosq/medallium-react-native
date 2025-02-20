import React from "react";
import {View, Text, Image, TouchableOpacity} from "react-native";
import styles from "./StylesProfile";
import {Check, List} from "react-bootstrap-icons";
import {useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RootStackParamlist} from "../../../../App";
import {PropsStackNavigation} from "../../interfaces/StackNav";
import ViewModel from "./ViewModel";

const Profile = ({navigation, route}: PropsStackNavigation) => {
    //const navigation = useNavigation<NativeStackNavigationProp<RootStackParamlist>>();

    const {deleteSession} = ViewModel.ProfileViewModel();

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.list} source={require("../../../../assets/menu.png")}></Image>
            </View>
            <View style={styles.userImageContainer}>
                <Image source={{uri: 'https://i.postimg.cc/yx0JFLjV/Whats-App-Image-2025-02-11-at-10-19-53.jpg' }} style={styles.userImage}></Image>
            </View>
            <View>
                <Text style={styles.datosPersonales}>Datos Personales</Text>
            </View>
            <View style={styles.dataContainer}>
                <Text style={styles.dataTitle}>Nombre de usuario</Text>
                <Text style={styles.dataValue}>Antonio Adolfo</Text>
            </View>
            <View style={styles.dataContainer}>
                <Text style={styles.dataTitle}>Id de usuario</Text>
                <Text style={styles.dataValue}>23-47516985236</Text>
            </View>
            <View style={styles.dataContainer}>
                <Text style={styles.dataTitle}>Yokais obtenidos</Text>
                <Text style={styles.dataValue}>30 / 240</Text>
            </View>
            <View style={styles.cerrarSesionContainer}>
                <TouchableOpacity onPress={()=>{
                    deleteSession();
                    navigation.navigate("Login");
                }}>
                    <Text style={styles.cerrarSesion}>Cerrar sesion</Text>
                </TouchableOpacity>

            </View>
        </View>

    )
}

export default Profile;