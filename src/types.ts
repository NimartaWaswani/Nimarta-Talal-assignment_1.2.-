// types.ts

export type ProfileItem = {
  name: string;
  email: string;
  number: string;
};

export type RootStackParamList = {
  HomeScreen: undefined;
  DetailScreen: { user: ProfileItem };
};
