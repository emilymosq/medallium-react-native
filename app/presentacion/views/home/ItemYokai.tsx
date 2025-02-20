import React, { memo } from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { CardYoKai } from '../../componentes/CardYoKai';
import { DetallesYokaiInterface } from '../../../domain/entities/Yokai';
import { RootStackParamlist } from '../../../../App';

interface Props{
    item: DetallesYokaiInterface;
}

const RenderYokai = ({ item }: Props) => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamlist>>();
        return (
        <TouchableOpacity onPress={() => {
            navigation.navigate("DetailYoKai");
        }}>
            <CardYoKai
                nombre={item.yokai.name}
                nombreJapones={item.nombreJapo}
                iconHeart={require("../../../../assets/Heart.png")}
                imagenYoKai={{ uri: item.image }}
                iconTribu={require("../../../../assets/guapo.png")}
                iconElemento={require("../../../../assets/fuego.png")}
                iconRango={require("../../../../assets/rangod.png")}
            />
        </TouchableOpacity>
    );
};

//memo memoriza la salida renderizada y evita renderizaciones innecesarias.
export default memo(RenderYokai);
