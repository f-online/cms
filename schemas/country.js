import { FaGlobeAfrica as icon } from "react-icons/fa";

export default {
  name: "country",
  title: "Land - Einstellungen",
  type: "document",
  icon,
  fields: [
    {
      name: "country",
      title: "Land",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "countryCode",
      title: "Country Code",
      description: "'de' für Deutschland, 'at' für Österreich, usw.",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "teammembers",
      title: "Team",
      type: "array",
      of: [
        {
          type: "reference",
          to: [
            {
              type: "team",
            },
          ],
          options: {
            disableNew: true,
          },
        },
      ],
    },
  ],
};
