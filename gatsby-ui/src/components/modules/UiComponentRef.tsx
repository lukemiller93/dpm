import { SanityUiComponentRef } from "../../../graphql-types";
import loadable from '@loadable/component'
import pascalCase from "just-pascal-case";
import React from 'react'


const getUiComponent = (type: any) => {
  const formattedType = pascalCase(type)

  const Component = loadable(() => import(`../ui-components/${formattedType}`))
  return <Component type={type} />
}

export default function UiComponent({props}: {props: SanityUiComponentRef}) {


  return (
    <>
      {getUiComponent(props?.name)}
    </>
  )
}
