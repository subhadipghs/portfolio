import React from "react";
import { Container } from "@chakra-ui/layout";

type MsgBoxProps = {
  children: React.ReactNode;
};

export function MsgBox({ children }: MsgBoxProps) {
  return (
    <Container
      bg="secondary"
      borderRadius="md"
      width="90%"
      mt={3}
      p={3}
      textAlign="center"
    >
      {children}
    </Container>
  );
}

// eslint-disable-next-line react/display-name
export const ForwardReferencedMsgBox = React.forwardRef<
  HTMLDivElement,
  MsgBoxProps
>((props, ref) => {
  return (
    <Container
      bg="secondary"
      borderRadius="md"
      width="90%"
      mt={3}
      p={3}
      ref={ref}
      textAlign="center"
    >
      {props.children}
    </Container>
  );
});
