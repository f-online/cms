import { FaCarCrash as icon } from "react-icons/fa";

export default {
  name: "drivingschoolregion",
  title: "Fahrschulen nach Region",
  type: "document",
  icon,
  fields: [
    {
      name: "region",
      title: "Region",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "drivingschools",
      title: "Fahrschulen",
      type: "array",
      of: [
        {
          type: "drivingschoolObject",
        },
      ],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "country",
      title: "Zugeordnetes Land",
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
  preview: {
    select: {
      region: "region",
      country: "country.name",
    },
    prepare: ({ region, country }) => ({
      title: region,
      subtitle: country,
    }),
  },
};
