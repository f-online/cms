import { FaQuestionCircle as icon } from "react-icons/fa";

export default {
  name: "faqObject",
  title: "FAQ",
  type: "object",
  icon,
  fields: [
    {
      name: "title",
      title: "Titel der Section",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "subTitle",
      title: "Untertitel",
      type: "string",
    },
    {
      name: "limit",
      title: "Limit",
      description:
        "Begrenzt die Anzahl der angezeigten Fragen und verlinkt auf die FAQ Seite, falls gesetzt.",
      type: "number",
    },
  ],
};
