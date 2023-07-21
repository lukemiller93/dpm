import { El_Messiri } from "next/font/google"

const logoFont = El_Messiri({ subsets: ["latin"] , variable: "--font-logo"});

export const Logo = () => {
	return (
		<div className={`${logoFont.variable} bg-transparent font-logo font-bold tracking-tighter text-white text-4xl mix-blend-m`}>
			<span className="sr-only">Dauntless Pursuit Media Logo</span>
			<span className="font-logo text-white">DPM</span><span className="text-5xl text-yellow-200">.</span>
		</div>
	)
}
