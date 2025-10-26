import { Feather } from "@expo/vector-icons";
import { TextInput, View } from "react-native";

export function Search() {
	return (
		<View className="w-full flex-row items-center gap-2 px-4 justify-center border border-slate-500 h-14 rounded-full">
			<Feather name="search" size={24} color={"#64748b"} />

			<TextInput
				placeholder="O que você quer comer?"
				className="flex-1 h-full w-full bg-transparent"
			/>
		</View>
	);
}
