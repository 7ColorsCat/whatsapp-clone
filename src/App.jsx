import { Flex } from '@chakra-ui/react'
import LeftPanel from './components/left-panel'
import RightPanel from './components/right-panel'

function App() {
    return (
        <Flex
            direction={{ base: 'column', sm: 'row' }}
            overflow={'scroll'}
            justify={'center'}
            h={'100vh'}
        >
            <LeftPanel />
            <RightPanel />
        </Flex>
    )
}

export default App
