import theme from '../../../lib/theme/theme.ts'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { Outlet } from 'react-router'
import { NuqsAdapter } from 'nuqs/adapters/react-router/v7'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

const Root = () => {
    return (
        <NuqsAdapter>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Outlet />
                </ThemeProvider>
            </LocalizationProvider>
        </NuqsAdapter>
    )
}

export default Root
