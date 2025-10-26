import { Ionicons } from "@expo/vector-icons";
import { Image, Pressable, Text, View } from "react-native";

import { restaurantsProps } from "..";

export function RestaurantItem({ item }: { item: restaurantsProps }) {
	return (
		<Pressable className="flex-row items-center justify-start gap-2">
			<Image source={{ uri: item.image }} className="w-20 h-20 rounded-full" />
			<View className="flex gap-1">
				<Text
					className="text-base text-black leading-4 font-bold"
					numberOfLines={2}
				>
					{item.name}
				</Text>
				<View className="flex-row items-center gap-1">
					<Ionicons name="star" color={"#ca8a04"} />
					<Text>4.5</Text>
				</View>
			</View>
		</Pressable>
	);
}
