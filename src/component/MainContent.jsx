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
import content from "../assest/content.webp"
const MainContent = () => {
  return (
    <Flex justifyContent={"center"} alignItems={"center"}>
         <Box bg="white" p={5} borderRadius="md"  maxW="lg" mx="auto">
    <VStack spacing={4}>
      <Text fontSize="xl" fontWeight="bold" textAlign="center">
        WORLD'S LARGEST APP FOR HINDU DEVOTEES
      </Text>
      <Text fontSize="lg" textAlign="center">
        Pray daily with Sri Mandir. One App for all your devotional needs.
      </Text>
      <HStack spacing={4}>
        <Image src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg_playstore_logo.bb4d1aa2.svg&w=256&q=75" alt="Google Play" />
        <Image src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg_appstore_logo.cab7778b.svg&w=256&q=75" alt="App Store" />
      </HStack>
      <Text fontSize="sm" textAlign="center">
        Trusted by 20 million+ people. 100% Secure
      </Text>
      <Text fontSize="sm" textAlign="center">
        RECOGNIZED BY #startupindia & DPIIT
      </Text>
    </VStack>
  </Box>
  <Box width="700px">
    <Image src={content} alt="" />
  </Box>
    </Flex>
 
  )
}

export default MainContent