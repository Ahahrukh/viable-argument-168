import React from "react";
import "./footer.css";
import {
  Box,
  Container,
  Link,
  Stack,
  Text,
  Flex,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";

import { FaTwitter } from "react-icons/fa";

import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import img from "./logoevery.jpeg";
import UPPERFooter from "./upperfooter";

const Footer = () => {
  return (
    <>
      <UPPERFooter />

      <Box
        bg={useColorModeValue("black", "black")}
        mt={{ base: "18rem", md: "10rem", lg: "0rem" }}
        color={"white"}
        fontSize={{ base: "0.4rem", md: "0.75rem", lg: "0.95rem" }}
      >
        <Container
          as={Stack}
          maxW={"100%"}
          py={6}
          fontFamily="geomanist-regular',sans-serif"
          pt={"50px"}
        >
          <Flex direction="row" justifyContent="space-evenly">
            <Stack>
              <Image src={img} className="picsize" />
            </Stack>
            <Stack align={"flex-start"}>
              <Link href={"#"}>Company</Link>

              <Link href={"#"}>About us</Link>
              <Link href={"#"}>Contact</Link>
            </Stack>
            <Stack align={"flex-start"}>
              {/* <ListHeader>Company</ListHeader> */}
              <Link href={"#"}>Product</Link>
              <Link href={"#"}>Tour</Link>
              <Link href={"#"}>Pricing</Link>
              <Link href={"#"}>Request a demo</Link>

              <Link href={"#"}>Customers</Link>
              <Link href={"#"}>API & docs</Link>
              <Link href={"#"}>Status</Link>
            </Stack>
            <Stack align={"flex-start"}>
              <Link href={"#"}> Solutions</Link>
              <Link href={"#"}>Time tracking</Link>
              <Link href={"#"}>Project budgeting</Link>
              <Link href={"#"}>Visual planning</Link>
              <Link href={"#"}>Reporting</Link>
              <Link href={"#"}>Invoicing</Link>
              <Link href={"#"}>Time card calculator</Link>
              <Link href={"#"}>Weekly timesheet template</Link>
              <Link href={"#"}>Invoice generator</Link>
            </Stack>
            <Stack align={"flex-start"}>
              <Link href={"#"}> Integrations</Link>
              <Link href={"#"}>Asana</Link>
              <Link href={"#"}>Dribbble</Link>
              <Link href={"#"}>Trello</Link>
              <Link href={"#"}>Jira</Link>
              <Link href={"#"}>Twitter</Link>
              <Link href={"#"}>GitHub</Link>
              <Link href={"#"}>ClickUp</Link>
              <Link href={"#"}>Monday</Link>
              <Link href={"#"}>Notion</Link>
              <Link href={"#"}>Todoist</Link>
              <Link href={"#"}>GitLab</Link>
              <Link href={"#"}>All</Link>
            </Stack>
            <Stack align={"flex-start"}>
              <Link href={"#"}> Learn</Link>
              <Link href={"#"}>Twitter</Link>
              <Link href={"#"}>Resources</Link>
              <Link href={"#"}>Help center</Link>
              <Link href={"#"}>Blog</Link>
              <Link href={"#"}>Product updates</Link>
              <Link href={"#"}>Timesheet app</Link>
              <Link href={"#"}>Time clock app</Link>
              <Link href={"#"}>Attendance tracker</Link>
              <Link href={"#"}>Work hours tracker</Link>
            </Stack>
            <Stack align={"flex-start"}>
              <Link href={"#"}> Download</Link>
              <Link href={"#"}>Browser extension</Link>
              <Link href={"#"}>Chrome time tracking extension</Link>
              <Link href={"#"}>Time tracking with screenshots</Link>
              <Link href={"#"}>Chrome time tracking extension</Link>
              <Link href={"#"}>iPhone app</Link>
            </Stack>
          </Flex>
          <Box py={10}>
            <Text
              fontSize={{ base: "0.4rem", md: "0.75rem", lg: "0.95rem" }}
              textAlign={"left"}
            >
              © 2022 Everhour Terms | Privacy | Cookies | Sitemap
            </Text>

            <Text className="socialpic">
              <ul>
                <li>
                  {" "}
                  <FaFacebook />{" "}
                </li>
                <li>
                  <FaYoutube />
                </li>
                <li>
                  <FaTwitter />
                </li>
                <li>
                  {" "}
                  <BsLinkedin />
                </li>
              </ul>
            </Text>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
