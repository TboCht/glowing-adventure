import { highschools } from "../data/highschools";

type HighschoolClasseType = "seconde" | "premiere" | "terminale";

interface highschoolClasseOption {
  value: HighschoolClasseType;
  label: string;
}

interface FormDataResponse {
  highschool: string;
  availableClasses: highschoolClasseOption[];
  selectedClass: highschoolClasseOption;
}

const availableClasses: highschoolClasseOption[] = [
  { value: "seconde", label: "Seconde" },
  { value: "premiere", label: "Première" },
  { value: "terminale", label: "Terminale" },
];

function getRandomInt(max: number): number {
  return Math.floor(Math.random() * max);
}

export default defineEventHandler((event): FormDataResponse => {
  const randomHighschool = highschools[getRandomInt(highschools.length)];
  const randomHighschoolClass =
    availableClasses[getRandomInt(availableClasses.length)];

  return {
    highschool: randomHighschool,
    availableClasses: availableClasses,
    selectedClass: randomHighschoolClass,
  };
});
