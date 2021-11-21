import React from "react";
import { Merge } from "@chakra-ui/utils";
import styled from "@emotion/styled";

const B = styled.b``;

type TextProp = {
  text: string;
};

type BoldProps = Merge<TextProp, React.ComponentProps<"b">>;

export function Bold({ text, ...props }: BoldProps) {
  return <B {...props}>{text}</B>;
}
