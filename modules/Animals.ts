import { AnimalTypes } from "../interfaces/Types";
import type { IAnimal } from "../interfaces/Types";

let animals: IAnimal[] = [
  {
    type: AnimalTypes.DOG,
    name: "Bilis",
    breed: "french bulldog",
    isParent: true,
  },
  {
    type: AnimalTypes.CAT,
    breed: "rafaelo",
    isParent: true,
    children: [
      { name: "Pasatas", wasDeffected: true },
      { name: "Tesla", wasDeffected: false },
    ],
  },
];

const randomAnimal: IAnimal = {
  type: AnimalTypes.DOG,
  breed: "german shepard",
  isParent: false,
  children: [],
};

animals = [...animals, randomAnimal];

export { animals };
