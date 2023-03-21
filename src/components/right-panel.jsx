import {
    AbsoluteCenter,
    Box,
    Center,
    Flex,
    HStack,
    Heading,
    Text,
} from '@chakra-ui/react'
import { GeneralIcon } from '../assets/icons'
import { EncryptedIcon } from '../assets/icons'

export default function RightPanel(props) {
    return (
        <Center w={{ sm: '70%' }} position={'relative'} {...props} bg="#f0f2f5">
            <Flex
                justify={'center'}
                align={'center'}
                direction={'column'}
                textAlign={'center'}
                pb={'4rem'}
            >
                <GeneralIcon />
                <Box pt={8}>
                    <Heading fontWeight={'light'}>Whatsapp Web</Heading>
                    <Text fontSize={'sm'} mt={4}>
                        Send and receive messages without keeping your phone
                        online. <br /> Use WhatsApp on up to 4 linked devices
                        and 1 phone at the same time.
                    </Text>
                </Box>
                <AbsoluteCenter
                    flex={1}
                    bottom={'10px'}
                    axis="horizontal"
                    mt={10}
                >
                    <HStack justifyItems={'baseline'} color={'#667781'}>
                        <EncryptedIcon />
                        <Text>End-to-end encryption</Text>
                    </HStack>
                </AbsoluteCenter>
            </Flex>
        </Center>
    )
}
