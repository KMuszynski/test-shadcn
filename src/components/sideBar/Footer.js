import { Text, HStack, VStack, Button } from "@chakra-ui/react";
import { ReactComponent as AboutQuestionMarkIcon } from "../icons/about-question-mark-icon.svg";
import { ReactComponent as AboutMoreIcon } from "../icons/about-more-icon.svg";
import { ReactComponent as FeedbackIcon } from "../icons/feedback-icon.svg";
import colors from "../colors";

function Footer() {
  return (
    <VStack align="start" spacing={2} px="9px" m={0} w="100%">
      <VStack align="start" spacing={1.5} p={0} m={0} w="100%">
        <Button
          bg={colors.backgroundAccent}
          justifyContent="flex-start"
          paddingLeft={1.5}
          w="100%"
          variant="ghost"
          paddingY="5px"
          height="fit-content"
        >
          <HStack spacing={2} width="100%" justifyContent="space-between">
            <HStack spacing={2}>
              <AboutQuestionMarkIcon
                boxSize="16px"
                width="16px"
                height="16px"
              />
              <Text
                fontWeight="normal"
                isTruncated
                maxWidth="inherit"
                overflow="hidden"
              >
                About
              </Text>
            </HStack>
            <AboutMoreIcon />
          </HStack>
        </Button>

        <Button
          bgColor={colors.sidebarBackground}
          justifyContent="flex-start"
          paddingLeft={0}
          w="100%"
          variant="ghost"
          paddingY="3px"
          height="fit-content"
        >
          <HStack spacing={2} width="inherit">
            <Text
              fontWeight="normal"
              isTruncated
              maxWidth="inherit"
              overflow="hidden"
            >
              Terms & policies
            </Text>
          </HStack>
        </Button>

        <Button
          bgColor={colors.sidebarBackground}
          justifyContent="flex-start"
          paddingLeft={0}
          w="100%"
          variant="ghost"
          paddingY="3px"
          height="fit-content"
        >
          <HStack spacing={2} width="inherit">
            <Text
              fontWeight="normal"
              isTruncated
              maxWidth="inherit"
              overflow="hidden"
            >
              Cookies
            </Text>
          </HStack>
        </Button>

        <Button
          bgColor={colors.sidebarBackground}
          justifyContent="flex-start"
          paddingLeft={0}
          w="100%"
          variant="ghost"
          paddingY="3px"
          height="fit-content"
        >
          <HStack spacing={2} width="inherit">
            <FeedbackIcon boxSize="16px" width="16px" height="16px" />
            <Text
              fontWeight="normal"
              isTruncated
              maxWidth="inherit"
              overflow="hidden"
            >
              Feedback
            </Text>
          </HStack>
        </Button>
      </VStack>
    </VStack>
  );
}

export default Footer;
