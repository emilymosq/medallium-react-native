import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from "./app/presentacion/views/auths/Login";
import Registro from "./app/presentacion/views/auths/Registro";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

const Stack=createNativeStackNavigator<RootStackParamalist>();
export type RootStackParamalist={
    Login: undefined,
    Registro: undefined,

}

export default function App() {
  return (
      <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown:false}}>
              <Stack.Screen name={"Login"} component={Login} ></Stack.Screen>
              <Stack.Screen name={"Registro"} component={Registro} ></Stack.Screen>

          </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
