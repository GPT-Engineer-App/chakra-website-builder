import { Box, Button, Container, Flex, Heading, HStack, Icon, Text, VStack } from "@chakra-ui/react";
import { FaMicrophone, FaPlayCircle } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4} bg="#F8F9FB">
      <Flex justify="space-between" align="center" mb={4}>
        <Box>
          <Heading size="lg">Consultation with Maria Garcia</Heading>
          <Text fontSize="sm" color="gray.500">04.06.2024</Text>
        </Box>
        <HStack spacing={4}>
          <Text fontSize="sm" color="gray.500">Frame 1000003361</Text>
          <Button leftIcon={<FaMicrophone />} colorScheme="purple" size="sm">
            START TRANSCRIPTION
          </Button>
        </HStack>
      </Flex>

      <Flex direction={{ base: "column", md: "row" }} align="flex-start">
        <VStack spacing={4} align="stretch" flex="1" w={{ base: "100%", md: "70%" }}>
          <Box bg="white" p={4} borderRadius="md" boxShadow="sm">
            <Heading size="md" mb={2}>AI Summary</Heading>
            <Box h="100px" bg="gray.100" borderRadius="md"></Box>
          </Box>

          <Box bg="white" p={4} borderRadius="md" boxShadow="sm">
            <Flex justify="space-between" align="center" mb={2}>
              <Heading size="md">Notes</Heading>
              <Icon as={FaPlayCircle} color="purple.500" />
            </Flex>
            <Box h="100px" bg="gray.100" borderRadius="md"></Box>
          </Box>

          <Box bg="white" p={4} borderRadius="md" boxShadow="sm">
            <Heading size="md" mb={2}>Transcriptions</Heading>
            <Flex align="center" mb={2}>
              <Icon as={FaPlayCircle} color="gray.500" mr={2} />
              <Text>Patient interview</Text>
            </Flex>
            <Box h="50px" bg="gray.100" borderRadius="md"></Box>
          </Box>

          <Box bg="white" p={4} borderRadius="md" boxShadow="sm">
            <Heading size="md" mb={2}>Wearable activity</Heading>
            <Box h="100px" bg="gray.100" borderRadius="md"></Box>
          </Box>

          <Box bg="white" p={4} borderRadius="md" boxShadow="sm">
            <Heading size="md" mb={2}>Related Files</Heading>
            <Flex>
              <Box w="50%" h="100px" bg="gray.100" borderRadius="md" mr={2}></Box>
              <Box w="50%" h="100px" bg="gray.100" borderRadius="md"></Box>
            </Flex>
          </Box>
        </VStack>

        <Box
          w={{ base: "100%", md: "30%" }}
          h={{ base: "auto", md: "100vh" }}
          bg="white"
          p={4}
          borderRadius="md"
          boxShadow="sm"
          className="css-1c2auwj"
          style={{ position: { base: "relative", md: "fixed" }, top: 0, right: 0, zIndex: 1000 }}
        >
          <Flex align="center" mb={4}>
            <Box w="40px" h="40px" bg="gray.100" borderRadius="full" mr={2}></Box>
            <Box>
              <Heading size="sm">Maria Garcia</Heading>
              <Text fontSize="xs" color="gray.500">42 yrs, female</Text>
            </Box>
          </Flex>
          <HStack spacing={2} mb={4}>
            <Box bg="purple.100" px={2} py={1} borderRadius="md">
              <Text fontSize="xs" color="purple.500">Diabetic</Text>
            </Box>
            <Box bg="blue.100" px={2} py={1} borderRadius="md">
              <Text fontSize="xs" color="blue.500">Had surgery</Text>
            </Box>
          </HStack>
          <Heading size="xs" mb={2}>Activity trends</Heading>
          <Box h="50px" bg="gray.100" borderRadius="md" mb={4}></Box>
          <Heading size="xs" mb={2}>Latest</Heading>
          <Box h="100px" bg="gray.100" borderRadius="md"></Box>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;