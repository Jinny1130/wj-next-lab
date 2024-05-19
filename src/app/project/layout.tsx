import type { Metadata } from "next";
import { Nanum_Gothic } from "next/font/google";
import "@/styles/globals.css";

const notoSansKR = Nanum_Gothic({ weight: ['400', '700', '800'], subsets: ['latin'] });

export const metadata: Metadata = {
	description: "Next.js 로 만들어 본것들 모아모아🤗",
	icons: {
		icon: '/images/wj.png'
	}
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en">
			<body className={notoSansKR.className}>
				{children}
			</body>
		</html>
	);
}
