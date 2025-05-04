import {
  Divider,
  Box,
  HStack,
  VStack,
  Heading,
  Text,
  Button,
  Image,
} from "@chakra-ui/react";
import { ReactComponent as PlusIcon } from "../icons/plus-icon.svg";
import { ReactComponent as MoreIcon } from "../icons/more-icon.svg";
import user1 from "../images/user-1.png";
import user2 from "../images/user-2.png";
import user3 from "../images/user-3.png";
import user4 from "../images/user-4.png";
import colors from "../colors";

function Members() {
  const users = [
    {
      team: "Team A",
      description: "Description Text",
      name: "Seamus O'Reilly",
      email: "seamus.o@gmail.com",
      date: "Sep 6, 2024, 2:08 am",
      role: "Manager",
      profilePicture: user1,
    },
    {
      team: "Team B",
      description: "Description Text",
      name: "Aoife Murphy",
      email: "Aoife.Murphy@gmail.com",
      date: "Sep 12, 2024 2:07 pm",
      role: "Admin",
      profilePicture: user2,
    },
    {
      team: "Custom Team name",
      description: "Description Text",
      name: "Clara Thompson",
      email: "Clara.Thompson@gmail.com",
      date: "Aug 20, 2024 7:59 am",
      role: "Member",
      profilePicture: user3,
    },
    {
      team: "Custom Team B",
      description: "Description Text",
      name: "Daniel Hamilton",
      email: "Daniel_hamilton@aol.com",
      date: "Aug 27, 2024 6:36 am",
      role: "Member",
      profilePicture: user4,
    },
  ];

  return (
    <Box
      width="95%"
      align="start"
      margin={5}
      rounded={20}
      bgColor="white"
      p={4}
      border="1px"
      borderColor={colors.border}
    >
      <VStack align="stretch" spacing={3}>
        {/* Header */}
        <HStack justify="space-between">
          <VStack align="start">
            <Heading size="lg">Members</Heading>
            <Text color="gray">Manage and configure Members.</Text>
          </VStack>
          <Button
            color="white"
            bgColor="black"
            leftIcon={<PlusIcon color="black" />}
          >
            Add new member
          </Button>
        </HStack>

        {/* Table Headers */}
        <HStack fontWeight="bold" spacing={8}>
          <Text w="20%">Team</Text>
          <Text w="30%">User</Text>
          <Text w="20%">Date of Creation</Text>
          <Text w="15%">Role</Text>
          <Text w="5%"></Text>
        </HStack>

        <Divider />

        {/* User Rows */}
        {users.map((user, index) => (
          <Box key={index} w="100%">
            <HStack spacing={8} align="center" w="100%">
              {/* Team */}
              <VStack spacing={0} w="20%" align="start">
                <Text>{user.team}</Text>
                <Text fontSize="sm" color="gray.500">
                  {user.description}
                </Text>
              </VStack>

              {/* User Info */}
              <HStack w="30%">
                <Image
                  src={user.profilePicture}
                  boxSize="40px"
                  borderRadius="full"
                />
                <VStack align="start" spacing={0}>
                  <Text>{user.name}</Text>
                  <Text fontSize="sm" color="gray.500">
                    {user.email}
                  </Text>
                </VStack>
              </HStack>

              {/* Date */}
              <Text w="20%">{user.date}</Text>

              {/* Role */}
              <Box w="15%" display="flex" alignItems="center" gap="8px">
                <Box
                  bg={
                    user.role === "Manager"
                      ? "black"
                      : user.role === "Admin"
                      ? "#DC2626"
                      : "lightgray"
                  }
                  color="white"
                  px={0}
                  py={0}
                  borderRadius={20}
                >
                  <Text
                    color={
                      user.role === "Manager"
                        ? "white"
                        : user.role === "Admin"
                        ? "white"
                        : "black"
                    }
                    px={2.5}
                    py={1}
                    borderRadius={20}
                  >
                    {user.role}
                  </Text>
                </Box>
              </Box>
              <Box w="5%" display="flex" alignItems="center" gap="8px">
                <MoreIcon color="black" />
              </Box>
            </HStack>
            <Divider />
          </Box>
        ))}
      </VStack>
    </Box>
  );
}

export default Members;
