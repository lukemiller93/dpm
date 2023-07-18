import { imagePropsZ, routeStubZ } from "@/types/shared";
import { groq } from "next-sanity";
import { z } from "zod";

export const heroPropsZ = z.object({
  _type: z.literal("hero"),
  _key: z.string(),
  heros: z.array(
    z.object({
      title: z.string().nullish(),
      image: imagePropsZ,
      action: z.object({
        actionTitle: z.string().nullish(),
        route: routeStubZ
          .pick({ _id: true, slug: true, title: true })
          .nullish(),
      }),
    })
  ),
});
export const HeroSectionQuery = groq`
	_type == "hero" => {
		_type,
		_key,
		heros[] {
			title,
			image {
				asset->{
					_ref,
					_id,
					assetId,
					metadata {
						lqip
					}
				},

			},
			action {
				actionTitle,
				route-> {
					_type,
					_key,
					"slug":slug.current,
					title,
					_id,
				}
			}
		}
	}
`;
export type HeroProps = z.infer<typeof heroPropsZ>;
export const HeroSection = ({ _key, _type, ...rest }: HeroProps) => {
  return (
    <section>
      <pre>{JSON.stringify(rest, null, 2)}</pre>
    </section>
  );
};
