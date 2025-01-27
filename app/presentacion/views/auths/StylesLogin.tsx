import {StyleSheet} from "react-native";
import {AppColors} from "../../themes/AppTheme";

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
        fontSize: 26,
        textAlign: "center",
        marginBottom:20,
        fontFamily: 'Poppins-Bold'
    },
    subrayado: {
        textDecorationLine: 'underline',
        fontWeight: "bold",
    },
    containerFooter:{
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        width: "100%",
        paddingHorizontal: 30
    },


})

export default styles;