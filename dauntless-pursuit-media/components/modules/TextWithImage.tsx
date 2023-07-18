import { PortableTextZ, imagePropsZ } from "@/types/shared";
import { groq } from "next-sanity";
import { z } from "zod"

export const textWithImagePropsZ = z.object({
	_type: z.literal("textWithImage"),
	_key: z.string(),
	imagePlacement: z.enum(["left", "right"]).default("left"),
	image: imagePropsZ.nullish(),
	text: PortableTextZ.nullish(),
})

export const TextWithImageQuery = groq`
	_type == "textWithImage" => {
		_type,
		_key,
		imagePlacement,
		text[],
		image {
			asset->{
				_ref,
				_id,
				assetId,
				metadata {
					lqip,
				}
			}
		}
	}
`;
export type TextWithImageProps = z.infer<typeof textWithImagePropsZ>
export const TextWithImage = ({_key,_type}: TextWithImageProps) => {
	return (
		<section>TextWithImage</section>
	)
}
