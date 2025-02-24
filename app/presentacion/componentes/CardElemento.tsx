import {View, Text, Image, StyleSheet} from "react-native";
import {AppColors, AppFonts} from "../themes/AppTheme";
import stylesCardTribu from "../views/tribus/StylesCardTribu";
import stylesCardElementos from "../views/elementos/StylesCardElementos";

interface Props{
    id_Elementos: number,
    a_name: string,
    descripcion: string,
    image: any,
}

const elementosColors: { [key: number]: string } = {
    1: AppColors.tribuEscurridizo,
    2: AppColors.tribuAmable,
    3: AppColors.tribuMisterioso,
    4: AppColors.tribuSiniestro,
    5: AppColors.tribuGuapo,
    6: AppColors.tribuOscuro,
    7: AppColors.tribuValiente,
    8: AppColors.tribuRobusto,
};

const CardElemento = ({id_Elementos, a_name, descripcion, image} : Props) => {
    const borderColor = elementosColors[id_Elementos] || '#000000'
    return(
        <View style={[stylesCardElementos.card, { borderColor }]}>
            <View style={stylesCardTribu.containerNombre}>
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