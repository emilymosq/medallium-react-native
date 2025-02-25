import {View, Text, Image, StyleSheet} from "react-native";
import {AppColors, AppFonts} from "../themes/AppTheme";
import stylesCardTribu from "../views/tribus/StylesCardTribu";
import stylesCardElementos from "../views/elementos/StylesCardElementos";

interface Props{
    id_elementos: number,
    nombre: string,
    descripcion: string,
    image: any,
}

const elementosColors: { [key: number]: string } = {
    0: AppColors.tribuEscurridizo,
    1: AppColors.tribuAmable,
    2: AppColors.tribuMisterioso,
    3: AppColors.tribuSiniestro,
    4: AppColors.tribuGuapo,
    5: AppColors.tribuOscuro,
    6: AppColors.tribuValiente,
    7: AppColors.tribuRobusto,
};

const CardElemento = ({id_elementos, nombre, descripcion, image} : Props) => {
    const borderColor = elementosColors[id_elementos] || '#000000'
    return(
        <View style={[stylesCardElementos.card, { borderColor }]}>
            <View style={stylesCardTribu.containerNombre}>
                <Text style={stylesCardElementos.nombre}>{nombre}</Text>
            </View>
            <View style={stylesCardElementos.logo}>
                <Image source={image} style={{width:65, height:45, resizeMode:"contain"}} />
            </View>
            <View>
                <Text style={stylesCardElementos.descripcion}>{descripcion}</Text>
            </View>
        </View>
    )
}

export default CardElemento;