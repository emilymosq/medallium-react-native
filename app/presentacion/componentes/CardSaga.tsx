import {View, Text, Image, StyleSheet} from "react-native";
import {AppColors, AppFonts} from "../themes/AppTheme";
import stylesCardSaga from "../views/saga/StylesCardSaga";

interface Props{
    nombre: string,
    descripcion: string,
}

const CardSaga = ({nombre, descripcion} : Props) => {
    return(
        <View style={stylesCardSaga.card}>
            <View>
                <Text style={stylesCardSaga.nombre}>{nombre}</Text>
            </View>
            <View>
                <Text style={stylesCardSaga.descripcion}>{descripcion}</Text>
            </View>
        </View>
    )
}

export default CardSaga;