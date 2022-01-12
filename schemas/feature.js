import { FaMicroscope as icon } from "react-icons/fa";

export default {
  name: "feature",
  title: "Feature",
  type: "document",
  icon,
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "info",
      title: "Feature Info",
      type: "text",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      title: "Feature Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "countries",
      title: "Zugeordnete Länder",
      type: "array",
      of: [
        {
          type: "reference",
          to: [
            {
              type: "country",
            },
          ],
          options: {
            disableNew: true,
          },
        },
      ],
      validation: (Rule) => Rule.required(),
    },
  ],
};
