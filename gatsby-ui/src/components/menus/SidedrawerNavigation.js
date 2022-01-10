import styled from '@emotion/styled';
import { motion, useCycle } from 'framer-motion';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image';
import React, { useRef } from 'react';
import { useDimensions } from '../../hooks/useDimensions';
import MenuItem from './MenuItem';
import { MenuToggle } from './MenuToggle';

const Sidedrawer = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 32rem;
  z-index: calc(var(--z-index-floating) * 4);

  .logo {
    margin: 2rem auto;
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
    padding: 2.5rem;
    /* z-index: 400; */
    z-index: calc(var(--z-index-floating) * 2);
    position: absolute;
    top: 15rem;
    list-style: none;
    width: 100%;
    max-width: 32rem;
    li {
      margin-bottom: 2rem;
      position: relative;
      flex-wrap: wrap;
      flex-direction: row;
      justify-content: space-between;
      a {
        text-decoration: none;
        color: var(--cbc-blue);
        &:hover {
          color: var(--cbc-red);
        }

        &.primary-navigation--active {
          color: var(--cbc-red);
          font-weight: 600;
        }
      }

      > ul {
        position: relative;
        margin: 0;
        padding: 0;
        top: 0;
        width: 100%;
        box-shadow: none;
        background: rgba(232, 232, 232, 0.5);
      }
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
      delay: 0.5,
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
export const SidedrawerNavigation = ({ items }) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

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
              <MenuItem toggleOpen={toggleOpen} menuItem={menuItem} />
            </motion.li>
          ))}
        </motion.ul>
      </Sidedrawer>
      <MenuToggle toggle={() => toggleOpen()} />
    </>
  );
};
