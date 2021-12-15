import { ReactElement } from 'react';
import { Helmet } from 'react-helmet';

interface SEOProps {
  title: string;
  location: string;
}

function SEO({ title, location }: SEOProps): ReactElement {
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
