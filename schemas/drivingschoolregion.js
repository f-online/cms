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
