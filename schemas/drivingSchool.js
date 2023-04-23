import { FaCarCrash as icon } from "react-icons/fa";

export default {
  name: "drivingSchool",
  title: "Fahrschulen",
  type: "document",
  icon,
  fields: [
    {
      name: "name",
      title: "Name der Fahrschule",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "street",
      title: "Straße + Hausnummer",
      type: "string",
    },
    {
      name: "zip",
      title: "Postleitzahl",
      type: "string",
    },
    {
      name: "city",
      title: "Stadt",
      type: "string",
    },
    {
      name: "region",
      title: "Region",
      type: "reference",
      to: [
        {
          type: "region",
        },
      ],
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
    {
      name: "url",
      title: "Website / URL",
      type: "url",
    },
    {
      name: "logo",
      title: "Logo",
      type: "image",
    },
  ],
  preview: {
    select: {
      name: "name",
      country: "country.name",
      region: "region.name",
      logo: "logo",
    },
    prepare: ({ name, country, region, logo }) => ({
      title: name,
      subtitle: `${country} / ${region}`,
      media: logo,
    }),
  },
};
