import { Text, TextProps } from "@chakra-ui/react";
import React, { ReactNode } from "react";

type Props = { children: ReactNode } & TextProps;

export default function Header({ children, ...styles }: Props) {
	return (
		<Text fontSize="4xl" fontWeight="black" {...styles}>
			{children}
		</Text>
	);
}
