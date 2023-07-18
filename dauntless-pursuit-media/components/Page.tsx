import { PageDoc } from "@/types/page";
import { groq } from "next-sanity";
import {  HeroSectionQuery } from "./modules/Hero";
import {  CardSectionQuery } from "./modules/CardSection";
import { ColumnsQuery } from "./modules/Columns";
import {  CtaSectionQuery } from "./modules/CtaSection";
import {  RichTextQuery } from "./modules/RichText";
import { TextWithImageQuery } from "./modules/TextWithImage";
import { UiComponentQuery } from "./modules/UiComponentRef";
import dynamic from "next/dynamic";
import { ComponentType } from "react";


// type guard function to check for _key
function hasKey(module: unknown): module is PageDoc["modules"][0] {
	return (
    Boolean(module) &&
    typeof module === "object" &&
    typeof (module as PageDoc["modules"][0])._type === "string" &&
    typeof (module as PageDoc["modules"][0])._key === "string"
  );
}
export const PageQuery = groq`
	_id,
	_type,
	_key,
	title,
	route->{
		"slug": slug.current,
		title,
		_id,
		_key,
		_type
	},
	modules[]{
		${HeroSectionQuery},
		${CardSectionQuery},
		${ColumnsQuery},
		${CtaSectionQuery},
		${RichTextQuery},
		${TextWithImageQuery},
		${UiComponentQuery}
	}
`;

const lookup = {
  hero: dynamic(() =>
    import("@/components/modules/Hero").then((mod) => mod.HeroSection)
  ),
  cardSection: dynamic(() =>import("@/components/modules/CardSection").then((mod) => mod.CardSection)),
  columns: dynamic(() =>import("@/components/modules/Columns").then((mod) => mod.ColumnsSection)),
  ctaSection: dynamic(() =>import("@/components/modules/CtaSection").then((mod) => mod.CtaSection)),
  richText: dynamic(() =>import("@/components/modules/RichText").then((mod) => mod.RichText)),
  textWithImage: dynamic(() =>import("@/components/modules/TextWithImage").then((mod) => mod.TextWithImage)),
  uiComponentRef: dynamic(() =>import("@/components/modules/UiComponentRef").then((mod) => mod.UiComponentRef)),
} as const ;

export const Page = ({ modules }: { modules: PageDoc["modules"] }) => {


  return <>
		{modules?.map((module, idx) => {
			const Component = lookup[module._type];

			if (hasKey(module)) {
				return <Component key={module._key } {...module} />
			}

				return null

		})}
	</>
};
