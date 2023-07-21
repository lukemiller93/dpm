import { clientFetch } from "@/sanity/sanity.client";
import { brandZ, brandsZ } from "@/types/brand";
import { groq } from "next-sanity";
import { NextResponse } from "next/server";

export async function GET() {
  const data = await clientFetch(groq`*[_type == "brand"]{
		_id,
		_type,
		title,
		"slug":slug.current,
		description[],
		logo {
			asset->{
				_id,
				assetId,
				metadata {
					lqip,
					isOpaque
				}
			}
		}	}`).then(res => res ? brandsZ.parse(res) : null)

		if(!data) {
			throw new Error("No data")
		}




  return NextResponse.json(data);
}
