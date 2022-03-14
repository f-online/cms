import { FaGlobeAfrica as icon } from "react-icons/fa";

export default {
  name: "country",
  title: "Land - Einstellungen",
  type: "document",
  icon,
  fields: [
    {
      name: "name",
      title: "Name des Landes",
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
      name: "logo",
      title: "Logo",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "staticPageHeaderLinks",
      title: "Static Pages im Header",
      type: "array",
      of: [
        {
          type: "reference",
          to: [
            {
              type: "staticPage",
            },
          ],
          options: {
            disableNew: true,
          },
        },
      ],
    },
    {
      name: "staticPageFooterLinks",
      title: "Static Pages im Footer",
      type: "array",
      of: [
        {
          type: "reference",
          to: [
            {
              type: "staticPage",
            },
          ],
          options: {
            disableNew: true,
          },
        },
      ],
    },
    {
      name: "seo",
      title: "SEO - Informationen (Startseite Land)",
      type: "seoObject",
    },
  ],
};
