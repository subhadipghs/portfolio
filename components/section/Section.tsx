import { Merge } from "@/utilities/types";
import { Box, BoxProps, Heading, Text } from "@chakra-ui/layout";
import React from "react";

type SectionProps = Merge<
  React.PropsWithChildren<{ heading: string }>,
  BoxProps
>;

export function Section({ heading, children, ...rest }: SectionProps) {
  return (
    <Box as="div" m={3} p={3} {...rest}>
      <Heading>{heading}</Heading>
      <div
        style={{
          height: 0,
          width: heading.split("").length * 16,
          border: "1px solid var(--chakra-colors-primary)",
          backgroundColor: "var(--chakra-colors-primary)",
          marginLeft: 2,
        }}
      ></div>
      <Text mt={3}>{children}</Text>
    </Box>
  );
}
