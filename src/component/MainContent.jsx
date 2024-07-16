import React from 'react'
import {
    Avatar,
    Box,
    Button,
    Flex,
    Heading,
    HStack,
    Image,
    Link,
    Text,
    VStack,
  } from "@chakra-ui/react";
  import { ChevronDownIcon, CalendarIcon, InfoIcon, TimeIcon } from "@chakra-ui/icons";
const MainContent = () => {
  return (
    <Box minH="100vh" bg="white">
    <Box as="main" p={4}>
      <Text fontSize="sm" color="gray.600" mb={4}>
        <Link color="gray.800">Home</Link> &gt;{" "}
        <Link color="gray.800">Sri Mandir Puja Seva</Link> &gt; Devshayani Ekadashi Special
      </Text>
      <Flex direction={{ base: "column", md: "row" }} gap={4}>
        <Box position="relative">
          <Image src="/placeholder.svg" alt="Devshayani Ekadashi Special" rounded="lg" />
          <Box position="absolute" top={2} left={2} bg="white" p={2} rounded="lg" shadow="lg">
            <Flex align="center" spacing={2}>
              <Image src="/placeholder.svg" alt="Sri Mandir Logo" boxSize="40px" />
              <Box ml={2}>
                <Heading as="h2" size="md" fontWeight="bold">Sri Mandir</Heading>
                <Text fontSize="sm" color="gray.600">Puja Seva</Text>
              </Box>
            </Flex>
          </Box>
          <Box position="absolute" bottom={2} left={2} bg="white" p={2} rounded="lg" shadow="lg">
            <Heading as="h3" size="md" color="orange.600">DEVSHAYANI EKADASHI SPECIAL</Heading>
          </Box>
        </Box>
        <Box>
          <Heading as="h1" size="xl" fontWeight="bold" color="orange.600">
            Devshayani Ekadashi Special 16,000 Brihaspati Graha Mool Mantra Jaap & Sudarshan Havan
          </Heading>
          <Heading as="h2" size="lg" fontWeight="bold" mt={2}>To find an Ideal Partner and Relationship Bliss</Heading>
          <HStack align="center" mt={2}>
            <InfoIcon boxSize={4} color="gray.600" />
            <Text ml={2} color="gray.600">Shri Navagrah Shani Temple, Ujjain, Madhya Pradesh</Text>
          </HStack>
          <HStack align="center" mt={2}>
            <CalendarIcon boxSize={4} color="gray.600" />
            <Text ml={2} color="gray.600">17 July, Wednesday, Ashadha Shukla Ekadashi</Text>
          </HStack>
          <Box mt={4}>
            <Heading as="h3" size="md" fontWeight="bold">Puja booking will close in :</Heading>
            <HStack spacing={2} mt={2}>
              <VStack bg="gray.100" p={2} rounded="lg">
                <Text fontSize="2xl" fontWeight="bold">0</Text>
                <Text fontSize="sm" color="gray.600">Day</Text>
              </VStack>
              <VStack bg="gray.100" p={2} rounded="lg">
                <Text fontSize="2xl" fontWeight="bold">17</Text>
                <Text fontSize="sm" color="gray.600">Hours</Text>
              </VStack>
              <VStack bg="gray.100" p={2} rounded="lg">
                <Text fontSize="2xl" fontWeight="bold">25</Text>
                <Text fontSize="sm" color="gray.600">Mins</Text>
              </VStack>
              <VStack bg="gray.100" p={2} rounded="lg">
                <Text fontSize="2xl" fontWeight="bold">47</Text>
                <Text fontSize="sm" color="gray.600">Secs</Text>
              </VStack>
            </HStack>
          </Box>
          <HStack mt={4}>
            <Avatar src="/placeholder-user.jpg" name="User 1" />
            <Avatar src="/placeholder-user.jpg" name="User 2" />
            <Avatar src="/placeholder-user.jpg" name="User 3" />
            <Avatar src="/placeholder-user.jpg" name="User 4" />
            <Avatar src="/placeholder-user.jpg" name="User 5" />
          </HStack>
          <Box mt={4}>
            <Text fontSize="lg" fontWeight="bold" color="red.600">
              Till now 2,00,000+ Devotees have participated in Pujas conducted by Sri Mandir Puja Seva.
            </Text>
          </Box>
          <Button mt={4} colorScheme="green" color="white">Select puja package</Button>
        </Box>
      </Flex>
    </Box>
  </Box>
  )
}

export default MainContent