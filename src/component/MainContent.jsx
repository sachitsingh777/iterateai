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

      <Box>
           <Flex bg="orange.50" justify="space-between" mt={{ base: 8, md: 16 }} py={{ base: 4, md: 6 }} px={{ base: 4, md: 16 }} flexDirection={{ base: 'column', md: 'row' }} alignItems="center">
        <Box width={{ base: "100%", md: "50%" }} mt={{ base: 12, md: 24 }} px={{ base: 4, md: 16 }}>
          <Flex textAlign="left" alignItems="center">
            <Image src="https://sri-mandir-clone.vercel.app/static/media/achievement.62495c645ad1c66b3e1a.webp" alt="Content Image" mr={4} />
            <Text fontSize="lg" >WORLD’S LARGEST APP FOR HINDU DEVOTEES</Text>
          </Flex>
          <Heading as="h2" fontWeight="bold" textAlign="left" fontSize={{ base: "2xl", md: "4xl" }} my={4}>
            Pray daily with <Box as="span" color="#f18c33">Sri Mandir</Box>.
            One App for all your devotional needs.
          </Heading>
          <HStack mt={4} spacing={4}>
            <Image src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg_playstore_logo.bb4d1aa2.svg&w=256&q=75" alt="Google Play" />
            <Image src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg_appstore_logo.cab7778b.svg&w=256&q=75" alt="App Store" />
          </HStack>
        </Box>
        <Box width={{ base: "100%", md: "50%" }} mt={{ base: 8, md: 0 }}>
          <Image src={content} alt="Image" height={{ base: "auto", md: "450px" }} width="100%" objectFit="cover" />
        </Box>
      </Flex>


      <Box mt={{ base: 12, md: 16 }} px={{ base: 4, md: 16 }}>
        <Heading as="h2" fontWeight="bold" fontSize={{ base: "2xl", md: "4xl" }} mb={8} textAlign="center">Explore Sri Mandir</Heading>
        <Flex  justify="center" gap={8}>
          <Box textAlign="center">
            <Image src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_puja_seva.48294bc9.svg&w=96&q=75" alt="Book Pujas at Temple" height={20} width={20} mx="auto" />
            <Text mt={4} fontWeight="semibold" color="gray.600">Book Pujas at temples</Text>
          </Box>
          <Box textAlign="center">
            <Image src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_astro.4e8171bd.svg&w=96&q=75" alt="Astro Services" height={20} width={20} mx="auto" />
            <Text mt={4} fontWeight="semibold" color="gray.600">Talk to Astrologers</Text>
          </Box>
          <Box textAlign="center">
            <Image src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_chadhava_seva.c04d828f.svg&w=96&q=75" alt="Chadhava" height={20} width={20} mx="auto" />
            <Text mt={4} fontWeight="semibold" color="gray.600">Offer Chadhava at Temples</Text>
          </Box>
          <Box textAlign="center">
            <Image src='https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_festivals.19495f6a.svg&w=96&q=75' alt="Festivals" height={20} width={20} mx="auto" />
            <Text mt={4} fontWeight="semibold" color="gray.600">Read Festival Details</Text>
          </Box>
          <Box textAlign="center">
            <Image src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_music.b3aeb0a3.svg&w=96&q=75" alt="Listen to Divine Music" height={20} width={20} mx="auto" />
            <Text mt={4} fontWeight="semibold" color="gray.600">Listen to Divine Music</Text>
          </Box>
          <Box textAlign="center">
            <Image src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_mandir_darshan.68d86126.svg&w=96&q=75" alt="Do Mandir Darshan" height={20} width={20} mx="auto" />
            <Text mt={4} fontWeight="semibold" color="gray.600">Do Mandir Darshan</Text>
          </Box>
          <Box textAlign="center">
            <Image src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_sahitya.976e992d.svg&w=96&q=75" alt="Read Hindu Literature" height={20} width={20} mx="auto" />
            <Text mt={4} fontWeight="semibold" color="gray.600">Read Hindu Literature</Text>
          </Box>
          <Box textAlign="center">
            <Image src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_panchang.0458f8f4.svg&w=96&q=75" alt="Read Panchang" height={20} width={20} mx="auto" />
            <Text mt={4} fontWeight="semibold" color="gray.600">Read Panchang</Text>
          </Box>
        </Flex>
      </Box>


      <Box bg="slate.50" mt={{ base: 12, md: 16 }} py={{ base: 8, md: 16 }}>
        <Flex bg="#FAFAFA" flexDirection="column" justifyContent="center" alignItems="center" pt={{ base: 8, md: 16 }} px={{ base: 4, md: 16 }}>
          <Heading fontSize={{ base: "2xl", md: "4xl" }} textAlign="center">Our Divine Mission Recognized by Prominent Media Outlets</Heading>
          <Flex  justify="center" pt={{ base: 8, md: 16 }} gap={8}>
            <Box width={{ base: "100%", md: "25%" }} display="flex" flexDirection="column" alignItems="center" textAlign="center" cursor="pointer">
              <Image src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg_link_01.1dea7667.png&w=640&q=75" alt="Mid-Day" width="100%" />
            </Box>
            <Box width={{ base: "100%", md: "25%" }} display="flex" flexDirection="column" alignItems="center" textAlign="center" cursor="pointer">
              <Image src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg_link_02.bddcfd94.png&w=640&q=75" alt="YourStory" width="100%" />
            </Box>
            <Box width={{ base: "100%", md: "25%" }} display="flex" flexDirection="column" alignItems="center" textAlign="center" cursor="pointer">
              <Image src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg_link_03.d53d3f19.png&w=640&q=75" alt="BW" width="100%" />
            </Box>
            <Box width={{ base: "100%", md: "25%" }} display="flex" flexDirection="column" alignItems="center" textAlign="center" cursor="pointer">
              <Image src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg_link_04.3e3537d0.png&w=640&q=75" alt="ABP" width="100%" />
            </Box>
          </Flex>
        </Flex>
      </Box>

