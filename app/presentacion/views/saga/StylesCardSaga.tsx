import {StyleSheet} from "react-native";
import {AppColors, AppFonts} from "../../themes/AppTheme";

const stylesCardSaga = StyleSheet.create({
    card: {
        width: "100%",
        padding:20,
        borderRadius: 15,
        borderWidth: 3.5,
        borderColor: AppColors.botonFase,
        backgroundColor: '#fff',
        position: 'relative',
        marginVertical: 5
    },
    nombre:{
        width:"100%",
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        fontFamily:AppFonts.semiBold,
        fontSize: 23,
    },
    logo: {
        width:"100%",
        height:"80%",
        alignItems: 'flex-end',
        position: 'absolute',
        marginVertical: 10,
    },
    descripcion:{
        width:"100%",
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        fontFamily:AppFonts.secondary,
        fontSize: 20,
        marginTop: 13,
    },
})

export default stylesCardSaga;