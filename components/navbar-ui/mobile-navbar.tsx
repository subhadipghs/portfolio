import React from "react";
import { Box, Flex, Grid, GridItem } from "@chakra-ui/layout";
import { motion } from "framer-motion";
import { RoundedImage } from "../image/rounded";

export function MobileNavbar() {
  return (
    <motion.div
      animate={{
        y: [0, 40, 0],
      }}
    >
      <Navbar />
    </motion.div>
  );
}

function Navbar() {
  return (
    <Box
      minH="15"
      p={3}
      bg="#2D3047"
      boxShadow="md"
      sx={{
        fontFamily: "Inter",
        position: "sticky",
      }}
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
            <i
              className="fas fa-bars"
              style={{ fontSize: "1.2rem", color: "#FFDBB5" }}
            ></i>
          </GridItem>
          <GridItem colStart={4} colEnd={6}>
            <i
              className="fas fa-moon"
              style={{ fontSize: "1.2rem", color: "#FFDBB5" }}
            ></i>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
}
