import { Box, Container } from "@chakra-ui/layout";
import React from "react";
import { BioSection } from "./BioSection";
import { HomeHeader } from "./HomeHeader";
import { TechStacks } from "./TechStackSection";
import { TitleSection } from "./TitleSection";

export function HomeModule() {
  return (
    <React.Fragment>
      <HomeHeader />
      <Container width="100vw">
        <Box
          as="main"
          maxW={672}
          display="flex"
          justifyContent="center"
          flexDirection="column"
          alignItems="center"
        >
          <TitleSection />
          <BioSection />
          <TechStacks />
        </Box>
      </Container>
    </React.Fragment>
  );
}
