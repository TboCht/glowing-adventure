export interface School {
  name: string;
  town: string;
  type: string;
}

export type SchoolStatus = "public" | "private";

export type HighschoolClasseType = "seconde" | "premiere" | "terminale";

export type DiplomaType = "Général" | "Technologique" | "Professionnel";

export interface HighschoolClasseOption {
  value: HighschoolClasseType;
  label: string;
}

export interface DiplomaOption {
  value: DiplomaType;
  label: string;
}

export interface FormDataResponse {
  highschool: School;
  availableClasses: HighschoolClasseOption[];
  selectedClass: HighschoolClasseOption;
  availableDiplomas: DiplomaOption[];
}
