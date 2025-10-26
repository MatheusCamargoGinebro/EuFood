import { Image, Pressable, Text, View } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { FoodProps } from "../index";

export function CardHorizontalFood({ food }: { food: FoodProps }) {
	return (
		<Pressable className="flex-col rounded-xl relative">
			<Image source={{ uri: food.image }} className="w-44 h-36 rounded-xl" />

			<View className="bg-neutral-900/90 rounded-full absolute top-2 right-2 px-2 py-1 flex-row items-center justify-center gap-1 ">
				<Ionicons name={"star"} size={14} color={"#ca8a04"} />
				<Text className="text-white text-sm">{food.rating}</Text>
			</View>

			<Text className="text-green-700 font-medium text-lg">R${food.price}</Text>
			<Text className="text-black mt-1 font-medium text-lg">{food.name}</Text>
			<Text className="text-neutral-600 text-sm">
				{food.time} - R${food.delivery}
			</Text>
		</Pressable>
	);
}
