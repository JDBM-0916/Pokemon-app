export interface Encounter {
  id:    number;
  name:  string;
  names: Name[];
  order: number;
}

export interface Name {
  language: Language;
  name:     string;
}

export interface Language {
  name: string;
  url:  string;
}
