import { Avatar, Flex, HStack, Icon, Tooltip } from '@chakra-ui/react'
import {
    CommunityIcon,
    MenuIcon,
    NewChatIcon,
    StatusIcon,
} from '../assets/icons'

const iconData = [
    { icon: <CommunityIcon fontSize={'1.5rem'} />, label: 'Comunicate chat' },
    { icon: <StatusIcon fontSize={'1.5rem'} />, label: 'Status' },
    { icon: <NewChatIcon fontSize={'1.5rem'} />, label: 'New Chat' },
    { icon: <MenuIcon fontSize={'1.5rem'} />, label: 'Menu' },
]

function CustomToolTip({ label, icon, ...rest }) {
    return (
        <Tooltip
            label={label}
            shouldWrapChildren
            bg={'#eae6df'}
            color={'black'}
            fontSize={'xs'}
            {...rest}
        >
            <Icon variant="ghost">{icon}</Icon>
        </Tooltip>
    )
}

export default function Header() {
    return (
        <Flex
            justify="space-between"
            align={'center'}
            px={4}
            py={2}
            bg={'gray.100'}
        >
            <Avatar
                boxSize={'40px'}
                name="Cat"
                src="https://images.unsplash.com/photo-1559624989-7b9303bd9792?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60"
            />
            <HStack spacing={4}>
                {iconData.map((icon, index) => {
                    return (
                        <CustomToolTip
                            key={index}
                            label={icon.label}
                            icon={icon.icon}
                        />
                    )
                })}
            </HStack>
        </Flex>
    )
}
