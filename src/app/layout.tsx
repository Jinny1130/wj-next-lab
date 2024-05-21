import type { Metadata } from "next";
import { Nanum_Gothic } from "next/font/google";
import "@/styles/globals.css";

const notoSansKR = Nanum_Gothic({ weight: ['400', '700', '800'], subsets: ['latin'] });

export const metadata: Metadata = {
	title: "최우진 | Front-end | Resume",
	description: "안녕하세요👋🏻 프론트엔드 개발자 최우진입니다.",
	icons: {
		icon: '/wj.png'
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
