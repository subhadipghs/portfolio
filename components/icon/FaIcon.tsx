/**
 * Font Awesome icon component
 */

import styled from "@emotion/styled";

type FaIconProps = {
  name: string;
  w?: number;
  h?: number;
  fs?: string | number;
  color?: string;
};

const I = styled.i((props: Omit<FaIconProps, "name">) => ({
  fontSize: props.fs ?? "1rem",
  width: props.w ?? "auto",
  height: props.h ?? "auto",
  color: props.color ? `var(--chakra-colors-${props.color})` : "#000",
}));

export function FaIcon(props: FaIconProps) {
  return <I className={`fas fa-${props.name}`} {...props} />;
}
