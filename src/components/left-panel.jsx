import { Box } from '@chakra-ui/react'
import Header from './components/header'
import SearchPanel from './components/search-panel'
import ChatList from './components/chat-list'

function App() {
    return (
        <Box>
            <Header />
            <SearchPanel />
            <ChatList />
        </Box>
    )
}

export default App
