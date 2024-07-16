import { Box, Button, Flex, Heading, HStack, Image, Link, Text } from '@chakra-ui/react'
import React from 'react'
import { ChevronDownIcon, CalendarIcon, InfoIcon, TimeIcon } from "@chakra-ui/icons";
import LoginSection from './LoginSection';
const Navbar = () => {
  return (
    <Flex as="header" align="center" justify="space-between" p={4} borderBottom="1px" borderColor="gray.200">
    <Flex align="center" spacing={2}>
      <Image src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg_puja_seva_logo_en.e294bb15.svg&w=256&q=75" alt="Sri Mandir Logo" boxSize="40px" />
      <Box ml={2}>
        <Heading as="h1" size="lg" fontWeight="bold">Sri Mandir</Heading>
        <Text fontSize="sm" color="gray.600">Puja Seva</Text>
      </Box>
    </Flex>
    <HStack spacing={4}>
      <Link color="gray.800">Home</Link>
      <Link color="gray.600">Puja</Link>
      <Link color="gray.800">Panchang</Link>
      <Link color="gray.800">Temples</Link>
      <Link color="gray.800">Library</Link>
      <Box position="relative">
        <Button variant="link" rightIcon={<ChevronDownIcon />}>English</Button>
      </Box>
    </HStack>
    <Button w={10} h={10} bg="gray.200" borderRadius="full" display="flex" alignItems="center" justifyContent="center">
      <LoginSection/>
    </Button>
  </Flex>
  )
}

export default Navbar