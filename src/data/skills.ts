export type SkillType =
  | "Programming Languages"
  | "Tools"
  | "Libraries / Framework"
  | "Database";

export type Skill = {
  name: string;
  icon: string;
  experience?: number;
  colorClass?: string;
};

export type SkillCardProps = {
  skillGroup: Skill[];
  type: SkillType;
};

export enum IconName {
  Angular = "icon-[logos--angular-icon]",
  JS = "icon-[logos--javascript]",
  TS = "icon-[logos--typescript-icon]",
  Java = "icon-[logos--java]",
  Python = "icon-[logos--python]",
  React = "icon-[logos--react]",
  Express = "icon-[skill-icons--expressjs-dark]",
  Nest = "icon-[logos--nestjs]",
  Nodejs = "icon-[logos--nodejs-icon]",
  GCP = "icon-[logos--google-cloud]",
  AngularJS = "icon-[devicon--angularjs]",
  Linux = "icon-[logos--linux-tux]",
  Git = "icon-[logos--git-icon]",
  Mysql = "icon-[logos--mysql]",
  Postgresql = "icon-[logos--postgresql]",
  Mongodb = "icon-[logos--mongodb-icon]",
  Docker = "icon-[logos--docker-icon]",
  Vim = "icon-[logos--vim]",
}

export type Skills = SkillCardProps[];

const skills: Skills = [
  {
    type: "Programming Languages",
    skillGroup: [
      {
        name: "JavaScript",
        icon: IconName["JS"],
        colorClass: "text-slate-800 bg-emerald-400",
      },
      {
        name: "TypeScript",
        icon: IconName["TS"],
        colorClass: "text-slate-800 bg-orange-100",
      },
      {
        name: "Java",
        icon: IconName["Java"],
        colorClass: "text-slate-900 bg-lime-50",
      },
      {
        name: "Python",
        icon: IconName["Python"],
        colorClass: "text-slate-50 bg-purple-800",
      },
    ],
  },
  {
    type: "Libraries / Framework",
    skillGroup: [
      {
        name: "Angular",
        icon: IconName["Angular"],
        colorClass: "text-slate-900 bg-purple-200",
      },
      {
        name: "Node Js",
        icon: IconName["Nodejs"],
        colorClass: "text-slate-900 bg-orange-50",
      },
      {
        name: "ReactJS",
        icon: IconName["React"],
        colorClass: "text-slate-50 bg-slate-700",
      },
      {
        name: "NestJS",
        icon: IconName["Nest"],
        colorClass: "text-zinc-50 bg-slate-700",
      },
      {
        name: "ExpressJS",
        icon: IconName["Express"],
        colorClass: "text-slate-900 bg-teal-50",
      },
      {
        name: "AngularJS",
        icon: IconName["AngularJS"],
        colorClass: "text-slate-50 bg-indigo-500",
      },
    ],
  },
  {
    type: "Tools",
    skillGroup: [
      {
        name: "Git",
        icon: IconName["Git"],
        colorClass: "text-slate-800 bg-red-100",
      },
      {
        name: "Docker",
        icon: IconName["Docker"],
        colorClass: "text-slate-800 bg-red-100",
      },
      {
        name: "Linux",
        icon: IconName["Linux"],
        colorClass: "text-slate-800 bg-red-100",
      },
      {
        name: "GCP",
        icon: IconName["GCP"],
        colorClass: "text-slate-800 bg-red-100",
      },
      {
        name: "Vim",
        icon: IconName["Vim"],
        colorClass: "text-slate-800 bg-red-100",
      },
    ],
  },
  {
    type: "Database",
    skillGroup: [
      {
        name: "MySQL",
        icon: IconName["Mysql"],
        colorClass: "text-slate-800 bg-red-50",
      },
      {
        name: "PostgreSQL",
        icon: IconName["Postgresql"],
        colorClass: "text-slate-800 bg-pink-300",
      },
      {
        name: "MongoDB",
        icon: IconName["Mongodb"],
        colorClass: "text-slate-800 bg-red-50",
      },
    ],
  },
];

export default skills;
