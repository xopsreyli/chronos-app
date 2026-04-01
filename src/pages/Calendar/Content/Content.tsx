import { Box, Toolbar } from '@mui/material'
import Header from './Header/Header.tsx'
import Panel from './Panel/Panel.tsx'

const Content = () => {
    return (
        <Box
            sx={{
                flex: 1,
            }}
        >
            <Toolbar />
            <Box
                component="main"
                sx={{
                    p: 4,
                }}
            >
                <Header />
                <Panel />
            </Box>
        </Box>
    )
}

export default Content
