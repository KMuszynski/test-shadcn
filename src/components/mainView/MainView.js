import { Box, VStack } from "@chakra-ui/react";
import BreadCrumbs from "./BreadCrumbs";
import WorkPlace from "./WorkPlace";

function MainView() {
  return (
    <Box flex="1" paddingY="4px" marginRight={2}>
      <VStack allign="start">
        <BreadCrumbs />
        <WorkPlace />
      </VStack>
    </Box>
  );
}

export default MainView;
