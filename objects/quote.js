import { FaQuoteLeft as icon } from "react-icons/fa";

export default {
  name: "quote",
  title: "Zitat",
  type: "object",
  icon,
  fields: [
    {
      name: "quote",
      title: "Zitat",
      type: "text",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "author",
      title: "Autor",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "authorImage",
      title: "Bild des Autors",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "role",
      title: "Rolle / Beruf",
      type: "string",
    },
    {
      name: "website",
      title: "Website",
      type: "url",
    },
    {
      name: "year",
      title: "Jahr",
      type: "date",
      options: {
        dateFormat: "YYYY",
        calendarTodayLabel: "Heute",
      },
    },
  ],
  preview: {
    select: {
      quote: "quote",
      image: "authorImage",
      author: "author",
      year: "year",
    },
    prepare: ({ quote, image, author, year }) => ({
      title: `Zitat: ${quote}`,
      subtitle: `${author} - ${year}`,
      media: image,
    }),
  },
};
