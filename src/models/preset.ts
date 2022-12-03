// export interface PatchTypes {
//   allotment: boolean;
//   flower: boolean;
//   herb: boolean;
//   hops: boolean;
//   bush: boolean;
//   trees: boolean;
//   fruitTrees: boolean;
//   cactus: boolean;
//   mushroom: boolean;
// }

export type Preset =
  | 'herb'
  | 'tree'
  | 'fruit-tree'
  | 'bush'
  | 'cactus'
  | 'mushroom'
  | '';

export default interface UserPresets {
  preset1: {
    type: Preset;
    patches?: {
      [name: string]: boolean;
    }
  };
  preset2: {
    type: Preset;
    patches?: {
      [name: string]: boolean;
    }
  };
  preset3: {
    type: Preset;
    patches?: {
      [name: string]: boolean;
    }
  };
  preset4: {
    type: Preset;
    patches?: {
      [name: string]: boolean;
    }
  };
  preset5: {
    type: Preset;
    patches?: {
      [name: string]: boolean;
    }
  };
}