<Box bg="white" display="flex" flexDirection="column" justifyContent="center" alignItems="center" pt={{ base: 8, md: 16 }} px={{ base: 4, md: 16 }}>
  <Box textAlign="center" mb={{ base: 8, md: 16 }}>
    <Heading fontSize={{ base: "2xl", md: "4xl" }} mb={4}>Puja Seva for You and Your Loved Ones</Heading>
    <Text fontSize="lg" color="gray.600">Book Pujas in your and your family's name at 1000+ renowned temples in India. You will also receive a video of the Puja and Prasad along with divine blessings.</Text>
    <Button variant="link" fontSize="lg" fontWeight="bold" color="#F18912" mt={4} _hover={{ textDecoration: 'underline' }}>View All Puja →</Button>
  </Box>

  <Flex wrap="wrap" justify="center" gap={8}>
  <Box width={{ base: "100%", md: "30%" }} borderRadius="lg" border="1px solid lightgray" p={4} cursor="pointer" display="flex" flexDirection="column" justifyContent="space-between">
      <Image src="https://www.srimandir.com/_next/image?url=https%3A%2F%2Fsrm-cdn.a4b.io%2Fyoda%2F1720875578009.webp&w=1920&q=75" alt="Puja 1" borderRadius="md" />
      <Box textAlign="center" mt={4}>
        <Text color="#D61F69" fontWeight="bold" fontSize="sm">TANTRAPEETH RUDRAPRAYAG TEERTH SPECIAL</Text>
        <Box bgGradient="linear(to-r, #f8edf1, #D61F69, #f5cfde)" h="1px" my={2} />
        <Text color="#D61F69" fontWeight="bold" fontSize="lg">Mahakali Tantra Yukta Yagya and 1008 Laal Pushp Mahakali Yantra Abhishek</Text>
      </Box>
      <Box mt={4} textAlign="left">
        <Flex align="center" mb={2}>
          <Image src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_puja_venue.d37df969.svg&w=1920&q=75" alt="Venue Icon" mr={2} />
          <Text fontWeight="semibold">Venue:</Text>
          <Text ml={1} color="gray.600">puja venue
          Kalimath Temple, Rudraprayag, Uttarakhand</Text>
        </Flex>
        <Flex align="center" mb={2}>
          <Image src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_puja_date.2c1b9f4c.svg&w=1920&q=75" alt="Date Icon" mr={2} />
         
          <Text ml={1} color="gray.600">puja date
          19 July, Friday, Ashadha Shukla Trayodashi</Text>
        </Flex>
      
        <Button variant="solid" bg="#F18912" color="white" mt={4} _hover={{ bg: "green.500" }}>PARTICIPATE</Button>
      </Box>
    </Box>
    <Box width={{ base: "100%", md: "30%" }} borderRadius="lg" border="1px solid lightgray" p={4} cursor="pointer" display="flex" flexDirection="column" justifyContent="space-between">
      <Image src="https://www.srimandir.com/_next/image?url=https%3A%2F%2Fsrm-cdn.a4b.io%2Fyoda%2F1720875578009.webp&w=1920&q=75" alt="Puja 1" borderRadius="md" />
      <Box textAlign="center" mt={4}>
        <Text color="#D61F69" fontWeight="bold" fontSize="sm">TANTRAPEETH RUDRAPRAYAG TEERTH SPECIAL</Text>
        <Box bgGradient="linear(to-r, #f8edf1, #D61F69, #f5cfde)" h="1px" my={2} />
        <Text color="#D61F69" fontWeight="bold" fontSize="lg">Mahakali Tantra Yukta Yagya and 1008 Laal Pushp Mahakali Yantra Abhishek</Text>
      </Box>
      <Box mt={4} textAlign="left">
        <Flex align="center" mb={2}>
          <Image src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_puja_venue.d37df969.svg&w=1920&q=75" alt="Venue Icon" mr={2} />
          <Text fontWeight="semibold">Venue:</Text>
          <Text ml={1} color="gray.600">puja venue
          Kalimath Temple, Rudraprayag, Uttarakhand</Text>
        </Flex>
        <Flex align="center" mb={2}>
          <Image src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_puja_date.2c1b9f4c.svg&w=1920&q=75" alt="Date Icon" mr={2} />
         
          <Text ml={1} color="gray.600">puja date
          19 July, Friday, Ashadha Shukla Trayodashi</Text>
        </Flex>
      
        <Button variant="solid" bg="#F18912" color="white" mt={4} _hover={{ bg: "green.500" }}>PARTICIPATE</Button>
      </Box>
    </Box>
    <Box width={{ base: "100%", md: "30%" }} borderRadius="lg" border="1px solid lightgray" p={4} cursor="pointer" display="flex" flexDirection="column" justifyContent="space-between">
      <Image src="https://www.srimandir.com/_next/image?url=https%3A%2F%2Fsrm-cdn.a4b.io%2Fyoda%2F1720875578009.webp&w=1920&q=75" alt="Puja 1" borderRadius="md" />
      <Box textAlign="center" mt={4}>
        <Text color="#D61F69" fontWeight="bold" fontSize="sm">TANTRAPEETH RUDRAPRAYAG TEERTH SPECIAL</Text>
        <Box bgGradient="linear(to-r, #f8edf1, #D61F69, #f5cfde)" h="1px" my={2} />
        <Text color="#D61F69" fontWeight="bold" fontSize="lg">Mahakali Tantra Yukta Yagya and 1008 Laal Pushp Mahakali Yantra Abhishek</Text>
      </Box>
      <Box mt={4} textAlign="left">
        <Flex align="center" mb={2}>
          <Image src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_puja_venue.d37df969.svg&w=1920&q=75" alt="Venue Icon" mr={2} />
          <Text fontWeight="semibold">Venue:</Text>
          <Text ml={1} color="gray.600">puja venue
          Kalimath Temple, Rudraprayag, Uttarakhand</Text>
        </Flex>
        <Flex align="center" mb={2}>
          <Image src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_puja_date.2c1b9f4c.svg&w=1920&q=75" alt="Date Icon" mr={2} />
         
          <Text ml={1} color="gray.600">puja date
          19 July, Friday, Ashadha Shukla Trayodashi</Text>
        </Flex>
      
        <Button variant="solid" bg="#F18912" color="white" mt={4} _hover={{ bg: "green.500" }}>PARTICIPATE</Button>
      </Box>
    </Box>
 
  </Flex>
