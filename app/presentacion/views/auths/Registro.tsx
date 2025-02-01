import {Image, ImageBackground, Text, TextInput, TouchableOpacity, View} from "react-native";
import styles from "./StylesRegistro";
import FormInput from "../../componentes/FormInput";
import {BotonPersonalizado} from "../../componentes/BotonPersonalizado";
import {createNativeStackNavigator, NativeStackNavigationProp} from "@react-navigation/native-stack";
import {useNavigation} from "@react-navigation/native";
import {RootStackParamalist} from "../../../../App";
import viewModel from "./ViewModel";

function RegistroScreen(){
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamalist>>();
    const {email, password, firstName, lastName, onChangeRegister, register, errorMessage, validateForm} = viewModel.RegisterViewModel();

    return(
        <ImageBackground source={require("../../../../assets/background.png")}
        style={styles.image}>
            <View style={styles.container}>
                <View style={styles.contenedorImagen}>
                    <Image source={require("../../../../assets/logo.png")} style={styles.imagen}></Image>
                </View>
                <View style={styles.backgroundInput}>
                    <Text style={styles.text}>¡Crea tu cuenta!</Text>

                    <View style={styles.containerNombreApellido}>
                        <View style={styles.nombreApellidoInputContainer}>
                            <Text style={styles.textInput}>Nombre</Text>
                            <TextInput
                                style={styles.inputPersonaizado}
                                keyboardType={"default"}
                                secureTextEntry={false}
                            ></TextInput>
                        </View>
                        <View style={styles.nombreApellidoInputContainer}>
                            <Text style={styles.textInput}>Apellidos</Text>
                            <TextInput
                                style={styles.inputPersonaizado}
                                keyboardType={"default"}
                                secureTextEntry={false}
                            ></TextInput>
                        </View>
                    </View>
                    <FormInput
                        text={"Usuario"}
                        placeholder={""}
                        keyboardType="default"
                        secureTextEntry={false}
                        onPressFormInterface={(text) => onChangeRegister('user', text)}
                    ></FormInput>
                    <FormInput
                        text={"Correo electrónico"}
                        placeholder={""}
                        keyboardType="email-address"
                        secureTextEntry={false}
                        onPressFormInterface={(text) => onChangeRegister('email', text)}
                    ></FormInput>
                    <FormInput
                        text={"Contraseña"}
                        placeholder={""}
                        keyboardType="default"
                        secureTextEntry={true}
                        onPressFormInterface={(text) => onChangeRegister('password', text)}
                    ></FormInput>
                    {/*<BotonPersonalizado text={"CREAR CUENTA"} onPress={()=>{*/}
                    {/*    navigation.navigate("Home")}}/>*/}
                    <BotonPersonalizado
                        onPress={() => {
                                register()
                                validateForm()
                            }} text={"CREAR CUENTA"}/>
                    <View style={styles.containerFooter}>
                        <Text>¿Ya tienes cuenta?</Text>
                        <Text onPress={()=>{
                            navigation.navigate("Login");
                        }}
                            style={styles.subrayado}>Inicia sesión</Text>
                    </View>
                </View>
            </View>
        </ImageBackground>
    );
}

export default RegistroScreen;