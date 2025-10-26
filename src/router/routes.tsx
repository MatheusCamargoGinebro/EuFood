import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import HomeScreen from "../pages/home";
import LoginScreen from "../pages/login";
import RegisterScreen from "../pages/register";

export type RootStackParamList = {
	Home: undefined;
	Login: undefined;
	Register: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export function Routes() {
	return (
		<Stack.Navigator
			initialRouteName="Home"
			screenOptions={{ headerShown: false }}
		>
			<Stack.Screen name="Home" component={HomeScreen} />
			<Stack.Screen name="Login" component={LoginScreen} />
			<Stack.Screen name="Register" component={RegisterScreen} />
		</Stack.Navigator>
	);
}
