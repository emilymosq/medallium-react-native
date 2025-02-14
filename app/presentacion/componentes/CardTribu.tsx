import {View, Text, Image, StyleSheet} from "react-native";
import {AppColors} from "../themes/AppTheme";

const CardTribu = () => {
    return(
        <View style={styles.card}>
            <View style={styles.nombre}>
                <Text>Guapa</Text>
                <Text>0/71</Text>
            </View>
            <View>
                <Image source={require("../../../assets/guapa2.png")}/>
            </View>
            <View>
                <Text>かわいい</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
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
    }
})

export default CardTribu;