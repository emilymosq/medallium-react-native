import {StyleSheet} from "react-native";
import {AppColors, AppFonts} from "../../themes/AppTheme";

export const ModalTribuStyle = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
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
        right: 18,
        top: 10,
    },
    buttonVerYokais: {
        borderRadius: 30,
        padding: 10,
        marginTop: 15,
        backgroundColor: '#E7E7E7'
    },
    textVerYokais: {
        fontFamily: AppFonts.secondary,
        fontSize: 17,
    },
    textCerrar: {
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 19,
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
    tribuLogo: {
        width: 100,
        height: 100,
        marginBottom: 10,
        resizeMode: "contain",
    },
});
