import { FaConnectdevelop as icon } from "react-icons/fa";

export default {
  name: "seoObject",
  title: "SEO - Informations",
  type: "object",
  icon,
  fields: [
    {
      name: "title",
      title: "Title (Browser / Suchmaschine)",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "socialImage",
      title: "Social Image (Facebook, Twitter, usw.)",
      type: "image",
    },
  ],
};
