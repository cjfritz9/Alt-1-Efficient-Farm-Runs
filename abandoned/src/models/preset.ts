export interface PatchTypes {
  allotment: boolean;
  flower: boolean;
  herb: boolean;
  hops: boolean;
  bush: boolean;
  trees: boolean;
  fruitTrees: boolean;
  cactus: boolean;
  mushroom: boolean;
}

export interface Preset {
  name: string;
  patchTypes: PatchTypes;
}

export interface UserPresets {
  preset1: {
    presets: Preset;
  };
  preset2: {
    presets: Preset;
  };
  preset3: {
    presets: Preset;
  };
}
