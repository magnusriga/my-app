import { Bar } from "#app/bar";
import { Baz } from "my-app/baz";

export const Foo = () => {
  return (
    <>
      <Bar bar="bar" />
      <Baz baz="baz" />
    </>
  );
};
