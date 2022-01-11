import { FaUsers as icon } from "react-icons/fa";

export default {
  name: "teamObject",
  title: "Team",
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
  ],
};
