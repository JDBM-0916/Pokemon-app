export interface ValuesCondition {
  condition: Condition;
  id:        number;
  name:      string;
  names:     Name[];
}

export interface Condition {
  name: string;
  url:  string;
}

export interface Name {
  language: Condition;
  name:     string;
}
