export type TRoleInfo = {
  timeframe: string,
  role: string,
  company: string,
  description: string[],
  skills: string[]
}

export type TSkill = {
  name: string;
  level: string;
};

export type TSkillsCathegory = {
  cathegory: string;
  skills: TSkill[];
};