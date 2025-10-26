import { useEffect, useState } from "react";
import { View } from "react-native";
import { RestaurantItem } from "./item";

export interface restaurantsProps {
	id: string;
	name: string;
	image: string;
}

export function RestaurantVerticalList() {
	const [restaurants, setRestaurants] = useState<restaurantsProps[]>([]);

	useEffect(() => {
		async function getRestaurants() {
			const response = await fetch("http://192.168.0.69:3000/restaurants");
			const data = await response.json();

			setRestaurants(data);
		}

		getRestaurants();
	}, []);

	return (
		<View className="px-4 flex-1 w-full h-full mb-11 gap-4">
			{restaurants.map((item) => (
				<RestaurantItem item={item} key={item.id} />
			))}
		</View>
	);
}
