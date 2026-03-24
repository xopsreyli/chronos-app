import Header from '../Header/Header.tsx'
import { CssBaseline, ThemeProvider, Box } from '@mui/material'
import theme from '../../../lib/theme/theme.ts'
import { Outlet } from 'react-router'

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header />
            <Box component="main">
                <Outlet />
            </Box>
        </ThemeProvider>
    )
}

export default App
