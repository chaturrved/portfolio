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
  JS = "icon-[logos--angular-icon]",
  TS = "icon-[logos--angular-icon]",
  Java = "icon-[logos--angular-icon]",
  Python = "icon-[logos--angular-icon]",
  React = "icon-[logos--angular-icon]",
  Express = "icon-[logos--angular-icon]",
  Nest = "icon-[logos--angular-icon]",
  Nodejs = "icon-[logos--angular-icon]",
  GCP = "icon-[logos--angular-icon]",
  AngularJS = "icon-[logos--angular-icon]",
  Linux = "icon-[logos--angular-icon]",
  Git = "icon-[logos--angular-icon]",
  Mysql = "icon-[logos--angular-icon]",
  Postgresql = "icon-[logos--angular-icon]",
  Mongodb = "icon-[logos--angular-icon]",
  Docker = "icon-[logos--angular-icon]",
  Vim = "icon-[logos--angular-icon]",
}

export type Skills = SkillCardProps[];

const skills: Skills = [
  {
    type: "Programming Languages",
    skillGroup: [
      {
        name: "JavaScript",
        icon: IconName["JS"],
        colorClass: "text-slate-800 bg-orange-100",
      },
      {
        name: "TypeScript",
        icon: IconName["TS"],
        colorClass: "text-slate-800 bg-orange-100",
      },
      {
        name: "Java",
        icon: IconName["Java"],
        colorClass: "text-slate-800 bg-orange-100",
      },
      {
        name: "Python",
        icon: IconName["Python"],
        colorClass: "text-slate-800 bg-orange-100",
      },
    ],
  },
  {
    type: "Libraries / Framework",
    skillGroup: [
      {
        name: "Angular",
        icon: IconName["Angular"],
        colorClass: "text-slate-800 bg-orange-100",
      },
      {
        name: "ReactJS",
        icon: IconName["React"],
        colorClass: "text-slate-800 bg-orange-100",
      },
      {
        name: "NestJS",
        icon: IconName["Nest"],
        colorClass: "text-slate-800 bg-orange-100",
      },
      {
        name: "ExpressJS",
        icon: IconName["Express"],
        colorClass: "text-slate-800 bg-orange-100",
      },
      {
        name: "AngularJS",
        icon: IconName["AngularJS"],
        colorClass: "text-slate-800 bg-orange-100",
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
        colorClass: "text-slate-800 bg-red-100",
      },
      {
        name: "PostgreSQL",
        icon: IconName["Postgresql"],
        colorClass: "text-slate-800 bg-red-100",
      },
      {
        name: "MongoDB",
        icon: IconName["Mongodb"],
        colorClass: "text-slate-800 bg-red-100",
      },
    ],
  },
];

export default skills;
