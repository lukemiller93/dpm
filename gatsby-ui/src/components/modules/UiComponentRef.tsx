import React, { ReactElement } from 'react';
import loadable from '@loadable/component';
import { PageProps } from 'gatsby';
import pascalCase from 'just-pascal-case';
import { SanityUiComponentRef } from '../../../graphql-types';

const getUiComponent = (type, location) => {
  console.log(location);
  const formattedType = pascalCase(type);

  const Component = loadable(() => import(`../ui-components/${formattedType}`));
  return <Component type={type} location={location} />;
};
interface ComponentWithLocation extends SanityUiComponentRef {
  location: PageProps;
}

export default function UiComponent({
  props,
}: {
  props: ComponentWithLocation;
}): ReactElement {
  return <>{getUiComponent(props?.name, props?.location)} </>;
}
//
