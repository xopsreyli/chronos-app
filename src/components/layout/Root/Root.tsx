import theme from '../../../lib/theme/theme.ts'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { Outlet } from 'react-router'

const Root = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Outlet />
        </ThemeProvider>
    )
}

export default Root
