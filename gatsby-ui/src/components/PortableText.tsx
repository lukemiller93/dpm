import { ReactElement } from 'react';
import PortableText from 'react-portable-text';
import { SanityLinkCreator } from '../../graphql-types';
import CallToAction from './CallToAction';

const serializers = {
  linkCreator: (props: SanityLinkCreator): ReactElement<SanityLinkCreator> => (
    // console.log(props);
    <CallToAction cta={props} />
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
