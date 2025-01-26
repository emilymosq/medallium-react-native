import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    Dimensions,
} from "react-native";
import MenuDrawer from 'react-native-side-drawer'

const {width} = Dimensions.get('window')

interface NavBarProps {
    onClose: () => void;
    onNavigate: (route: string) => void;
}

const NavBar: React.FC<NavBarProps> = ({onClose, onNavigate}) => {

    return(
        <View style={styles.navBar}>

        </View>
    )
}
export default NavBar;

const styles = StyleSheet.create({
    navBar: {
        height: '100%',
        width: width * 0.8,
        backgroundColor: "#6ABE4E"
    }
})

