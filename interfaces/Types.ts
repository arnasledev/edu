export enum AnimalTypes {
  DOG = "dog",
  CAT = "cat",
}

type RepeatableAnimalProperties = {
  name?: string | number;
};

interface IAnimalChild extends RepeatableAnimalProperties {
  wasDeffected: boolean;
}

export interface IAnimal extends RepeatableAnimalProperties {
  type: AnimalTypes;
  breed: string;
  isParent: boolean;
  children?: IAnimalChild[];
}
