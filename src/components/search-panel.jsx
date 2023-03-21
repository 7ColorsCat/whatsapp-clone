import {
    HStack,
    IconButton,
    Input,
    InputGroup,
    InputLeftElement,
    Tooltip,
} from '@chakra-ui/react'
import { FilterIcon, SearchIcon } from '../assets/icons'

export default function SearchPanel() {
    return (
        <HStack px={4} py={2} spacing={2} bg={'red.400'}>
            <InputGroup>
                <InputLeftElement
                    children={<SearchIcon />}
                    pointerEvents={'none'}
                />
                <Input
                    _placeholder={{
                        opacity: '0.6',
                        paddingLeft: '24px',
                    }}
                    placeholder="Search or start new chat"
                    variant={'filled'}
                />
            </InputGroup>
            <Tooltip
                shouldWrapChildren
                label="Unread chat filter"
                bg={'gray.400'}
            >
                <IconButton bg={'white'}>
                    <FilterIcon />
                </IconButton>
            </Tooltip>
        </HStack>
    )
}
