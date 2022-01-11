import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import React, { ReactElement } from 'react';
import useMenuState from '../../hooks/useMenuState';

const StyledToggle = styled(motion.button)`
  display: flex;
  cursor: pointer;
  /* height: 4rem; */
  /* position: fixed; */
  right: 1rem;
  top: 1rem;
  text-transform: uppercase;
  align-items: center;
  gap: 4px;
  border-radius: 1rem;
  background: white;
  z-index: var(--z-index-floating);
  border: 1px solid var(--cbc-black);
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.3), 0px 0px 1.2rem rgba(0, 0, 0, 0.1);
  padding: 0.5rem 1rem;
  transition: transform 100ms ease;
  z-index: calc(var(--z-index-floating) * 4);
  will-change: transform;
  > svg {
    flex: 1 0 auto;
  }
  > span {
    flex-shrink: 1;
  }
`;
export const MenuToggle = ({
  toggle,
}: {
  toggle: () => void;
}): ReactElement => {
  const { browserWidth } = useMenuState();

  if (browserWidth < 750) {
    return (
      <StyledToggle
        whileHover={{ scale: 1.1, transition: { duration: 0.25 } }}
        whileTap={{ scale: 0.95 }}
        onClick={toggle}
        aria-label="Toggle Menu"
        type="button"
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 12 16"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M11.41 9H.59C0 9 0 8.59 0 8c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zm0-4H.59C0 5 0 4.59 0 4c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zM.59 11H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1H.59C0 13 0 12.59 0 12c0-.59 0-1 .59-1z"
          />
        </svg>
        <span>Menu</span>
      </StyledToggle>
    );
  }
  return <></>;
};
