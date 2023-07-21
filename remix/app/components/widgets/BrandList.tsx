import { BrandDoc } from "@/types/brand"
import { useNextSanityImage } from "next-sanity-image"
import Image from "next/image"
import { SanityImage } from "../SanityImage"
import { ImageInputProps } from "sanity"



export const BrandList = async () => {

	const brands: BrandDoc[] = await fetch(`http://localhost:3000/api/brand`, {next: {
		revalidate: 10
	}}).then(res => res.json())

	return (
		<section className="my-32 container mx-auto">
			<h3 className="text-4xl font-bold mb-6">Brands we've worked with</h3>
			<ul className="flex gap-16  object-contain items-center flex-wrap justify-center">
				{brands?.map(({title, logo, slug}) => {
					const isOpaque = logo?.asset?.metadata?.isOpaque
					console.log(isOpaque)
					return (
						<li key={slug} className="">
							<SanityImage image={logo } alt={""} className={`w-48 ${isOpaque ? "mix-blend-darken" : ""}`} />
						</li>
					)
				})}
			</ul>

		</section>
	)
}
