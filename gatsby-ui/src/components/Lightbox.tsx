import Dialog from '@reach/dialog';
import { GatsbyImage } from 'gatsby-plugin-image';
import React, { ReactElement, useState } from 'react';
import styled from '@emotion/styled';
import { SanityIllustration } from '../../graphql-types';
import '@reach/dialog/styles.css';
import { useWindowSize } from '../utils/useWindowSize';
import { device } from '../styles/theme';

const LightboxContainer = styled.div`
  display: grid;
  margin: var(--grid-gap-md) auto var(--grid-gap-lg);
  gap: var(--grid-gap-sm);
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

  button {
    border: none;
    padding: 0;
    margin: 0;
    border-radius: var(--border-radius-md);
    overflow: hidden;
    box-shadow: var(--bs);
    aspect-ratio: 4/3;
    @media ${device.md} {
      cursor: zoom-in;
    }
  }

  .gatsby-image-wrapper {
    object-fit: cover;
    height: 100%;
    width: 100%;
    margin: 0;
  }
`;
export default function Lightbox({
  gallery,
}: {
  gallery: SanityIllustration[];
}): ReactElement {
  const [selectedImage, setSelectedImage] = useState('');
  const [lightboxVisible, setLightboxVisible] = useState(false);
  const { browserWidth } = useWindowSize();
  console.log(device);
  return (
    <>
      <LightboxContainer>
        {gallery?.map((item) => (
          <button
            type="button"
            key={item?._key}
            onClick={() => {
              setSelectedImage(item?.image);
              setLightboxVisible(true);
            }}
          >
            <GatsbyImage
              image={item?.image?.asset?.gatsbyImageData}
              alt={item?.image?.alt || item?.image?.asset?.altText || ''}
            />
          </button>
        ))}
      </LightboxContainer>
      {lightboxVisible && browserWidth > 750 && (
        <Dialog
          allowPinchZoom
          style={{ zIndex: 4000 }}
          onDismiss={() => setLightboxVisible(false)}
        >
          <GatsbyImage
            image={selectedImage?.asset?.gatsbyImageData}
            alt={selectedImage?.alt || selectedImage?.asset?.altText || ''}
          />
          <button
            className="button bg--black btn--sm"
            type="button"
            onClick={() => setLightboxVisible(false)}
          >
            Close
          </button>
        </Dialog>
      )}
    </>
  );
}
