import React from 'react';
import { Box, SimpleGrid, Card, CardBody, Text, Button, Heading, Divider } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import PujaDetails from './PujaDetails';

function PujaPackages() {
  const packages = [
    {
      price: "₹851",
      title: "Individual Puja",
      details: "Package for 1 person",
      description: [
        "Pandit ji will call out your name during Sankalp Puja.",
        "Get sacred fresh prasad will be sent to you anywhere within 5-10 days."
      ]
    },
    {
      price: "₹1251",
      title: "Partner Puja",
      details: "Package for 2 persons",
      description: [
        "Pandit ji will call out your name during Sankalp Puja.",
        "Get sacred fresh prasad will be sent to you anywhere within 5-10 days."
      ]
    },
    {
      price: "₹2001",
      title: "Family + Bhog",
      details: "Package for the family",
      description: [
        "Pandit ji will call out your name during Sankalp Puja.",
        "Get sacred fresh prasad will be sent to you anywhere within 5-10 days."
      ]
    },
    {
      price: "₹3001",
      title: "Joint Family + Bhog + Flower Basket",
      details: "Package for joint family",
      description: [
        "Pandit ji will call out your name during Sankalp Puja.",
        "Get sacred fresh prasad will be sent to you anywhere within 5-10 days."
      ]
    }
  ];

  return (
    <Box mt={8}>
      <Heading as="h2" size="md" mb={4}>Select Puja Package</Heading>
      <SimpleGrid columns={{ sm: 1, md: 4 }} spacing={4}>
        {packages.map((pkg, index) => (
          <Card key={index} borderWidth="1px" borderRadius="md" overflow="hidden">
            <CardBody>
              <Heading size="md" mb={2}>{pkg.price}</Heading>
              <Text fontWeight="bold" mb={2}>{pkg.title}</Text>
              <Text mb={2}>{pkg.details}</Text>
              <Divider my={2} />
              {pkg.description.map((line, idx) => (
                <Text key={idx} mb={1}>{line}</Text>
              ))}
              
              <PujaDetails/>
             
             
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default PujaPackages;
