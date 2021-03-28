import type { IAnimal } from "../interfaces/Types";

export const shouldBeFiltered = (animal: IAnimal) =>
  !(animal.children && animal.children.length) && animal.isParent;
