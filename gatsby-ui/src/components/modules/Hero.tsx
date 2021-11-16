import styled from '@emotion/styled';
import { ReactElement } from 'react';
import { SanityHero } from '../../../graphql-types';
import CallToAction from '../CallToAction';
import BlockContent from '../PortableText';

const HeroStyles = styled.section`
  &.hero {
    position: relative;
    min-height: 60vh;
    display: grid;
    background: whitesmoke;
    place-items: center;
    padding-bottom: 4rem;
  }

  .content {
    text-align: center;
    max-width: 96vw;
    margin: auto;
    /* height: 100%; */
    display: grid;
    place-items: center;
  }

  h1 {
    text-align: center;
  }

  .custom-shape-divider-bottom-1635193655 {
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
  }

  .custom-shape-divider-bottom-1635193655 svg {
    position: relative;
    display: block;
    width: calc(127% + 1.3px);
    height: 100px;
  }

  .custom-shape-divider-bottom-1635193655 .shape-fill {
    fill: white;
  }
  @media (min-width: 576px) {
    .custom-shape-divider-bottom-1635193655 svg {
      height: 173px;
    }
  }
`;

export default function Hero({ props }: { props: SanityHero }): ReactElement {
  return (
    <HeroStyles className="hero">
      <div className="content">
        <BlockContent block={props._rawHeadLine} />

        {props?.cta && <CallToAction cta={props?.cta} />}
      </div>
      <div className="custom-shape-divider-bottom-1635193655">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          />
        </svg>
      </div>
    </HeroStyles>
  );
}
