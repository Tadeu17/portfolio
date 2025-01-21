export type TRoleInfo = {
  id?: string,
  timeframe: string,
  role: string,
  company: string,
  description: string[],
  skills: string[],
  href?: string
}

export type TSkill = {
  name: string;
  level: string;
};

export type TSkillsCathegory = {
  cathegory: string;
  skills: TSkill[];
};

export type TProject = {
  id: string,
  title: string,
  thumbnail: string,
  type: string,
  href: string,
  github?: string,
  description: string,
}