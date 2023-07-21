import { useParams } from "@remix-run/react"
import { Layout } from "~/components/Layout"

export default function RoutePage() {
	return (
		<Layout>
			<pre className="font-semibold bg-red-400">{JSON.stringify(useParams(), null, 2)}</pre>
		</Layout>
	)
}
