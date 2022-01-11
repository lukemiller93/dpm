import { ReactElement, useEffect } from 'react';
import { SanityRoute } from '../../../graphql-types';
import useMenuState from '../../hooks/useMenuState';
import { UniversalLink } from '../UniversalLink';
import MenuItem from './MenuItem';
import { SidedrawerNavigation } from './SidedrawerNavigation';

export default function PrimaryMenu({
  items,
  itemClassName,
}: {
  itemClassName?: string;
  items: SanityRoute[];
}): ReactElement {
  const { browserWidth, closeMenu } = useMenuState();
  useEffect(() => {
    if (browserWidth >= 750) {
      closeMenu();
    }
  }, [browserWidth]);
  if (browserWidth >= 750 && !!items) {
    return (
      <>
        {items.map((menuItem) => (
          <MenuItem
            className={itemClassName}
            key={menuItem.id}
            menuItem={menuItem}
          />
        ))}
        <UniversalLink to="#contact" hashLink className="nav-item">
          Contact
        </UniversalLink>
      </>
    );
  }
  if (browserWidth < 750) {
    return <SidedrawerNavigation items={items} />;
  }
  return <></>;
}
