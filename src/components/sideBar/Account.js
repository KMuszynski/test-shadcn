import { Image, Text, HStack, VStack, Heading } from "@chakra-ui/react";
import { ReactComponent as AccountChangeIcon } from "../icons/account-change-icon.svg";
import profilePic from "../images/Account-image.png";
function Account() {
  return (
    <HStack marginBottom={2} marginLeft={2} width="100%" paddingRight={4}>
      <Image width="32px" height="32px" rounded={5} src={profilePic} />
      <VStack spacing={0} width="inherit">
        <Heading width="100%" isTruncated size="sm">
          Alex Thompson
        </Heading>
        <Text width="100%" isTruncated size={20}>
          m@example.com
        </Text>
      </VStack>
      <AccountChangeIcon style={{ flexShrink: 0 }} />
    </HStack>
  );
}

export default Account;
