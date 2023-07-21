import { clientFetch } from "@/sanity/sanity.client";
import { projectsZ } from "@/types/project";
import { groq } from "next-sanity";
import { NextResponse } from "next/server";

export async function GET() {
  const data = await clientFetch(groq`*[_type == "project"]{
		_id,
		_type,
		title,
		"slug":slug.current,
		author->{
			_type,
			_id,
			name,
			"slug":slug.current,
			image {
				asset->{
					_id,
					assetId,
					metadata {
						lqip,
						isOpaque
					}
				}
			}

		},
		body[],
		excerpt,
		categories[]->{
			_id,
			title,
			"slug":slug.current
		},
		publishedAt,
		image {
			asset->{
				_id,
				assetId,
				metadata {
					lqip,
					isOpaque
				}
			}
		}	}`).then((res) => (res ? projectsZ.parse(res) : null));

  if (!data) {
    throw new Error("No data");
  }

  return NextResponse.json(data);
}
