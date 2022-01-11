import { FaQuestionCircle as icon } from "react-icons/fa";

export default {
  name: "faq",
  title: "FAQ",
  type: "document",
  icon,
  fields: [
    {
      name: "question",
      title: "Frage",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "answer",
      title: "Antwort",
      type: "array",
      of: [
        {
          type: "block",
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
