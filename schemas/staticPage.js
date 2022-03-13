import { FaFileAlt as icon } from "react-icons/fa";
import SlugInput from "sanity-plugin-better-slug";

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
      name: "slug",
      title: "URL",
      type: "slug",
      validation: (Rule) => Rule.required(),
      inputComponent: SlugInput,
      options: {
        source: "title",
        basePath: "https://f-online.at",
        maxLength: 100,
      },
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
    },
    prepare: ({ title, slug }) => ({
      title,
      subtitle: `/${slug.current}`,
    }),
  },
};
