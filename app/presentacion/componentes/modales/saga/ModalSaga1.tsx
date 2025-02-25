import React from 'react';
import {Alert, Image, Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { Dispatch, SetStateAction } from 'react';
import {AppFonts} from "../../../themes/AppTheme";

interface ModalSagaProps {
    modalVisible: boolean;
    setModalVisible: Dispatch<SetStateAction<boolean>>;
}

const ModalSaga1: React.FC<ModalSagaProps> = ({ modalVisible, setModalVisible }) => {
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
                            <Image source={require("../../../../../assets/Yo-kai_Watch_Saga1.png")}
                                   style={styles.sagaLogo}/>
                            <Text style={styles.titleText}>
                                Yo-kai Watch
                            </Text>
                            <Text style={styles.modalText}>
                                El primer juego de la serie introduce el mundo de los Yo-kai, criaturas invisibles que afectan la vida diaria de los humanos. El protagonista (Nathan o Katie) obtiene un Yo-kai Watch, un reloj especial que permite ver y hacerse amigo de los Yo-kai.
                                A lo largo del juego, explora Floresia (Springdale), resuelve problemas causados por los Yo-kai y enfrenta a enemigos poderosos, incluyendo al malvado Yo-kai Damead.
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
        marginBottom: 4,
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

export default ModalSaga1;
