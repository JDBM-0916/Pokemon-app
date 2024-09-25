export interface EncounterCondition {
  id:     number;
  name:   string;
  names:  Name[];
  values: Value[];
}

export interface Name {
  language: Value;
  name:     string;
}

export interface Value {
  name: string;
  url:  string;
}
