import { Feather, Ionicons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";

export function Header() {
	return (
		<View className="w-full justify-between flex flex-row">
			<Pressable className="bg-white rounded-full w-10 h-10 flex items-center justify-center shadow">
				<Ionicons name="menu" size={30} color={"#121212"} />
			</Pressable>

			<View className="flex flex-col items-center justify-center">
				<Text className="text-center text-sm text-slate-800">Localização</Text>
				<View className="flex flex-row items-center justify-center gap-1">
					<Feather name="map-pin" size={14} color={"#ff0000"} />

					<Text className="text-xl font-bold">Campo grande</Text>
				</View>
			</View>

			<Pressable className="bg-white rounded-full w-10 h-10 flex items-center justify-center shadow">
				<Feather name="bell" size={30} color={"#121212"} />
			</Pressable>
		</View>
	);
}
