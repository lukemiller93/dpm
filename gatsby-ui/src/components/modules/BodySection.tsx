import styled from '@emotion/styled';
import { SanityBodySection } from '../../../graphql-types';
import BlockContent from '../PortableText';

const BodySectionStyles = styled.section`
  display: grid;

  &:not(&.only-one-el, :first-of-type) {
    margin: 20vh auto;
  }

  &first-of-type {
    padding-top: var(--spacing-lg);
  }
`;

export default function BodySection({ props }: { props: SanityBodySection }) {
  const onlyOneEl = props?._rawContent?.length === 1;

  return (
    <BodySectionStyles
      className={`body-section container ${(onlyOneEl && 'only-one-el') || ''}`}
    >
      <BlockContent block={props?._rawContent} />
    </BodySectionStyles>
  );
}
