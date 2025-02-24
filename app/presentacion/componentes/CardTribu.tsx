import {View, Text, Image, StyleSheet} from "react-native";
import {AppColors} from "../themes/AppTheme";
import stylesCardTribu from "../views/tribus/StylesCardTribu";

interface Props{
    id_Tribu: number,
    nombre: string,
    nombreJapones: string,
    iconTribu: any,
}

const tribuColors: { [key: number]: string } = {
    2: AppColors.tribuGuapo,
    3: AppColors.tribuValiente,
    4: AppColors.tribuMisterioso,
    5: AppColors.tribuRobusto,
    6: AppColors.tribuOscuro,
    7: AppColors.tribuSiniestro,
    8: AppColors.tribuAmable,
    9: AppColors.tribuMalefico,
    10: AppColors.tribuEscurridizo,
};

const CardTribu = ({id_Tribu, nombre, nombreJapones, iconTribu} : Props) => {
    const borderColor = tribuColors[id_Tribu] || '#000000'

    return(
        <View style={[stylesCardTribu.card, { borderColor }]}>
            <View style={stylesCardTribu.containerNombre}>
                <Text style={stylesCardTribu.nombre}>{nombre}</Text>
            </View>
            <View style={stylesCardTribu.logo}>
                <Image style={stylesCardTribu.imagen} source={iconTribu}/>
            </View>
            <View>
                <Text style={{fontSize:20}}>{nombreJapones}</Text>
            </View>
        </View>
    )
}

export default CardTribu;