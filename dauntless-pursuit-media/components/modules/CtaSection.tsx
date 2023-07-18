import { PortableTextZ, ctaZ } from "@/types/shared";
import { groq } from "next-sanity";
import { z } from "zod"

export const ctaSectionPropsZ = z.object({
	_type: z.literal("ctaSection"),
	_key: z.string(),
	backgroundColor: z.string().nullish(),
	body: PortableTextZ.nullish(),
	cta: ctaZ.nullish(),
})
export const CtaSectionQuery = groq`
	_type == "ctaSection" => {
		_type,
		_key,
		"backgroundColor": backgroundColor.hex,
		body,
		cta {
			route->{
				"slug":slug.current,
			},
			link,
			buttonColor,
			title
		}
	}
`;
export type CTASectionProps = z.infer<typeof ctaSectionPropsZ>
export const CtaSection = ({_key,_type}: CTASectionProps) => {
	return <section>
		<div className="container mx-auto">
			Cta Section
		</div>
	</section>
}
