import React from 'react';
import { Flex, Box, Link, Image, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box
      bgGradient="linear(to-r, #FA6E2E, #FD8622, #FD7D2B)"
      height="62px"
      px="16px"
      py="16px"
      bg="orange.500"
    >
      <Flex
        maxW="screen-xl"
        mx="auto"
        justifyContent="space-between"
        alignItems="center"
        mt={0}
        h="30px"
      >
        <Box py={4}>
          <Link href="/?lang=en" display="flex" alignItems="center">
            <Image
              alt="mandir connect logo english"
              loading="lazy"
              width="136px"
              height="30px"
              decoding="async"
              src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsirmandir_footer_en_logo.fedb7ccd.svg&w=256&q=75"
            />
          </Link>
        </Box>
        <Box>
          <Flex pt={3} pb={2} justifyContent="flex-end" px={4}>
            <Box pr={6}>
              <Link
                href="#"
                fontWeight="semibold"
                color="white"
                textTransform="uppercase"
                _hover={{ color: 'white' }}
              >
                ABOUT US
              </Link>
            </Box>
            <Box pr={6}>
              <Link
                href="#"
                fontWeight="semibold"
                color="white"
                textTransform="uppercase"
                _hover={{ color: 'white' }}
              >
                TERMS AND CONDITIONS
              </Link>
            </Box>
            <Box>
              <Link
                href="#"
                fontWeight="semibold"
                color="white"
                textTransform="uppercase"
                _hover={{ color: 'white' }}
              >
                PRIVACY POLICY
              </Link>
            </Box>
          </Flex>
          <Flex justifyContent="flex-end" alignItems="center" mt={-1}>
            <Text
              fontSize="10px"
              fontWeight="medium"
              color="white"
              pb={2}
              px={4}
              textAlign="center"
            >
              &copy; 2024 Firstprinciple Appsforbharat Pvt Ltd. All rights
              reserved.
            </Text>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Footer;
