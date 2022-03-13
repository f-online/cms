import { FaCar as icon } from "react-icons/fa";

export default {
  name: "drivingschoolObject",
  title: "Fahrschule",
  type: "object",
  icon,
  fields: [
    {
      name: "name",
      title: "Name der Fahrschule",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "street",
      title: "Straße + Hausnummer",
      type: "string",
    },
    {
      name: "zip",
      title: "Postleitzahl",
      type: "string",
    },
    {
      name: "city",
      title: "Stadt",
      type: "string",
    },
    {
      name: "url",
      title: "Website / URL",
      type: "url",
    },
    {
      name: "logo",
      title: "Logo",
      type: "image",
    },
  ],
};
