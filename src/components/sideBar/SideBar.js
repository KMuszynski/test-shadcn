import { Box, VStack } from "@chakra-ui/react";
import Title from "./Title";
import Platform from "./Platform";
import Projects from "./Projects";
import Footer from "./Footer";
import Account from "./Account";
import colors from "../colors";

function SideBar() {
  return (
    <VStack
      w="20%"
      align="start"
      paddingX="8px"
      paddingY="7px"
      minWidth="190px"
      maxW="256"
      spacing={6}
      height="100vh"
      bgColor={colors.sidebarBackground}
      marginRight={2}
    >
      <Title />
      <Platform />
      <Projects />

      <Box flexGrow={1} />

      <Footer />
      <Account />
    </VStack>
  );
}

export default SideBar;
