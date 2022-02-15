// eslint-disable-next-line import/no-anonymous-default-export
export default {
  cms_manual_init: true,
  editor: {
    preview: false,
  },
  backend: {
    name: "github",
    repo: "M-WRI/wir-sind",
    branch: "main",
  },
  media_folder: "public/img",
  public_folder: "img",
  collections: [
    {
      name: "pages",
      label: "Pages",
      files: [
        {
          label: "Home",
          name: "home",
          file: "content/pages/home.md",
          fields: [
            {
              label: "Hero Title",
              name: "hero_title",
              widget: "string",
            },
            {
              label: "Hero Description",
              name: "hero_description",
              widget: "markdown",
            },
          ],
        },
      ],
    },
    {
      name: "protagonists",
      label: "Protagonisten",
      folder: "content/protagonists",
      create: true,
      slug: "{{slug}}",
      fields: [
        { label: "Layout", name: "layout", widget: "hidden", default: "blog" },
        { label: "Bild", name: "image", widget: "image" },
        { label: "Name", name: "name", widget: "string" },
        { label: "Biography", name: "bio", widget: "markdown" },
      ],
    },
    {
      name: "supporters",
      label: "Förderer",
      folder: "content/supporters",
      create: true,
      slug: "{{slug}}",
      fields: [
        { label: "Layout", name: "layout", widget: "hidden", default: "blog" },
        { label: "Bild", name: "image", widget: "image" },
        { label: "Name", name: "name", widget: "string" },
      ],
    },
  ],
};
