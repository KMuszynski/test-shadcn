import { Box, HStack, VStack, Heading, Text, Button } from "@chakra-ui/react";
import { ReactComponent as LogoIcon } from "../icons/logo-icon.svg";
import { ReactComponent as UpDownArrowsIcon } from "../icons/logo-up-down-icon.svg";
import colors from "../colors";

function Title() {
  return (
    <Box w="100%" h="48px" p="8px" mx="auto">
      <HStack>
        <HStack mr="auto">
          <Box
            w="32px"
            h="32px"
            paddingX="9px"
            paddingY="7px"
            bgColor="black"
            rounded="lg"
          >
            <LogoIcon color="white" />
          </Box>
          <VStack spacing={0} align="start">
            <Heading
              color={colors.sidebarForeground}
              size="sm"
              lineHeight="short"
              mb="0"
            >
              ACME
            </Heading>
            <Text
              color={colors.sidebarForeground}
              fontSize="sm"
              lineHeight="short"
              mt="0"
            >
              v.1.0.1
            </Text>
          </VStack>
        </HStack>
        <Button bgColor={colors.sidebarBackground}>
          <UpDownArrowsIcon color="gray" />
        </Button>
      </HStack>
    </Box>
  );
}

export default Title;
