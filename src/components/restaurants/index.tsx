import { useEffect, useState } from "react";
import { FlatList } from "react-native";

import { CardHorizontalRestaurant } from "./horizontal";

export interface restaurantsProps {
	id: string;
	name: string;
	image: string;
}

export function Restaurants() {
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
		<FlatList
			data={restaurants}
			renderItem={({ item }) => <CardHorizontalRestaurant item={item} />}
			horizontal={true}
			contentContainerStyle={{
				gap: 14,
				paddingLeft: 16,
				paddingRight: 16,
				alignItems: "flex-start",
			}}
			showsHorizontalScrollIndicator={false}
		></FlatList>
	);
}
