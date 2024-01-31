type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
};

const presentation: Presentation = {
  mail: "chaturved.deg@gmail.com",
  title: "Hi, I’m Chaturved 👋",
  description:
    "Namaste, I'm a *indian software programmer* with over *3 years* of hands on development experience. I am currently working with *NextJS, ReactJS, Angular, NestJS and Typescript*. Outside of work I really enjoy basketball and understanding history.",
  socials: [
    {
      label: "Twiiter",
      link: "https://twitter.com/chaturrved",
    },
    {
      label: "LinkedIn",
      link: "https://linkedin.com/in/chaturved",
    },
    {
      label: "Github",
      link: "https://github.com/chaturrved",
    },
  ],
};

export default presentation;
