import UU5 from "uu5g04";

export const About = {
  about: {
    en: "uuDrinkbook is an application where recipes of different drinks are saved. It allows users to create and view recipes of different drinks. Recipes are also divided into categories: alcoholic, non-alcoholic and coffee drinks.",
  },
  licence: {
    termsOfUse: "https://unicorn.com/tou/your_product",
    organisation: {
      cs: {
        name: "Unicorn a.s.",
        uri: "https://www.unicorn.com/",
      },
      en: {
        name: "Unicorn a.s.",
        uri: "https://www.unicorn.com/",
      },
    },
    authorities: {
      cs: [
        {
          name: "Karel Vrábík",
          uri: "https://www.unicorn.com/",
        },
        {
          name: "Mariia Rymareva",
          uri: "https://www.unicorn.com/",
        },
        {
          name: "Matěj Pilík",
          uri: "https://www.unicorn.com/",
        },
        {
          name: "Kiryl Nazarau",
          uri: "https://www.unicorn.com/",
        },
      ],
      en: [
        {
          name: "Karel Vrábík",
          uri: "https://www.unicorn.com/",
        },
        {
          name: "Mariia Rymareva",
          uri: "https://www.unicorn.com/",
        },
        {
          name: "Matěj Pilík",
          uri: "https://www.unicorn.com/",
        },
        {
          name: "Kiryl Nazarau",
          uri: "https://www.unicorn.com/",
        },
      ],
    },
  },
  leadingAuthors: [
    {
      name: "Karel Vrábík",
      uuIdentity: "24-1619-1",
      role: {
        en: "Student",
      },
    },
    {
      name: "Mariia Rymareva",
      uuIdentity: "7428-1345-1",
      role: {
        en: "Student",
      },
    },
    {
      name: "Matěj Pilík",
      uuIdentity: "2032-8932-1",
      role: {
        en: "Student",
      },
    },
    {
      name: "Kiryl Nazarau",
      uuIdentity: "25-1609-1",
      role: {
        en: "Student",
      },
    },
  ],

  usedTechnologies: {
    technologies: {
      en: [
        <UU5.Bricks.LinkUAF key="uaf" />,
        <UU5.Bricks.LinkUuApp key="uuapp" />,
        <UU5.Bricks.LinkUU5 key="uu5" />,
        <UU5.Bricks.LinkUuPlus4U5 key="uuplus4u5" />,
        <UU5.Bricks.Link
          content="uuProductCatalogue"
          href="https://uuapp.plus4u.net/uu-bookkit-maing01/7f743efd1bf6486d8e72b27a0df92ba7/book"
          target="_blank"
          key="uuproductcatalogue"
        />,
        <UU5.Bricks.LinkUuAppServer key="uuappserver" />,
      ],
    },
    content: {
      cs: [
        `<uu5string/>Dále byly použity technologie: <UU5.Bricks.LinkHTML5/>, <UU5.Bricks.LinkCSS/>, <UU5.Bricks.LinkJavaScript/>,
        <UU5.Bricks.LinkReact/>.
        Uživatelská dokumentace aplikace je popsána v knize <UU5.Bricks.Link href="https://uuapp.plus4u.net/uu-bookkit-maing01/5cb44a82f1f34d85a053a94ad7b151cb/book/page?code=uuBusinessDiscipline" target="_blank" content='"uuDrinkbook Business Model"' />.
        Technickou dokumentaci lze nalézt v knize <UU5.Bricks.Link href="https://uuapp.plus4u.net/uu-bookkit-maing01/1fbe26d36546498aaa726386d6043c18/book/page?code=uuApp" target="_blank" content='"uuDrinkbook Application Model"' />.`,
      ],
      en: [
        `<uu5string/>Other used technologies: <UU5.Bricks.LinkHTML5/>, <UU5.Bricks.LinkCSS/>, <UU5.Bricks.LinkJavaScript/>, <UU5.Bricks.LinkBootstrap/>,
        <UU5.Bricks.LinkReact/>, <UU5.Bricks.LinkRuby/>, <UU5.Bricks.LinkPuma/> a <UU5.Bricks.LinkDocker/>.
        Application is operated in the <UU5.Bricks.LinkPlus4U/> internet service with the usage of <UU5.Bricks.LinkMSAzure/> cloud.
        The application user guide is located in <UU5.Bricks.Link href="" target="_blank" content='"Documentation link put here"' />.
        Technical documentation can be found in <UU5.Bricks.Link href="" target="_blank" content='"Documentation link put here"' />.`,
      ],
    },
  },
};

export default About;
