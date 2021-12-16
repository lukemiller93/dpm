import { ReactElement } from 'react';
import { Helmet } from 'react-helmet';
import { Maybe } from '../../graphql-types';

interface SEOProps {
  title: Maybe<string> | undefined;
  location: string;
}

function SEO({
  title = 'Dauntless Pursuit Media',
  location,
}: SEOProps): ReactElement {
  console.log(location);
  return (
    <Helmet
      bodyAttributes={{
        class: location.includes('request-a-proposal')
          ? 'proposal-intake'
          : null,
      }}
    >
      <title>{title}</title>
    </Helmet>
  );
}

export default SEO;
