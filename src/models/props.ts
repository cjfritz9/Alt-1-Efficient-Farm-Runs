export interface UserProps {
  user: {
    data: {
      preset1: {
        name: string;
      };
      preset2: {
        name: string;
      };
      preset3: {
        name: string;
      };
    };
  };
}

export interface SetUserProps {
  setUser: (object: any) => void;
}