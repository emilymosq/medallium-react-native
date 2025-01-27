import {StyleSheet} from "react-native";
import {AppColors} from "../../themes/AppTheme";

const styles = StyleSheet.create({
    container: {
        backgroundColor: AppColors.background,
        paddingHorizontal: 30,
        paddingTop: 30
    },
    navbar:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 25
    },
    navbarNombre: {
        flexDirection: "row",
        alignItems: "center",
    },
    imagen: {
        width: 50,
        height: 50,
        resizeMode: "contain",
        borderRadius: 50
    },
    containerFilter:{
        width: "100%",
    },
    filter:{
        width: "auto",
        height: 50,
        borderRadius: 25,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 20
    },
    containerBotones:{
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
    botonFiltro:{
        width: "48%",
        height: 50,
        borderRadius: 25,
        backgroundColor: AppColors.botonTribus,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 15
    },
    botonFiltro2:{
        width: "48%",
        height: 50,
        borderRadius: 25,
        backgroundColor: AppColors.botonElementos,
        justifyContent: "center",
        alignItems: "center"
    },
    botonFiltro3:{
        width: "48%",
        height: 50,
        borderRadius: 25,
        backgroundColor: AppColors.botonRango,
        justifyContent: "center",
        alignItems: "center"
    },
    botonFiltro4:{
        width: "48%",
        height: 50,
        borderRadius: 25,
        backgroundColor: AppColors.botonFase,
        justifyContent: "center",
        alignItems: "center"
    },
    containerCardYoKai:{
        width: "100%",
        maxHeight: 400
    },
})

export default styles;