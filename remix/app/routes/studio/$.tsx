import { ClientOnly } from 'remix-utils'
import Studio from '~/components/Studio'

export let handle = `studio`

export default function StudioPage() {
  return (
    <ClientOnly>
      {() => (
        <div id="sanity-studio">
          <Studio />
        </div>
      )}
    </ClientOnly>
  )
}
