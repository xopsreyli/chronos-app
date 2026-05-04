import { CssBaseline, ThemeProvider } from '@mui/material'
import { Outlet } from 'react-router'
import { NuqsAdapter } from 'nuqs/adapters/react-router/v7'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import theme from '../../../lib/theme/theme.ts'
import { SYSTEM } from '../../../enums/theme/enums.ts'
import ThemeHandler from './ThemeHandler/ThemeHandler.tsx'

const Root = () => {
    return (
        <NuqsAdapter>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <ThemeProvider
                    theme={theme}
                    defaultMode={SYSTEM}
                    disableTransitionOnChange
                    noSsr
                >
                    <CssBaseline />
                    <ThemeHandler>
                        <Outlet />
                    </ThemeHandler>
                </ThemeProvider>
            </LocalizationProvider>
        </NuqsAdapter>
    )
}

export default Root
