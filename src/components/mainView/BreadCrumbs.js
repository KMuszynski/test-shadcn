import { Box, HStack, Text } from "@chakra-ui/react";
import { ReactComponent as BreadCrumbsIcon } from "../icons/breadcrumbs-icon.svg";
import { ReactComponent as ArrowIcon } from "../icons/breadcrumbs-arrow-icon.svg";
import { ReactComponent as SeparatorIcon } from "../icons/separator.svg";

function BreadCrumbs() {
  return (
    <Box paddingY="16px" paddingX="18px" width="100%">
      <HStack spacing={4} align="center" justify="flex-start" width="100%">
        <BreadCrumbsIcon />
        <SeparatorIcon />
        <Text>Building Your Application</Text>
        <ArrowIcon />
        <Text fontWeight="bold">Data Fetching</Text>
      </HStack>
    </Box>
  );
}

export default BreadCrumbs;
