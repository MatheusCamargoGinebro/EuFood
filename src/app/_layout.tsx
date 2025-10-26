import { Slot } from "expo-router";
import { setBackgroundColorAsync } from "expo-system-ui";
import { useEffect } from "react";
import { StatusBar } from "react-native";
import "../../global.css";

export default function RootLayout() {
	useEffect(() => {
		setBackgroundColorAsync("#000000");
	}, []);

	return (
		<>
			<StatusBar barStyle="dark-content" backgroundColor={"#f1f5f9"} />
			<Slot />
		</>
	);
}
