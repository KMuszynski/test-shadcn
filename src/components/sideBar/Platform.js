import { useState } from "react";
import { Text, HStack, VStack, Button, Box } from "@chakra-ui/react";
import { ReactComponent as DocumentationIcon } from "../icons/documentation-icon.svg";
import { ReactComponent as ModelsIcon } from "../icons/models-icon.svg";
import { ReactComponent as PlaygroundIcon } from "../icons/playground-icon.svg";
import { ReactComponent as SettingsIcon } from "../icons/settings-icon.svg";
import colors from "../colors";

function Platform() {
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
        Platform
      </Text>

      <VStack align="start" spacing={1.5} p={0} m={0} w="100%">
        {/* Playground */}
        <Button
          bgColor={colors.sidebarBackground}
          justifyContent="flex-start"
          paddingLeft={0}
          w="100%"
          variant="ghost"
          paddingY="3px"
          height="fit-content"
          onClick={() => toggleMenu("playground")}
        >
          <HStack spacing={2} width="inherit">
            <PlaygroundIcon width="16px" height="16px" />
            <Text
              fontWeight="normal"
              isTruncated
              maxWidth="inherit"
              overflow="hidden"
            >
              Playground
            </Text>
          </HStack>
        </Button>
        {openMenu === "playground" && (
          <SubMenu
            items={[
              "Sub Menu Item",
              "Sub Menu Item",
              "Sub Menu Item",
              "Sub Menu Item",
            ]}
          />
        )}

        {/* Models */}
        <Button
          bgColor={colors.sidebarBackground}
          justifyContent="flex-start"
          paddingLeft={0}
          w="100%"
          variant="ghost"
          paddingY="3px"
          height="fit-content"
          onClick={() => toggleMenu("models")}
        >
          <HStack spacing={2} width="inherit">
            <ModelsIcon width="16px" height="16px" />
            <Text
              fontWeight="normal"
              isTruncated
              maxWidth="inherit"
              overflow="hidden"
            >
              Models
            </Text>
          </HStack>
        </Button>
        {openMenu === "models" && (
          <SubMenu
            items={[
              "Sub Menu Item",
              "Sub Menu Item",
              "Sub Menu Item",
              "Sub Menu Item",
            ]}
          />
        )}

        {/* Documentation */}
        <Button
          bgColor={colors.sidebarBackground}
          justifyContent="flex-start"
          paddingLeft={0}
          w="100%"
          variant="ghost"
          paddingY="3px"
          height="fit-content"
          onClick={() => toggleMenu("documentation")}
        >
          <HStack spacing={2} width="inherit">
            <DocumentationIcon width="16px" height="16px" />
            <Text
              fontWeight="normal"
              isTruncated
              maxWidth="inherit"
              overflow="hidden"
            >
              Documentation
            </Text>
          </HStack>
        </Button>
        {openMenu === "documentation" && (
          <SubMenu
            items={[
              "Sub Menu Item",
              "Sub Menu Item",
              "Sub Menu Item",
              "Sub Menu Item",
            ]}
          />
        )}

        {/* Settings */}
        <Button
          bgColor={colors.sidebarBackground}
          justifyContent="flex-start"
          paddingLeft={0}
          w="100%"
          variant="ghost"
          paddingY="3px"
          height="fit-content"
          onClick={() => toggleMenu("settings")}
        >
          <HStack spacing={2} width="inherit">
            <SettingsIcon width="16px" height="16px" />
            <Text
              fontWeight="normal"
              isTruncated
              maxWidth="inherit"
              overflow="hidden"
            >
              Settings
            </Text>
          </HStack>
        </Button>
        {openMenu === "settings" && (
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

export default Platform;
