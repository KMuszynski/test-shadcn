import { useState } from "react";
import { Text, HStack, VStack, Button, Box } from "@chakra-ui/react";
import { ReactComponent as DesignEngineeringIcon } from "../icons/design-engineering-icon.svg";
import { ReactComponent as SalesAndMarketingIcon } from "../icons/sales-and-marketing-icon.svg";
import { ReactComponent as TravelIcon } from "../icons/travel-icon.svg";
import { ReactComponent as MoreIcon } from "../icons/more-icon.svg";
import colors from "../colors";

function Projects() {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  const SubMenu = ({ items }) => (
    <Box borderLeft="2px solid lightgray" pl={4} ml={2} w="100%">
      <VStack align="start" spacing={1} w="100%">
        {items.map((item, idx) => (
          <Button
            key={idx}
            variant="ghost"
            bgColor={colors.sidebarBackground}
            justifyContent="flex-start"
            paddingLeft={0}
            paddingY="3px"
            height="fit-content"
            w="100%"
          >
            <Text fontWeight="normal">{item}</Text>
          </Button>
        ))}
      </VStack>
    </Box>
  );

  return (
    <VStack align="start" spacing={2} px="9px" m={0} w="100%">
      <Text fontSize="sm" p={0} m={0}>
        Projects
      </Text>

      <VStack align="start" spacing={1.5} p={0} m={0} w="100%">
        {/* Design Engineering */}
        <Button
          bgColor={colors.sidebarBackground}
          justifyContent="flex-start"
          paddingLeft={0}
          w="100%"
          variant="ghost"
          paddingY="3px"
          height="fit-content"
          onClick={() => toggleMenu("design")}
        >
          <HStack spacing={2} width="inherit">
            <DesignEngineeringIcon width="16px" height="16px" />
            <Text
              fontWeight="normal"
              isTruncated
              maxWidth="inherit"
              overflow="hidden"
            >
              Design Engineering
            </Text>
          </HStack>
        </Button>
        {openMenu === "design" && (
          <SubMenu
            items={[
              "Sub Menu Item",
              "Sub Menu Item",
              "Sub Menu Item",
              "Sub Menu Item",
            ]}
          />
        )}

        {/* Sales & Marketing */}
        <Button
          bgColor={colors.sidebarBackground}
          justifyContent="flex-start"
          paddingLeft={0}
          w="100%"
          variant="ghost"
          paddingY="3px"
          height="fit-content"
          onClick={() => toggleMenu("sales")}
        >
          <HStack spacing={2} width="inherit">
            <SalesAndMarketingIcon width="16px" height="16px" />
            <Text
              fontWeight="normal"
              isTruncated
              maxWidth="inherit"
              overflow="hidden"
            >
              Sales & Marketing
            </Text>
          </HStack>
        </Button>
        {openMenu === "sales" && (
          <SubMenu
            items={[
              "Sub Menu Item",
              "Sub Menu Item",
              "Sub Menu Item",
              "Sub Menu Item",
            ]}
          />
        )}

        {/* Travel */}
        <Button
          bgColor={colors.sidebarBackground}
          justifyContent="flex-start"
          paddingLeft={0}
          w="100%"
          variant="ghost"
          paddingY="3px"
          height="fit-content"
          onClick={() => toggleMenu("travel")}
        >
          <HStack spacing={2} width="inherit">
            <TravelIcon width="16px" height="16px" />
            <Text
              fontWeight="normal"
              isTruncated
              maxWidth="inherit"
              overflow="hidden"
            >
              Travel
            </Text>
          </HStack>
        </Button>
        {openMenu === "travel" && (
          <SubMenu
            items={[
              "Sub Menu Item",
              "Sub Menu Item",
              "Sub Menu Item",
              "Sub Menu Item",
            ]}
          />
        )}

        {/* More */}
        <Button
          bgColor={colors.sidebarBackground}
          justifyContent="flex-start"
          paddingLeft={0}
          w="100%"
          variant="ghost"
          paddingY="3px"
          height="fit-content"
          onClick={() => toggleMenu("more")}
        >
          <HStack spacing={2} width="inherit">
            <MoreIcon width="16px" height="16px" />
            <Text
              fontWeight="normal"
              isTruncated
              maxWidth="inherit"
              overflow="hidden"
              color="gray.600"
            >
              More
            </Text>
          </HStack>
        </Button>
        {openMenu === "more" && (
          <SubMenu
            items={[
              "Sub Menu Item",
              "Sub Menu Item",
              "Sub Menu Item",
              "Sub Menu Item",
            ]}
          />
        )}
      </VStack>
    </VStack>
  );
}

export default Projects;
