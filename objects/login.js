import { FaLock as icon } from "react-icons/fa";

export default {
  name: "loginObject",
  title: "Login",
  type: "object",
  icon,
  fields: [
    {
      name: "title",
      title: "Titel",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "subTitle",
      title: "Untertitel",
      type: "string",
    },
    {
      name: "screenshot",
      title: "Screenhot",
      type: "image",
    },
  ],
};
