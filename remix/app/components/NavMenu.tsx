import { NavLink } from "@remix-run/react"


export const NavMenu = ({items}) => {
  return (
    <nav>
      <ul>
        {items.map(item => (
          <li key={item._key}>
            <NavLink to={item?.sitePageRoute?.slug?.current}>{item?.title}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
