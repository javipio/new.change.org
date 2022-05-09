export interface Petition {
  title: string;
  slug: string;
  img: string;
  body: string;
  author: User;
  goal: number;
  votes: number;
}

export interface User {
  name: string;
  img: string;
}

export interface RegisterState {
  name: string;
  password: string;
  confirmationPasswd: string;
}

export interface RegisterUserState extends RegisterState {
  username: string;
  dni: string;
  mail: string;
}

export interface RegisterEnterpriseState extends RegisterState {
  sector: string;
  domain: string;
  cif: string;
}
