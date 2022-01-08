import { HiQuestionMarkCircle as icon } from "react-icons/hi";

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
      type: "string",
      validation: (Rule) => Rule.required(),
    },
  ],
};
