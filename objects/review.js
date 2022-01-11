import { FaThumbsUp as icon } from "react-icons/fa";

export default {
  name: "reviewObject",
  title: "Reviews",
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
        "Begrenzt die Anzahl der angezeigten Reviews und verlinkt auf die Review Seite, falls Limit gesetzt.",
      type: "number",
    },
  ],
};
