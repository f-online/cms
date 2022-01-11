export default {
  name: "section",
  title: "Section",
  type: "object",
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
      name: "content",
      title: "Inhalt",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
      validation: (Rule) => Rule.required(),
    },
  ],
};
