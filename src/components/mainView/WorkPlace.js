import { Box, VStack } from "@chakra-ui/react";
import Header from "./Header";
import Members from "./Members";
import colors from "../colors";

function WorkPlace() {
  return (
    <Box
      align="start"
      flex="1"
      width="100%"
      height="100vh"
      overflow="auto"
      m={0}
    >
      <VStack>
        <Header />
        <Box
          margin={2}
          width="100%"
          bgColor={colors.sidebarBackground}
          borderTop="2px solid"
          borderBottom="2px solid"
          borderColor={colors.border}
          borderTopRadius={0}
          borderBottomRadius={20}
        >
          <Members />
        </Box>
      </VStack>
    </Box>
  );
}

export default WorkPlace;
