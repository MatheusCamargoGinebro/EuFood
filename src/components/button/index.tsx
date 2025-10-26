import { Pressable, Text } from "react-native";

interface Props {
	text: string;
	action: () => void;
}

export function Button({ text, action }: Props) {
	return (
		<Pressable className="" key="1" onPress={() => action()}>
			<Text className="text-white font-bold text-xl bg-red-600 px-10 py-2 rounded-xl">
				{text}
			</Text>
		</Pressable>
	);
}
