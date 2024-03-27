import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { WagmiConfig } from "@/components/wagmi-config";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "foundry dapp",
	description: "Lending and borrowing",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<WagmiConfig>
					<div>
						<Header />
						<main className="grid grid-cols-1 md:mt-10">
							{children}
						</main>
					</div>
				</WagmiConfig>
			</body>
		</html>
	);
}
