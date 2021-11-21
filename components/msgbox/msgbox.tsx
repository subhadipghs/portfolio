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
