import { Merge } from "@/utilities/types";
import React from "react";

type HeaderProps = Merge<
  React.PropsWithChildren<{}>,
  React.ComponentProps<"section">
>;

export function Section({ children, ...rest }: HeaderProps) {
  return <section {...rest}>{children}</section>;
}
