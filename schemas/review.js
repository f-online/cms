import { FaThumbsUp as icon } from "react-icons/fa";

export default {
  name: "review",
  title: "Review",
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
      name: "platform",
      title: "Plattform",
      type: "string",
      options: {
        list: [
          { title: "Android", value: "android" },
          { title: "iOS", value: "ios" },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "stars",
      title: "Sterne",
      type: "number",
      options: {
        list: [
          { title: "5", value: 5 },
          { title: "4", value: 4 },
          { title: "3", value: 3 },
          { title: "2", value: 2 },
          { title: "1", value: 1 },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "date",
      title: "Datum",
      type: "date",
      options: {
        dateFormat: "DD.MM.YYYY",
        calendarTodayLabel: "Heute",
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "reviewText",
      title: "Review Text",
      type: "text",
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
  initialValue: {
    platform: "android",
    stars: 5,
  },
};
