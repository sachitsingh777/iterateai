import { Box, Button, Flex, Heading, HStack, Image,  Stack, Text } from "@chakra-ui/react";
import { CalendarIcon, ChevronDownIcon, InfoIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const PujaBooking=()=>{
  return (
    <Box minH="100vh" bg="white">
    
      <Box as="main"  p={4}>
      <Flex padding={"16px"} justifyContent={"between"} background="rgb(254 245 236)" gap={"5"} alignItems="center" fontSize="md"  mb={4}>
  <Box>
    <Link>Home</Link> &gt;{' '}
  </Box>
  <Box>
    <Link>Sri Mandir Puja Seva</Link> &gt;{' '}
  </Box>
  <Box>
  Devshayani Ekadashi Special 16,000 Brihaspati Graha Mool Mantra Jaap & Sudarshan Havan to find an Ideal Partner and</Box>
</Flex>
        <Flex direction={{ base: "column", md: "row" }} gap={4}>
          <Box position="relative">
            <Image src="https://www.srimandir.com/_next/image?url=https%3A%2F%2Fsrm-cdn.a4b.io%2Fyoda%2F1720550494790.webp&w=1920&q=75" alt="Devshayani Ekadashi Special" rounded="lg" />
            <Box position="absolute" top={2} left={2} bg="white" p={2} rounded="lg" shadow="lg">
              
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
                <Stack bg="gray.100" p={2} rounded="lg" align="center">
                  <Text fontSize="2xl" fontWeight="bold">0</Text>
                  <Text fontSize="sm" color="gray.600">Day</Text>
                </Stack>
                <Stack bg="gray.100" p={2} rounded="lg" align="center">
                  <Text fontSize="2xl" fontWeight="bold">17</Text>
                  <Text fontSize="sm" color="gray.600">Hours</Text>
                </Stack>
                <Stack bg="gray.100" p={2} rounded="lg" align="center">
                  <Text fontSize="2xl" fontWeight="bold">25</Text>
                  <Text fontSize="sm" color="gray.600">Mins</Text>
                </Stack>
                <Stack bg="gray.100" p={2} rounded="lg" align="center">
                  <Text fontSize="2xl" fontWeight="bold">47</Text>
                  <Text fontSize="sm" color="gray.600">Secs</Text>
                </Stack>
              </HStack>
            </Box>
           
            <Box mt={4}>
              <Text fontSize="lg" fontWeight="bold" color="red.600">
                Till now 2,00,000+ Devotees have participated in Pujas conducted by Sri Mandir Puja Seva.
              </Text>
            </Box>
            <Link to="/puja-packages"> 
            <Button mt={4} colorScheme="green" color="white">Select puja package</Button>
            </Link>
           
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default PujaBooking;
