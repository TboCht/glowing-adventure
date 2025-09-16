import {
  DiplomaOption,
  FormDataResponse,
  HighschoolClasseOption,
} from "./../../shared/types/school";
import { highschools } from "../data/highschools";

const availableClasses: HighschoolClasseOption[] = [
  { value: "seconde", label: "Seconde" },
  { value: "premiere", label: "Première" },
  { value: "terminale", label: "Terminale" },
];

const availableDiplomas: DiplomaOption[] = [
  { value: "Général", label: "Général" },
  { value: "Technologique", label: "Technologique" },
  { value: "Professionnel", label: "Professionnel" },
];

function getRandomInt(max: number): number {
  return Math.floor(Math.random() * max);
}

export default defineEventHandler((event): FormDataResponse => {
  const randomHighschool = highschools[getRandomInt(highschools.length)];
  const randomHighschoolClass =
    availableClasses[getRandomInt(availableClasses.length)];

  return {
    highschool: { name: randomHighschool, town: "Lille", type: "Lycée Public" },
    availableClasses: availableClasses,
    selectedClass: randomHighschoolClass,
    availableDiplomas: availableDiplomas,
  };
});
