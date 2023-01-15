import { FaFileAlt as icon } from "react-icons/fa";
import { SlugInput } from 'sanity-plugin-prefixed-slug';

export default {
  name: "staticPage",
  title: "Statische Seiten",
  type: "document",
  icon,
  fields: [
    {
      name: "title",
      title: "Titel",
      type: "string",
      description: "Titel des Dokumentes",
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
      name: "slug",
      title: "URL",
      type: "slug",
      validation: (Rule) => Rule.required(),
      components: {
        input: SlugInput,
      },
      options: {
        source: "title",
        urlPrefix: "https://f-online.app/{cc}",
        maxLength: 100,
      },
      description:
        "{cc} will be replaced by the countryCode of the chosen country",
    },
    {
      name: "sections",
      title: "Sections",
      type: "array",
      of: [
        {
          type: "section",
        },
        {
          type: "quote",
        },
        {
          type: "teamObject",
        },
        {
          type: "faqObject",
        },
        {
          type: "reviewObject",
        },
        {
          type: "featureObject",
        },
      ],
    },
    {
      name: "seo",
      title: "SEO - Informationen",
      type: "seoObject",
    },
  ],
  preview: {
    select: {
      title: "title",
      slug: "slug",
      countryCode: "country.countryCode",
    },
    prepare: ({ title, slug, countryCode }) => ({
      title,
      subtitle: `/${countryCode}/${slug.current}`,
    }),
  },
};
