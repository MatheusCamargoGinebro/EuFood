import { Image, Pressable, Text } from "react-native";

import { restaurantsProps } from "..";

export function CardHorizontalRestaurant({ item }: { item: restaurantsProps }) {
	return (
		<Pressable
			className="flex-col items-center justify-center"
			onPress={() => console.log("Clocou no restaurante", item.name)}
		>
			<Image source={{ uri: item.image }} className="w-20 h-20 rounded-full" />
			<Text
				className="text-black text-sm mt-2 w-20 text-center leading-4"
				numberOfLines={2}
			>
				{item.name}
			</Text>
		</Pressable>
	);
}
