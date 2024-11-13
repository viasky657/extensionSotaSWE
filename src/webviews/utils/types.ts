export type ObjectEntry<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T];

export type SimpleHTMLElementProps<T> = React.DetailedHTMLProps<
  React.HTMLAttributes<T>,
  T
>;