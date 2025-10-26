import { ScrollView, View } from "react-native";
import { Banner } from "../components/banner";
import { Header } from "../components/header";
import { Search } from "../components/search";

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
		</ScrollView>
	);
}
