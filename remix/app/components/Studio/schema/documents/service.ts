export default {
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Heading'
    },
    {
      name: 'description',
      type: 'simpleBlockContent',
      title: 'Service Description'
    }
  ]
}