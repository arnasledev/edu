import { animals } from "./modules/Animals";
import { shouldBeFiltered } from "./Filters/AnimalsFilter";

const cleanAnimalsFarm = animals.filter(shouldBeFiltered);

console.dir({ cleanAnimalsFarm }, { depth: null });
