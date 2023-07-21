import { ProjectDoc } from "@/types/project";

export const ProjectListing = async () => {
	const projects: ProjectDoc[] = await fetch(`http://localhost:3000/api/project`, {
    next: {
      revalidate: 10,
    },
  }).then((res) => res.json());
	return (
		<section>
			<h4>
				Project Listing
			</h4>
			<div>
				<pre>{JSON.stringify(projects, null, 2)}</pre>
			</div>

		</section>
	)
}
