import { Slot } from "expo-router";
import { StatusBar } from "react-native";
import "../../global.css";

const levels = ["log", "info", "warn", "error", "debug"] as const;

levels.forEach((level) => {
	const original = console[level].bind(console);
	(console[level] as (...args: any[]) => void) = function (...args: any[]) {
		original(...args);
		try {
			window.parent.postMessage({ type: "console", level, args }, "*");
		} catch (e) {}
	};
});

export default function RootLayout() {
	return (
		<>
			<StatusBar barStyle="dark-content" backgroundColor={"#f1f5f9"} />

			<Slot />
		</>
	);
}
