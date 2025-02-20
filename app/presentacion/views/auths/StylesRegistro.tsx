import {StyleSheet} from "react-native";
import {AppColors, AppFonts} from "../../themes/AppTheme";

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
    },
    image: {
        width: "100%",
        height: "100%",

    },
    backgroundInput: {
        width: "90%",
        backgroundColor: AppColors.backgroundInput,
        marginHorizontal: "auto",
        marginTop: "6%",
        paddingVertical:25,
        paddingHorizontal: 25,
        borderRadius: 25,
    },
    contenedorImagen: {
        alignItems: "center",
        width:"100%"
    },
    imagen: {
        width: 90,
        height: 100,
    },
    text: {
        fontWeight: "condensedBold",
        fontSize: 22,
        textAlign: "center",
        marginBottom:20,
        fontFamily: AppFonts.primary
    },
    containerNombreApellido: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
    },
    textInput: {
        width:"90%",
        margin: "auto",
        marginBottom: 7,
        fontFamily: AppFonts.secondary
    },
    nombreApellidoInputContainer: {
        width: "46%",
    },
    inputPersonaizado: {
        backgroundColor: "white",
        marginBottom: 13,
        paddingHorizontal: 10,
        borderRadius: 8,
        borderColor: AppColors.primary,
        borderWidth: 1,
        height: 40,
        fontFamily: AppFonts.secondary
    },
    subrayado: {
        textDecorationLine: 'underline',
        fontFamily: AppFonts.semiBold
    },
    containerFooter:{
        flexDirection: "row",
        justifyContent: "center",
        marginHorizontal: 10,
        gap: 5
    },


})

export default styles;