import { SanityService } from "../../graphql-types"

function ServiceCard({service}: {service: SanityService}) {
  return (
    <div>
      <pre>{JSON.stringify(service, null, 2)}</pre>
    </div>
  )
}

export default ServiceCard
