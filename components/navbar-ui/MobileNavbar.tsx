import React from "react";
import { Box, Flex, Grid, GridItem } from "@chakra-ui/layout";
import { RoundedImage } from "../image/RoundedImage";
import { FaIcon } from "../icon/FaIcon";

export function MobileNavbar() {
  return <Navbar />;
}

function Navbar() {
  return (
    <Box
      maxH="10vh"
      p={3}
      bg="primary"
      boxShadow="xs"
      position="sticky"
      minWidth="100%"
      display="flex"
      justifyContent="space-between"
    >
      <Flex justifyContent="flex-start" alignItems="center" p={2}>
        <RoundedImage src="/profile.jpg" alt="profile-image" />
      </Flex>
      <Box
        m={2}
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid gap={4}>
          <GridItem colSpan={2}>
            <FaIcon name="bars" fs="1.2rem" color="secondary" />
          </GridItem>
          <GridItem colStart={4} colEnd={6}>
            <FaIcon name="moon" fs="1.2rem" color="secondary" />
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
}
