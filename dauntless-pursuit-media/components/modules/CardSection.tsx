import { postZ } from "@/types/post";
import { projectZ } from "@/types/project";
import { serviceZ } from "@/types/service";
import { ctaZ } from "@/types/shared";
import { groq } from "next-sanity";
import { z } from "zod";

export const cardSectionPropsZ = z.object({
  _type: z.literal("cardSection"),
  _key: z.string(),
  heading: z.string().nullish(),
  tagline: z.array(z.any()).nullish(),
  cards: z.array(z.discriminatedUnion("_type", [projectZ, postZ, serviceZ])),
  ctas: z.array(ctaZ).nullish(),
});

export const CardSectionQuery = groq`
	_type == "cardSection" => {
		_type,
		_key,
		heading,
		cards[]->{
			_type,
			_type == "project" => {
				_type,
				title,
				"slug":slug.current,
				_id

			},
			_type == "post" => {
				_type,
				title,
				"slug":slug.current,
				_id

			},
			_type == "service" => {
				_type,
				title,
				"slug":slug.current,
				_id,
				description
			}
		}
	}
`;
export type CardSectionProps = z.infer<typeof cardSectionPropsZ>;
export const CardSection = (props: CardSectionProps) => {
  return <section><h1 className="font-bold uppercase">card section</h1><pre>{JSON.stringify(props, null, 2)}</pre></section>;
};
