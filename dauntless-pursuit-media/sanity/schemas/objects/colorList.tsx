import { defineField, defineType } from "sanity";

// const Colors = (props) => {
//   console.log(props)
//   return <span>Hi</span>
// }

export const brandColors = defineField({
  title: "Brand Colors",
  type: "color",
  name: "brandColors",
  options: {
    colorList: ["#000000", "#FFFFFF", "#226611"],
  },
});
