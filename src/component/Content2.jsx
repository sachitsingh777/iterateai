import React from 'react'
import { Box, Text, Image, Heading, SimpleGrid, Card, CardBody, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
const Content2 = () => {
    const pujas = [
        {
          title: "16,000 Brihaspati Graha Mool Mantra Jaap & Sudarshan Havan",
          location: "Trimbakeshwar, Nashik",
          participants: 6,
          image: "https://www.srimandir.com/_next/image?url=https%3A%2F%2Fsrm-cdn.a4b.io%2Fyoda%2F1720550478895.webp&w=1920&q=75"
        },
        {
          title: "Pitru Dosha Nivaran Puja and Haridwar Ganga Abhishek Puja",
          location: "Haridwar, Gangotri, Varanasi",
          participants: 9,
          image: "https://www.srimandir.com/_next/image?url=https%3A%2F%2Fsrm-cdn.a4b.io%2Fyoda%2F1720553966379.webp&w=1920&q=75"
        },
        {
          title: "Shri Baba Shyam Puja, Abhishek and Shipra Aarti",
          location: "Ujjain, Madhya Pradesh",
          participants: 12,
          image: "https://www.srimandir.com/_next/image?url=https%3A%2F%2Fsrm-cdn.a4b.io%2Fyoda%2F1720615184459.webp&w=1920&q=75"
        }
      ];
  return (
    <>
    <Box textAlign="center" bg="gray.100" p={4}>
    <Heading as="h1" size="lg" mt={4}>Perform your Puja as per Vedic rituals at Famous Hindu Temples in India with Sri Mandir</Heading>
   <Image src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg_desktop_banner_review.c0435a90.webp&w=3840&q=75" alt="Puja" borderRadius="md" />
  </Box>
  <Box>
      <Heading as="h2" size="md" mb={4}>Upcoming Pujas on Sri Mandir</Heading>
      <SimpleGrid columns={{ sm: 1, md: 3 }} spacing={4}>
        {pujas.map((puja, index) => (
          <Card key={index}>
            <Image src={puja.image} alt={puja.title} />
            <CardBody>
              <Heading size="md">{puja.title}</Heading>
              <Text>Location: {puja.location}</Text>
              <Text>Participants: {puja.participants}</Text>
             <Link to="/puja-booking"> 
             <Button colorScheme="green" mt={2}>Participants</Button>
             </Link>
             
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>
    </Box>
    </>
    
  )
}

export default Content2




