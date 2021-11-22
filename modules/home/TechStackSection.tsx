import { Section } from "@/components/section/Section";
import { Box, List, ListIcon, ListItem, Text } from "@chakra-ui/layout";
import {
  FaCheckCircle,
  FaDocker,
  FaGithub,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { Bold } from "@/components/bold/Bold";
import React from "react";

export function TechStacks() {
  return (
    <Section heading="Tech Stack">
      <Box
        mt={2}
        display="flex"
        justifyContent="space-evenly"
        alignItems="center"
        flexWrap="wrap"
      >
        <Icons />
      </Box>
      <Box mt={2}>
        <List spacing={3}>
          <TechStackListItems
            listHeading="Languages"
            items={["JavaScript(ES6+)", "TypeScript", "C++", "Python"]}
          />
          <TechStackListItems
            listHeading="Frameworks/Libraries"
            items={["React", "Ionic", "ExpressJS", "NestJS", "Puppeteer"]}
          />
          <TechStackListItems
            listHeading="Mobile"
            items={["React Native", "Ionic Framework"]}
          />
          <TechStackListItems
            listHeading="Databases"
            items={["MongoDB", "PostgreSQL", "Redis"]}
          />
          <TechStackListItems
            listHeading="DevOps"
            items={["GitHub Actions", "Docker"]}
          />
          <TechStackListItems
            listHeading="Others"
            items={[
              "REST API Design",
              "API Documentation(OpenAPI)",
              "Amazon Web Services",
              "TDD",
              "Git",
              "GitHub",
              "Shell Scripting",
              "Vim",
            ]}
          />
        </List>
      </Box>
    </Section>
  );
}

function Icons() {
  return (
    <React.Fragment>
      <FaReact fontSize="2.8rem" color="#61dafb" style={{ margin: 5 }} />
      <FaNodeJs color="lightgreen" fontSize="2.8rem" style={{ margin: 5 }} />
      <DiMongodb color="darkgreen" fontSize="2.8rem" style={{ margin: 5 }} />
      {/* <SiJavascript color="#ECD243" fontSize="2.8rem" style={{ margin: 5 }} /> */}
      <SiTypescript color="#1e6fbf" fontSize="2.8rem" style={{ margin: 5 }} />
      <FaGithub color="black" fontSize="2.8rem" style={{ margin: 5 }} />
      <FaDocker color="#2496ed" fontSize="3.2rem" style={{ margin: 5 }} />
    </React.Fragment>
  );
}

type TechStackListItemsProps = {
  items: string[];
  listHeading: string;
  checkIconColor?: string;
};

function TechStackListItems(props: TechStackListItemsProps) {
  return (
    <ListItem>
      <ListIcon
        as={FaCheckCircle}
        color={props.checkIconColor ?? "green.500"}
      />
      <Bold text={`${props.listHeading}:`} />
      <Text ml={2} as="span">
        {props.items.join(", ")}
      </Text>
    </ListItem>
  );
}
