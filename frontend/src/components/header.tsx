"use client";
import dynamic from "next/dynamic";
import Link from "next/link";
import React from "react";

export const ConnectButton = dynamic(() => import("./connect-button"), {
	ssr: false,
});

const Header = () => {
	return (
		<div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-4 py-6 md:h-24 md:flex-row">
			<div>
				<Link href="/">
					<div className="text-4xl font-black">EthMumbai Project</div>
				</Link>
			</div>
			<nav className="flex flex-wrap items-center gap-4">
				<>
					<Link href="/deposits">Deposits</Link>
					<Link href="/loans">Loans</Link>
				</>
				<ConnectButton />
			</nav>
		</div>
	);
};

export default Header;
