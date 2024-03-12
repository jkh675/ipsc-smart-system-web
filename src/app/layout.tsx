import React from "react";
import type { Metadata } from "next";
import { Inter as inter } from "next/font/google";
import "./globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import ButtonAppBar from "@/components/GlobalLayoutAppBar";

const INTER = inter({ subsets: ["latin"] });

// eslint-disable-next-line @typescript-eslint/naming-convention
export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={INTER.className}>
				<ButtonAppBar/>
				{children}
			</body>
		</html>
	);
}
