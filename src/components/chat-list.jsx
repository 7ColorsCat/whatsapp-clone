import {
    Avatar,
    Box,
    Flex,
    HStack,
    Stack,
    StackDivider,
    Text,
    chakra,
} from '@chakra-ui/react'
import { DeliveredIcon } from '../assets/icons'
import { chatData } from '../chat-data'

export function Chat({ name, message, seen, date, src, ...rest }) {
    return (
        <HStack px={4} py={2}>
            <Avatar src={src} name={name} size="md" />
            <Box flex={1}>
                <Flex justify={'space-between'} align={'baseline'}>
                    <Box>
                        <Text fontWeight={'semibold'}>{name}</Text>
                        <HStack>
                            <DeliveredIcon
                                color={seen ? '#53bdeb' : '#667781'}
                            />
                            <Text color={'gray.600'} fontSize={'sm'}>
                                {message}
                            </Text>
                        </HStack>
                    </Box>
                    <chakra.time fontSize={'xs'} color="#667781">
                        {date}
                    </chakra.time>
                </Flex>
            </Box>
        </HStack>
    )
}

export default function ChatList(props) {
    return (
        <Stack
            spacing={0}
            pr={1}
            divider={<StackDivider w={'82%'} alignSelf={'flex-end'} />}
            {...props}
        >
            {chatData.map((item, index) => (
                <Chat
                    key={index}
                    src={item.src}
                    date={item.date}
                    message={item.message}
                    name={item.name}
                    seen={item.seen}
                />
            ))}
        </Stack>
    )
}
