import React from "react";
import {View, Text, Image, TouchableOpacity} from "react-native";
import styles from "./StylesProfile";
import {RootStackParamlist} from "../../../../App";
import {PropsStackNavigation} from "../../interfaces/StackNav";
import ViewModel from "./ViewModel";
import {DrawerNavigationProp} from "@react-navigation/drawer";

type ProfileScreenNavigationProp = DrawerNavigationProp<RootStackParamlist, 'DrawerNavigator'>;

const Profile = ({ navigation }: { navigation: ProfileScreenNavigationProp }) => {

    const {deleteSession, user} = ViewModel.ProfileViewModel();

    if(!user){
        return (
            <View style={styles.container}>
                <Text>Cargando datos del usuario...</Text>
            </View>
        );
    }
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <Image style={styles.list} source={require("../../../../assets/menu.png")}></Image>
                </TouchableOpacity>
            </View>
            <View style={styles.userImageContainer}>
                <Image source={{uri: 'https://i.postimg.cc/yx0JFLjV/Whats-App-Image-2025-02-11-at-10-19-53.jpg' }} style={styles.userImage}></Image>
            </View>
            <View>
                <Text style={styles.datosPersonales}>Datos Personales</Text>
            </View>
            <View style={styles.dataContainer}>
                <Text style={styles.dataTitle}>Nombre y Apellidos</Text>
                <Text style={styles.dataValue}>{user.firstName + " " + user.lastName}</Text>
            </View>
            <View style={styles.dataContainer}>
                <Text style={styles.dataTitle}>Id de usuario</Text>
                <Text style={styles.dataValue}>{user.id}</Text>
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