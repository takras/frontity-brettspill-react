const settings = {
  name: "brettspill",
  state: {
    frontity: {
      url: "https://brettspill.takras.net",
      title: "Brettspill med Takras",
      description: "WordPress installation for Frontity development",
    },
  },
  packages: [
    {
      name: "frontity-chakra-theme",
      state: {
        theme: {
          menu: [
            ["Hjem", "/"],
            ["Kjøp", "https://shop.spreadshirt.no/northman/"],
            ["Om", "/ta-kontakt/hvem-er-jeg/"],
            ["Tips", "/de-beste-spill-julegavetipsene-2019/"],
          ],
          featured: {
            showOnList: false,
            showOnPost: false,
          },
        },
      },
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          url: "https://brettspill.takras.net",
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
  ],
};

export default settings;
