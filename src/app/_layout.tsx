import { Slot } from "expo-router";
import { setBackgroundColorAsync } from "expo-system-ui"; // controla a Navigation Bar
import { useEffect } from "react";
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
	useEffect(() => {
		// Muda a cor da Navigation Bar (inferior) para preto
		setBackgroundColorAsync("#000000");
	}, []);

	return (
		<>
			{/* Muda a StatusBar (superior) para preto com ícones claros */}
			<StatusBar barStyle="light-content" backgroundColor="#000000" />
			<Slot />
		</>
	);
}
