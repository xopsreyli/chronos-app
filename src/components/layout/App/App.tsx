import Header from '../Header/Header.tsx'
import { ThemeProvider } from '@mui/material'
import theme from '../../../lib/theme.ts'
import { Outlet } from 'react-router'

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Header />
            <Outlet />
        </ThemeProvider>
    )
}

export default App
