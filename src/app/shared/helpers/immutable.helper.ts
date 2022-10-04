function map<T>(original: T, props: Partial<T>) {
  return { ...original, ...props };
}

export const immutable = {
  map,
};