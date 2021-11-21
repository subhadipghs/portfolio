import { Merge } from "@/utilities/types";
import React from "react";

type HeaderProps = Merge<
  React.PropsWithChildren<{}>,
  React.ComponentProps<"header">
>;

export function Header({ children, ...rest }: HeaderProps) {
  return <header {...rest}>{children}</header>;
}
