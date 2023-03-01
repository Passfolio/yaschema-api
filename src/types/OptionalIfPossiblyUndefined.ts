export type OptionalIfPossiblyUndefined<K extends string | number | symbol, T> = [T] extends [undefined]
  ? Partial<Record<K, T>>
  : [T] extends [T | undefined]
  ? Partial<Record<K, T>>
  : Record<K, T>;
