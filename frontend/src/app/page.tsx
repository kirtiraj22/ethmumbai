"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
	const [pool, setPool] = useState(BigInt(0));

	return (
		<>
			<div className="mx-auto mb-8 w-full max-w-6xl px-4">
				{/* <h1 className="text-2xl">Current pool is {formatUsdt(pool)} USDT</h1> */}
				<h1 className="text-2xl">Current pool is 10 USDT</h1>
			</div>
			<div
				className="mx-auto mb-8 w-full max-w-6xl px-4"
				defaultValue="lend"
			>
				<div className="grid w-full grid-cols-2">
					<button value="lend">Lend</button>
					<button value="borrow">Borrow</button>
				</div>
				{/* <TabsContent value="lend">
          <LendForm />
        </TabsContent>
        <TabsContent value="borrow">
          <BorrowForm />
        </TabsContent> */}
			</div>
		</>
	);
}
