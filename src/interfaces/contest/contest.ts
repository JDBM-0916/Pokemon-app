export interface Contest{
  berry_flavor: BerryFlavor;
  id:           number;
  name:         string;
  names:        Name[];
}

export interface BerryFlavor {
  name: string;
  url:  string;
}

export interface Name {
  color:    string;
  language: BerryFlavor;
  name:     string;
}
