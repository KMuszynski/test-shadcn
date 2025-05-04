import {
  Divider,
  Box,
  HStack,
  VStack,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";

function Header() {
  return (
    <Box width="100%">
      <VStack align="start" spacing={4} paddingY="12px">
        <Heading paddingX="18px">Settings</Heading>
        <Divider width="100%" />
        <HStack align="start" spacing={0}>
          <Button bgColor="white">
            <Text color="gray.600" fontWeight="normal">
              Profile
            </Text>
          </Button>
          <Button bgColor="white">
            <Text color="gray.600" fontWeight="normal">
              Account
            </Text>
          </Button>
          <Button bgColor="white">
            <Text color="gray.600" fontWeight="normal">
              Files
            </Text>
          </Button>
          <Button bgColor="white" rounded="none" borderBottom="2px">
            <Text>Members</Text>
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
}

export default Header;
