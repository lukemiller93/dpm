


export const projectDetails = () => {
	return {
		projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
		dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
		apiVersion: "2023-07-07",
	}
}
