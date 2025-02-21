import {View, Text, Image, StyleSheet} from "react-native";
import {AppColors, AppFonts} from "../themes/AppTheme";
import stylesCardTribu from "../views/tribus/StylesCardTribu";
import stylesCardElementos from "../views/elementos/StylesCardElementos";

interface Props{
    a_name: string,
    descripcion: string,
    image: any,
}

const CardElemento = ({a_name, descripcion, image} : Props) => {
    return(
        <View style={stylesCardElementos.card}>
            <View>
                <Text style={stylesCardElementos.nombre}>{a_name}</Text>
            </View>
            <View style={stylesCardElementos.logo}>
                <Image source={image}/>
            </View>
            <View>
                <Text style={stylesCardElementos.descripcion}>{descripcion}</Text>
            </View>
        </View>
    )
}

export default CardElemento;