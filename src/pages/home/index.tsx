import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Constants from "expo-constants";
import { ScrollView, View } from "react-native";
import { Banner } from "../../components/banner";
import { Button } from "../../components/button";
import { Header } from "../../components/header";
import { RestaurantVerticalList } from "../../components/list";
import { Restaurants } from "../../components/restaurants";
import { Search } from "../../components/search";
import { Section } from "../../components/section";
import { TrendingFoods } from "../../components/trending";
import { RootStackParamList } from "../../router/routes";

const statusBarH = Constants.statusBarHeight;

export default function HomeScreen() {
	const navigation =
		useNavigation<NativeStackNavigationProp<RootStackParamList>>();

	return (
		<ScrollView
			className="bg-slate-900 pb-96"
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
					name="Comidas em alta"
					size="text-2xl"
					label="Veja mais"
					action={() => console.log("Clicou no veja mais - trending foods")}
				/>
				<TrendingFoods />
			</View>

			<View>
				<Section
					name="Famosos no EuFood"
					size="text-xl"
					label="Veja mais"
					action={() => console.log("Clicou no veja mais - Famosos")}
				/>
				<Restaurants />
			</View>

			<View>
				<Section
					name="Restaurantes"
					size="text-xl"
					label="Veja mais"
					action={() => console.log("Clicou no veja mais - restaurants")}
				/>
				<RestaurantVerticalList />
			</View>

			<View style={{ marginBottom: statusBarH }}>
				<View className="flex-row justify-between w-full h-full mb-4 px-4 gap-4">
					<Button text="Login" action={() => navigation.navigate("Login")} />
					<Button
						text="Register"
						action={() => navigation.navigate("Register")}
					/>
				</View>
			</View>
		</ScrollView>
	);
}
