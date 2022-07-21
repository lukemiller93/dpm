export default {
  name: 'mainImage',
  type: 'image',
  title: 'Image',
  options: {
    hotspot: true
  },
  fields: [
    {
      name: 'objectFit',
      type: 'string',
      title: 'Object Fit',

      options: {
        list: ["cover", "contain"],
        layout: 'radio',
        direction: 'horizontal'
      }
    },

    {
      name: 'alt',
      type: 'string',
      title: 'Alternative text',
      description: 'Important for SEO and accessibility.',
      validation: Rule => Rule.error('You have to fill out the alternative text.').required(),
      options: {
        isHighlighted: true
      }
    }
  ],
  preview: {
    select: {
      imageUrl: 'asset.url',
      title: 'caption'
    }
  }
}
