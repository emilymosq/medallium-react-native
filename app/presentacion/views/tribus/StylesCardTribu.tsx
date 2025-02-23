import {StyleSheet} from "react-native";
import {AppColors, AppFonts} from "../../themes/AppTheme";

const stylesCardTribu = StyleSheet.create({
    card: {
        width: "100%",
        padding:20,
        borderRadius: 10,
        borderWidth: 3.5,
        //borderColor: AppColors.tribuGuapo,
        backgroundColor: '#fff',
        position: 'relative',
        marginVertical: 10
    },
    containerNombre:{
        width:"100%",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    nombre:{
        fontSize: 23,
        fontFamily: AppFonts.semiBold
    },
    logo: {
        width:"100%",
        height:"100%",
        alignItems: 'flex-end',
        position: 'absolute',
        marginVertical: 10,
    },
    imagen: {
        width: 80,
        height: 80,
        resizeMode: 'contain'
    }
})

export default stylesCardTribu;