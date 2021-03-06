import styled from '@emotion/styled';
import { motion, useCycle } from 'framer-motion';
import { StaticImage } from 'gatsby-plugin-image';
import React, { ReactElement, useRef } from 'react';
import { SanityRoute } from '../../../graphql-types';
import { useDimensions } from '../../hooks/useDimensions';
import useMenuState from '../../hooks/useMenuState';
import { UniversalLink } from '../UniversalLink';
import MenuItem from './MenuItem';
import { MenuToggle } from './MenuToggle';

const Sidedrawer = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: max-content;
  padding: 0 2rem;
  z-index: calc(var(--z-index-floating) * 4);

  .logo {
    display: flex;
  }
  .gatsby-image-wrapper {
    z-index: calc(var(--z-index-floating) * 5);
    margin: 2rem auto;
  }
  .background {
    z-index: calc(var(--z-index-floating) * 1);
    position: absolute;
    top: 0;
    height: 100%;
    left: 0;
    background-color: #fff;
    width: 100%;
    max-width: 50rem;
  }

  > ul {
    padding: 0;
    /* z-index: 400; */
    z-index: calc(var(--z-index-floating) * 2);
    position: absolute;
    top: 15rem;
    list-style: none;
    width: max-content;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    li {
      margin-bottom: 2rem;
      position: relative;
    }
  }
`;

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(0px at 20px 20px)',
    transition: {
      delay: 0.25,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};

const ulVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const liVariants = {
  open: {
    y: 0,
    display: 'flex',
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    display: 'none',
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};
export const SidedrawerNavigation = ({
  items,
}: {
  items: SanityRoute[];
}): ReactElement => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  const { isMenuOpen, closeMenu } = useMenuState();
  return (
    <>
      <Sidedrawer
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        custom={height}
        ref={containerRef}
        style={{ zIndex: isOpen ? `calc(var(--z-index-floating) * 2)` : -1 }}
      >
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.25 } }}
              className="logo"
            >
              <StaticImage src="../../images/dpm_wordmark.svg" alt="Logo" />
            </motion.div>
            <div
              style={{
                background: `rgba(0,0,0,0.2)`,
                position: `fixed`,
                top: 0,
                left: 0,
                height: `100%`,
                width: `100%`,
                zIndex: `0`,
              }}
            />
          </>
        )}
        <motion.div className="background" variants={sidebar} />
        <motion.ul variants={ulVariants}>
          {items.map((menuItem) => (
            <motion.li key={menuItem.id} variants={liVariants}>
              <MenuItem
                toggleOpen={toggleOpen}
                className="nav-item"
                menuItem={menuItem}
              />
            </motion.li>
          ))}
          <motion.li key="contact-link" variants={liVariants}>
            <UniversalLink
              to="#contact"
              onClick={() => {
                closeMenu();
                toggleOpen();
              }}
              hashLink
              className="nav-item"
            >
              Contact
            </UniversalLink>
          </motion.li>
        </motion.ul>
      </Sidedrawer>
      <MenuToggle toggle={() => toggleOpen()} />
    </>
  );
};
