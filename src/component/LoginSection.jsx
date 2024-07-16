import { useState } from "react";
import {
  Box,
  Button,
  Divider,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";
 const LoginSection=()=> {
  const { isOpen, onOpen, onClose } = useDisclosure();
   const [open,setOpen]=useState(false)
  return (
    <>
      
      <InfoIcon boxSize={6} onClick={onOpen}/>
      
        
      <Modal isOpen={isOpen} onClose={onClose} size="md">
        <ModalOverlay />
        <ModalContent
          margin="0"
          position="absolute"
          top="15"
          right="0"
          borderRadius="0"
          height="90vh"
          width="300px"
        >
          <ModalHeader>Login / Create an account</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box>
              <Divider mb={4} />
              <Stack spacing={4}>
                <Box>
                  <Text fontWeight="bold">Account Details</Text>
                  <Stack spacing={2} mt={2}>
                    <Button variant="link">My profile</Button>
                    <Button variant="link">My Puja Bookings</Button>
                    <Button variant="link">My Ramotsav Bookings</Button>
                    <Button variant="link" colorScheme="green">
                      Book a Puja
                      <Text as="span" color="green.500" ml={2}>
                        New
                      </Text>
                    </Button>
                  </Stack>
                </Box>
                <Divider />
                <Box>
                  <Text fontWeight="bold">Help & Support for Puja Booking</Text>
                  <Stack spacing={2} mt={2}>
                    <Button variant="link">080-711-74417</Button>
                    <Text fontSize="sm">You can call us from 10:30 AM - 7:30 PM</Text>
                    <Button variant="link">Email us</Button>
                    <Button variant="link">WhatsApp us</Button>
                  </Stack>
                </Box>
              </Stack>
            </Box>
          </ModalBody>
          <ModalFooter>
          
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default LoginSection;
