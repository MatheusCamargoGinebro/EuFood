import { ScrollView, View } from "react-native";
import { Banner } from "../components/banner";
import { Header } from "../components/header";
import { RestaurantVerticalList } from "../components/list";
import { Restaurants } from "../components/restaurants";
import { Search } from "../components/search";
import { Section } from "../components/section";
import { TrendingFoods } from "../components/trending";

import Constants from "expo-constants";

const statusBarH = Constants.statusBarHeight;

export default function Index() {
	return (
		<ScrollView
			className="bg-slate-100"
			showsVerticalScrollIndicator={false}
			style={{ flex: 1 }}
		>
			<View className="px-4" style={{ marginTop: statusBarH + 8 }}>
				<Header />

				<Banner />

				<Search />
			</View>

			<View>
				<Section
					name={"Comidas em alta"}
					size={"text-2xl"}
					label={"Veja mais"}
					action={() => console.log("Clicou no veja mais - trending foods")}
				/>

				<TrendingFoods />
			</View>

			<View>
				<Section
					name={"Famosos no EuFood"}
					size={"text-xl"}
					label={"Veja mais"}
					action={() => console.log("Clicou no veja mais - Famosos")}
				/>

				<Restaurants />
			</View>

			<View>
				<Section
					name={"Restaurantes"}
					size={"text-xl"}
					label={"Veja mais"}
					action={() => console.log("Clicou no veja mais - restaurants")}
				/>

				<RestaurantVerticalList />
			</View>
		</ScrollView>
	);
}
