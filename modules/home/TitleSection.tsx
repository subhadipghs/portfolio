import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/breadcrumb";
import { Box, Heading, Stack } from "@chakra-ui/layout";
import { motion, MotionProps } from "framer-motion";
// @ts-ignore
import { ResponsiveValue } from "@chakra-ui/styled-system";
import { RoundedImage } from "@/components/image/RoundedImage";

export function TitleSection() {
  // framer motion animation for right to left transition
  const animation: Record<string, MotionProps> = {
    rightToLeft: {
      initial: {
        x: 50,
      },
      animate: {
        x: 0,
      },
    },
    click: {
      animate: {
        scale: 0.9,
      },
    },
  };
  // responsive design settings
  const respBox: Record<string, ResponsiveValue<any>> = {
    ta: {
      sm: "left",
      md: "center",
    },
    display: "flex",
    justifyContent: {
      sm: "flex-start",
      md: "center",
    },
  };

  return (
    <motion.div
      initial={animation.rightToLeft.initial}
      animate={animation.rightToLeft.animate}
      style={{ width: "100%" }}
    >
      <Stack
        maxWidth={672}
        as="section"
        direction={["column", "row"]}
        align={["initial", "center"]}
        justifyContent="center"
        id="main-content"
        mt={[0, 3, 8, 12]}
      >
        <Box
          textAlign={respBox.ta}
          display={respBox.display}
          justifyContent={respBox.justifyContent}
          flexDirection="column"
          m={3}
          p={3}
        >
          <Heading>Subhadip Ghosh</Heading>
          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Software Developer</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>
        <Box display="flex" justifyContent="center" alignItems="center">
          <RoundedImage
            src="/profile.jpg"
            alt="portfolio-image"
            width="150px"
            height="auto"
            border="1px solid var(--chakra-colors-secondary)"
          />
        </Box>
      </Stack>
    </motion.div>
  );
}
