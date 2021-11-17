import { ReactElement } from 'react';
import PortableText from 'react-portable-text';
import { SanityLinkCreator } from '../../graphql-types';
import CallToAction from './CallToAction';
import { UniversalLink } from './UniversalLink';

const serializers = {
  linkCreator: (props: SanityLinkCreator): ReactElement<SanityLinkCreator> => (
    <CallToAction cta={props} />
  ),
  link: (props) => (
    <UniversalLink to={props?.href}>{props?.children}</UniversalLink>
  ),
  internalLink: (props) => (
    <UniversalLink to={`/${props?.reference?.slug?.current}`}>
      {props?.children}
    </UniversalLink>
  ),
};

const BlockContent = ({
  block,
  className = '',
}: {
  block: [Record<string, unknown>];
  className?: string;
}): ReactElement => (
  <PortableText
    className={className}
    serializers={serializers}
    content={block}
  />
);

export default BlockContent;
