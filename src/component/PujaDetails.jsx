import React from 'react';
import {
  Box, Flex, Button, Text, Input, FormControl, FormLabel, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure
} from '@chakra-ui/react';
import { ArrowRightIcon, CloseIcon, PhoneIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

const PujaDetails= () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>

      <Button onClick={onOpen} colorScheme="green" mt={2}>Participants </Button>
      <Modal width="300px" height="450px" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Flex w="full" justifyContent="center" alignItems="center">
              <Button variant="ghost" w={6} mx={0} onClick={onClose}>
                <img alt="menu" width="24" height="24" src="/_next/static/media/back_arrow.bcf3db22.svg" />
              </Button>
              <Text fontSize="18px" fontWeight="bold" ml={2}>
                Fill your details for Puja
              </Text>
            </Flex>
          </ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <Box w="full" mb={4}>
              <Text fontSize="16px" fontWeight="bold">
                Enter Your Whatsapp Mobile Number
              </Text>
              <Text fontSize="12px" color="gray.500" mb={2}>
                Your Puja booking updates like Puja Photos, Videos and other details will be sent on WhatsApp on below number.
              </Text>
              <FormControl>
                <FormLabel htmlFor="input-phone-number">Your mobile Number</FormLabel>
                <Input
                  type="text"
                  id="input-phone-number"
                  inputMode="decimal"
                  maxLength="10"
                  placeholder="Enter mobile number"
                  required
                  pl="10"
                  borderColor="gray.300"
                  _focus={{ borderColor: "blue.500", ring: "blue.500" }}
                />
              </FormControl>
            </Box>

            <Box w="full" mb={4}>
              <FormControl>
                <FormLabel htmlFor="name">Enter Your Name</FormLabel>
                <Input
                  type="text"
                  id="name"
                  inputMode="text"
                  maxLength="64"
                  placeholder="Enter your name"
                 required
                  borderColor="gray.300"
                  _focus={{ borderColor: "blue.500", ring: "blue.500" }}
                />
              </FormControl>
            </Box>
          </ModalBody>

          <ModalFooter>
            <Link to="/booking-form">
            <Button colorScheme="blue" mr={3} onClick={onClose} rightIcon={<ArrowRightIcon />}>
              Next
            </Button>
            </Link>
            
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default PujaDetails;
