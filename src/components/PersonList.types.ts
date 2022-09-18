// If you want to move all props to different file then the filename must end with ".types.ts"
export type Props = {
  // declaring array of objects type of prop
  names: {
    first: string;
    last: string;
  }[];
};
