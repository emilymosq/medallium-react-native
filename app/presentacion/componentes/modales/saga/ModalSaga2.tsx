import React from 'react';
import {Alert, Image, Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { Dispatch, SetStateAction } from 'react';
import {AppFonts} from "../../../themes/AppTheme";

interface ModalSagaProps {
    modalVisible: boolean;
    setModalVisible: Dispatch<SetStateAction<boolean>>;
}

const ModalSaga2: React.FC<ModalSagaProps> = ({ modalVisible, setModalVisible }) => {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.centeredView}>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal se ha cerrado.');
                        setModalVisible(!modalVisible);
                    }}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Image source={require("../../../../../assets/Yo-kai_Watch_Saga2.png")}
                                   style={styles.sagaLogo}/>
                            <Text style={styles.titleText}>
                                Yo-kai Watch 2
                            </Text>
                            <Text style={styles.modalText}>
                                Expande la historia del primer juego con nuevas mecánicas, como la posibilidad de viajar al pasado y conocer el origen del Yo-kai Watch.
                                Se enfrentan dos facciones de Yo-kai: Fantasqueletos y Carnánimas, lo que influye en la historia y en qué Yo-kai se pueden conseguir.
                                Se introducen nuevos Yo-kai, monturas en tren y el modo multijugador.
                            </Text>
                            <TouchableOpacity
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setModalVisible(!modalVisible)}>
                                <Text style={styles.textStyle}>X</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </SafeAreaView>
        </SafeAreaProvider>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 30,
        padding: 10,
    },
    buttonClose: {
        backgroundColor: 'white',
        position: 'absolute',
        right: 10,
        top: 10,
    },
    textStyle: {
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 17,
    },
    modalText: {
        fontSize: 17,
        textAlign: 'center',
        fontFamily: AppFonts.secondary,
    },
    titleText: {
        fontSize: 20,
        textAlign: 'center',
        fontFamily: AppFonts.primary,
        marginBottom: 5,
    },
    sagaLogo: {
        width: 300,
        height: 250,
        flexDirection: "row",
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        resizeMode: "contain",
    },
});

export default ModalSaga2;
