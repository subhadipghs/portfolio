/**
 * Theme configuration are declared here!
 */

import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    primary: "#2D3047",
    secondary: "#FFEFD5",
    tertiary: "#3f3351",
  },
  fonts: {
    body: "Inter, system-ui, sans-serif",
    heading: "Inter, system-ui, sans-serif",
    mono: "Monaco, Source Code Pro, monospace",
  },
});

export { theme };
