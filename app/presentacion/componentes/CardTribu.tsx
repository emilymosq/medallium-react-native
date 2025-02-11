import {View, Text, Image} from "react-native";

const CardTribu = () => {
    return(
        <View>
            <View>
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

export default CardTribu;