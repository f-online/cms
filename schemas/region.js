import { FaMapMarked as icon } from "react-icons/fa";

export default {
  name: "region",
  title: "Region",
  type: "document",
  icon,
  fields: [
    {
      name: "name",
      title: "Region",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "country",
      title: "Land",
      type: "reference",
      to: [
        {
          type: "country",
        },
      ],
      options: {
        disableNew: true,
      },
      validation: (Rule) => Rule.required(),
    },
  ],
};
