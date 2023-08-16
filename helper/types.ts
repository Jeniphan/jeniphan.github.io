export type Theme = 'light' | 'dark'
export type Gopage = 'educations' | 'works'

export interface IGetUserInfo {
  Id: string;
  Name: string;
  UserName: string;
  Email: string;
  PhoneNumber: string;
  RoleName: string;
  Contacts: IContacts[];
  Content: IContent;
  Educations: IEducation[];
  Personals: IPersonals;
  Projects: IProjects[];
  Skills_front: ISkillsFront[];
  Skills_back: ISkillsBack[];
  Skills_soft: ISkillsSoft[];
  Works: IWork[];
}

export interface IContacts {
  ContactId: string;
  PlatFormSlug: string;
  PlatFormLink: string;
  PlatFormName: string;
}

export interface IContent {
  ContentId: string;
  Title: string;
  Skips: string;
  Content: string;
  ProfilePic: string;
  Name: string;
}

export interface IEducation {
  EducationId: string;
  StartDate: string;
  EndDate: string;
  EducationName: string;
  Marjor: string;
  Link: string;
}

export interface IPersonals {
  PersonalsId: string;
  Title: string;
  Skips: string;
  Content: string;
  Resume: string;
}

export interface IProjects {
  ProjectId: string;
  Title: string;
  Date: string;
  Discription: string;
  Link: string;
}

export interface ISkillsFront {
  id: string;
  title: string;
  discription: string;
  order: number;
}

export interface ISkillsBack {
  id: string;
  title: string;
  discription: string;
  order: number;
}

export interface ISkillsSoft {
  id: string;
  title: string;
  discription: string;
  order: number;
}

export interface IWork {
  id: string;
  start: string;
  end: string;
  name: string;
  marjor: string;
  link: string;
  order: number;
}
