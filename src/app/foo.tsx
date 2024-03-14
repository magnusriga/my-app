import { Bar } from "#app/bar"; // Resolved by TS, but lacking Intellisense (ctrl+space suggestions). ESLint import/no-unresolved rule also throws an error.
import { Baz } from "my-app/baz"; // Resolved by TS, but lacking Intellisense (ctrl+space suggestions). ESLint import/no-unresolved rule also throws an error.
import { Qux } from "./qux"; // Resolved by TS. Also works with Intellisense (ctrl+space suggestions), and eslint import/no-unresolved rule.

export const Foo = () => {
  return (
    <>
      <Bar bar="bar" />
      <Baz baz="baz" />
      <Qux qux="qux" />
    </>
  );
};
