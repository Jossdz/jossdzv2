export default {
  name: "talk",
  title: "Talk",
  type: "document",
  fields: [
    {
      name: "slug",
      title: "Slug",
      type: "string",
    },
    {
      name: "title",
      title: "Title",
      type: "localeString",
    },
    {
      name: "place",
      title: "Place",
      type: "reference",
      to: { type: "place" },
    },
    {
      name: "date",
      title: "Date",
      type: "date",
    },
    {
      name: "description",
      title: "Description",
      type: "localeString",
    },
    {
      name: "slides",
      title: "Slides",
      type: "url",
    },
  ],
}