</Box>

{/* Puja Categories Section */}
<Box bg="slate.50" display="flex" flexDirection="column" justifyContent="center" alignItems="center" pt={{ base: 8, md: 16 }} px={{ base: 4, md: 16 }}>
  <Box textAlign="center" mb={{ base: 8, md: 16 }}>
    <Heading fontSize={{ base: "2xl", md: "4xl" }} mb={4}>Puja Categories</Heading>
  </Box>

  <Flex  justify="center" gap={8}>
    <Box textAlign="center" mx="4">
      <Image src="https://sri-mandir-clone.vercel.app/static/media/aarti_article_image.eaba8cc63295376887bf.webp" alt="Puja Category 1" width={"400px"} mx="auto" />
      <Text mt={4} fontWeight="semibold" color="black">Arti </Text>
      <Text mt={4} fontWeight="semibold" color="gray.600">Find complete lyrics of all the famous Aartis and easily worship your beloved God.</Text>
      <Text mt={4} fontWeight="semibold"  color="orange.600">Read All</Text>
    </Box>
    <Box textAlign="center" mx="4">
      <Image src="https://sri-mandir-clone.vercel.app/static/media/aarti_article_image.eaba8cc63295376887bf.webp" alt="Puja Category 1" width={"400px"} mx="auto" />
      <Text mt={4} fontWeight="semibold" color="black">Arti </Text>
      <Text mt={4} fontWeight="semibold" color="gray.600">Find complete lyrics of all the famous Aartis and easily worship your beloved God.</Text>
      <Text mt={4} fontWeight="semibold"  color="orange.600">Read All</Text>
    </Box>
    <Box textAlign="center" mx="4">
      <Image src="https://sri-mandir-clone.vercel.app/static/media/aarti_article_image.eaba8cc63295376887bf.webp" alt="Puja Category 1" width={"400px"} mx="auto" />
      <Text mt={4} fontWeight="semibold" color="black">Arti </Text>
      <Text mt={4} fontWeight="semibold" color="gray.600">Find complete lyrics of all the famous Aartis and easily worship your beloved God.</Text>
      <Text mt={4} fontWeight="semibold"  color="orange.600">Read All</Text>
    </Box>
    <Box textAlign="center" mx="4">
      <Image src="https://sri-mandir-clone.vercel.app/static/media/aarti_article_image.eaba8cc63295376887bf.webp" alt="Puja Category 1" width={"400px"} mx="auto" />
      <Text mt={4} fontWeight="semibold" color="black">Arti </Text>
      <Text mt={4} fontWeight="semibold" color="gray.600">Find complete lyrics of all the famous Aartis and easily worship your beloved God.</Text>
      <Text mt={4} fontWeight="semibold"  color="orange.600">Read All</Text>
    </Box>
   
  </Flex>
</Box>

  
       
      </Box>
 

  
  )
}

export default MainContent