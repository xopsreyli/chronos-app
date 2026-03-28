import { Box, Container, Toolbar } from '@mui/material'
import Header from './Header/Header.tsx'
import Calendars from './Calendars/Calendars.tsx'

const App = () => {
    return (
        <Container maxWidth="lg">
            <Toolbar />
            <Box
                component="main"
                sx={{
                    pt: 4,
                }}
            >
                <Header />
                <Calendars />
            </Box>
        </Container>
    )
}

export default App
