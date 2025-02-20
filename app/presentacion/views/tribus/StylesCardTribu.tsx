import {StyleSheet} from "react-native";
import {AppColors, AppFonts} from "../../themes/AppTheme";

const stylesCardTribu = StyleSheet.create({
    card: {
        width: "100%",
        padding:20,
        borderRadius: 15,
        borderWidth: 3.5,
        borderColor: AppColors.tribuGuapo,
        backgroundColor: '#fff',
        position: 'relative',
        marginVertical: 5
    },
    nombre:{
        width:"35%",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
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
    nombreJapo:{
        width:"35%",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontFamily:AppFonts.secondary,
        fontSize: 20,
    },
})

export default stylesCardTribu;