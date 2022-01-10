import styled from '@emotion/styled';
import useMenuState from '../../hooks/useMenuState';
import { UniversalLink } from '../UniversalLink';

const StyledMenuItem = styled(UniversalLink)``;
const MenuItem = ({ toggleOpen, menuItem }) => {
  const { id, label, children, cssClasses, path, ...rest } = menuItem;
  const { closeMenu } = useMenuState();
  return (
    <>
      <StyledMenuItem
        // partiallyActive={menuItem.path !== '/'}
        activeClassName="primary-navigation--active"
        to={normalizePath(path)}
        title={rest.title}
        target={rest.target}
        onClick={() => {
          closeMenu();
          toggleOpen();
        }}
      >
        {label}
      </StyledMenuItem>
    </>
  );
};

export default MenuItem;
