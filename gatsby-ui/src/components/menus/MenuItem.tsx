import { ReactElement } from 'react';
import { SanityRoute } from '../../../graphql-types';
import useMenuState from '../../hooks/useMenuState';
import { UniversalLink } from '../UniversalLink';

const MenuItem = ({
  menuItem,
  className,
  toggleOpen,
}: {
  menuItem: SanityRoute;
  className?: string;
  toggleOpen?: () => void;
}): ReactElement => {
  const { page, slug } = menuItem;
  const { closeMenu } = useMenuState();
  return (
    <UniversalLink
      className={className}
      activeClassName="nav-item--active"
      to={slug?.current === 'home' ? '/' : `/${slug?.current as string}`}
      title={page?.title}
      onClick={() => {
        if (toggleOpen) {
          toggleOpen();
        }
        closeMenu();
      }}
    >
      {page?.title}
    </UniversalLink>
  );
};

export default MenuItem;
