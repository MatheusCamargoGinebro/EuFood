import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Text, View } from "react-native";
import { Button } from "../../components/button";
import { RootStackParamList } from "../../router/routes";

export default function RegisterScreen() {
	const navigation =
		useNavigation<NativeStackNavigationProp<RootStackParamList>>();

	return (
		<View className="flex-1 w-full h-full flex items-center justify-center gap-4">
			<Text>RegisterScreen</Text>
			<View className="flex-row justify-center items-center gap-4">
				<Button text="Home" action={() => navigation.navigate("Home")} />
				<Button text="Login" action={() => navigation.navigate("Login")} />
			</View>
		</View>
	);
}
