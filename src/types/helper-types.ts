export type FixedSizeArray<
  T,
  N extends number,
  R extends T[] = []
> = R["length"] extends N ? R : FixedSizeArray<T, N, [...R, T]>;
