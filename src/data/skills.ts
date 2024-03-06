export type SkillType =
  | "Programming Languages"
  | "Tools"
  | "Library"
  | "Framework"
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
}

export type Skills = SkillCardProps[];

const skills: Skills = [];

export default skills;
