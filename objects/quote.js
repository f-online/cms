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
      name: "year",
      title: "Jahr",
      type: "date",
      options: {
        dateFormat: "YYYY",
        calendarTodayLabel: "Heute",
      },
    },
  ],
};
