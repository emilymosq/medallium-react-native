import {View, Text, Image, StyleSheet} from "react-native";
import {AppColors} from "../themes/AppTheme";
import stylesCardTribu from "../views/tribus/StylesCardTribu";

interface Props{
    nombre: string,
    nombreJapones: string,
    iconTribu: any,
}

const CardTribu = ({nombre, nombreJapones, iconTribu} : Props) => {
    return(
        <View style={stylesCardTribu.card}>
            <View style={stylesCardTribu.nombre}>
                <Text style={{fontSize:23}}>{nombre}</Text>
            </View>
            <View style={stylesCardTribu.logo}>
                <Image source={iconTribu}/>
            </View>
            <View>
                <Text style={{fontSize:20}}>{nombreJapones}</Text>
            </View>
        </View>
    )
}

export default CardTribu;