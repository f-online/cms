import { HiUsers as icon } from "react-icons/hi";

export default {
  name: "team",
  title: "Team",
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
      name: "position",
      title: "Position",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "mail",
      title: "Mail",
      type: "string",
    },
    {
      name: "website",
      title: "Website",
      type: "url",
      validation: (Rule) =>
        Rule.uri({
          scheme: ["http", "https"],
        }),
    },
    {
      name: "image",
      title: "Profilbild",
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
  preview: {
    select: {
      name: "name",
      image: "image",
      position: "position",
    },
    prepare: ({ name, image, position }) => ({
      title: name,
      subtitle: position,
      media: image,
    }),
  },
};
