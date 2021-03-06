module.exports = {
  cms_manual_init: true,
  editor: {
    preview: false,
  },
  // local_backend: true,
  backend: {
    name: "git-gateway",
    // repo: "M-WRI/wir-sind",
    branch: "main",
    // base_url: "https://www.veraenderung-changement-change.com/",
    // auth_endpoint: "/auth",
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
                      label: "Deutsch",
                      name: "text_block_de",
                      widget: "markdown",
                    },
                    {
                      label: "Französisch",
                      name: "text_block_fr",
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
                      label: "Premieren Titel",
                      name: "premiere_title",
                      widget: "object",
                      collapsed: true,
                      fields: [
                        {
                          label: "Titel Deutsch",
                          name: "title_de",
                          widget: "string",
                        },
                        {
                          label: "Titel Französisch",
                          name: "title_fr",
                          widget: "string",
                        },
                        {
                          label: "Zoom Link Titel Deutsch",
                          name: "zoom_link_title_de",
                          widget: "string",
                        },
                        {
                          label: "Zoom Link Titel Französisch",
                          name: "zoom_link_title_fr",
                          widget: "string",
                        },
                        {
                          label: "Zoom Link",
                          name: "zoom_link",
                          widget: "string",
                        },
                      ],
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
                      label: "Deutsch",
                      name: "text_block_de",
                      widget: "markdown",
                    },
                    {
                      label: "Französisch",
                      name: "text_block_fr",
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
                          label: "Logo",
                          name: "supporter_logo",
                          widget: "image",
                          required: false,
                        },
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
                      label: "Deutsch",
                      name: "text_block_de",
                      widget: "markdown",
                    },
                    {
                      label: "Französisch",
                      name: "text_block_fr",
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
                    {
                      label: "DIE PROTAGONISTINNEN",
                      name: "the_protagonists",
                      widget: "object",
                      collapsed: true,
                      fields: [
                        {
                          label: "Deutsch",
                          name: "bio_de",
                          widget: "markdown",
                        },
                        {
                          label: "Französisch",
                          name: "bio_fr",
                          widget: "markdown",
                        },
                      ],
                    },
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
            {
              label: "FOOTER",
              name: "footer",
              widget: "object",
              collapsed: true,
              fields: [
                { label: "Email", name: "email", widget: "string" },
                { label: "Link", name: "link", widget: "string" },
                {
                  label: "Mitmachen",
                  name: "participate",
                  widget: "object",
                  fields: [
                    {
                      label: "Deutsch",
                      name: "text_block_de",
                      widget: "markdown",
                    },
                    {
                      label: "Französisch",
                      name: "text_block_fr",
                      widget: "markdown",
                    },
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
