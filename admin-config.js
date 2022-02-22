module.exports = {
  cms_manual_init: true,
  editor: {
    preview: false,
  },
  local_backend: true,
  backend: {
    name: "github",
    repo: "M-WRI/wir-sind",
    branch: "main",
  },
  media_folder: "public/images",
  public_folder: "images",
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
              label: "DER FILM",
              name: "the_movie",
              widget: "object",
              collapsed: true,
              fields: [
                {
                  label: "Film Trailer",
                  name: "movie_trailer",
                  widget: "string",
                },
                {
                  label: "Beschreibung",
                  name: "section_description",
                  widget: "list",
                  fields: [
                    {
                      label: "Text Block",
                      name: "text_block",
                      widget: "markdown",
                    },
                  ],
                },
              ],
            },
            {
              label: "DIE PREMIERE",
              name: "the_premiere",
              widget: "object",
              collapsed: true,
              fields: [
                {
                  label: "Infokarte",
                  name: "info_card",
                  widget: "object",
                  collapsed: true,
                  fields: [
                    {
                      label: "Titel",
                      name: "title",
                      widget: "string",
                    },
                    {
                      label: "Zoom Link Titel",
                      name: "zoom_link_title",
                      widget: "string",
                    },
                    {
                      label: "Zoom Link",
                      name: "zoom_link",
                      widget: "string",
                    },
                    {
                      label: "Ablaufplan",
                      name: "schedule",
                      widget: "list",
                      fields: [
                        {
                          label: "Zeit",
                          name: "time",
                          widget: "string",
                        },
                        {
                          label: "Ablauf",
                          name: "procedure",
                          widget: "string",
                        },
                      ],
                    },
                  ],
                },
                {
                  label: "Beschreibung",
                  name: "section_description",
                  widget: "list",
                  fields: [
                    {
                      label: "Text Block",
                      name: "text_block",
                      widget: "markdown",
                    },
                  ],
                },
              ],
            },
            {
              label: "DAS PEOJEKT",
              name: "the_project",
              widget: "object",
              collapsed: true,
              fields: [
                {
                  label: "Unterstützer",
                  name: "supporter",
                  widget: "object",
                  collapsed: true,
                  fields: [
                    {
                      label: "Liste",
                      name: "list",
                      widget: "list",
                      fields: [
                        {
                          label: "Name",
                          name: "supporter_name",
                          widget: "string",
                        },
                        {
                          label: "Link",
                          name: "supporter_link",
                          widget: "string",
                        },
                      ],
                    },
                  ],
                },
                {
                  label: "Beschreibung",
                  name: "section_description",
                  widget: "list",
                  fields: [
                    {
                      label: "Text Block",
                      name: "text_block",
                      widget: "markdown",
                    },
                  ],
                },
              ],
            },
            {
              label: "DIE PROTAGONISTINNEN",
              name: "the_protagonists",
              widget: "object",
              collapsed: true,
              fields: [
                {
                  label: "Liste",
                  name: "list",
                  widget: "list",
                  fields: [
                    { label: "Bild", name: "image", widget: "image" },
                    { label: "Name", name: "name", widget: "string" },
                    { label: "Biografie", name: "bio", widget: "markdown" },
                  ],
                },
              ],
            },
            {
              label: "GALERIE",
              name: "image_gallery",
              widget: "object",
              collapsed: true,
              fields: [
                {
                  label: "Liste",
                  name: "list",
                  widget: "list",
                  fields: [
                    { label: "Name", name: "image_name", widget: "string" },
                    { label: "Bild", name: "image", widget: "image" },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
