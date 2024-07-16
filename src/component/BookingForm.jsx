import React from 'react';
import { Box, Heading, FormControl, FormLabel, Input, Button, Radio, RadioGroup, Stack, Checkbox } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const BookingForm=()=>{
  return (
    <Box mt={8} p={4} borderWidth={1} borderRadius="md" boxShadow="md">
      <Heading as="h3" size="lg" mb={4}>Enter details for your puja</Heading>
      <FormControl id="whatsapp-number" mb={4}>
        <FormLabel>Your WhatsApp Number</FormLabel>
        <Input type="tel" placeholder="+91 9876543210" />
        <Checkbox mt={2}>I have a different number for calling</Checkbox>
      </FormControl>
      <FormControl id="member-name" mb={4}>
        <FormLabel>Name of member participating in Puja</FormLabel>
        <Input placeholder="Enter member name" />
      </FormControl>
      <FormControl id="gotra" mb={4}>
        <FormLabel>Fill participant's gotra</FormLabel>
        <Input placeholder="Gotra" />
        <Checkbox mt={2}>I do not know my gotra</Checkbox>
      </FormControl>
      <FormControl as="fieldset" mb={4}>
        <FormLabel as="legend">Do you want to get puja prasad?</FormLabel>
        <RadioGroup defaultValue="yes">
          <Stack spacing={4} direction="row">
            <Radio value="yes">Yes</Radio>
            <Radio value="no">No</Radio>
          </Stack>
        </RadioGroup>
      </FormControl>
      <Link to="/">
      <Button colorScheme="teal" type="submit">Proceed to book</Button>
      </Link>
      
    </Box>
  );
}

export default BookingForm;
