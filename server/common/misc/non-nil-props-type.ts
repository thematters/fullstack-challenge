export type NonNilProps<T> = {
  [k in keyof T]: NonNullable<T[k]>;
};
