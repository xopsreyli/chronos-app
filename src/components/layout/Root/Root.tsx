import theme from '../../../lib/theme/theme.ts'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { Outlet } from 'react-router'
import useUser from '../../../hooks/useUser/useUser.ts'
import PageLoader from '../../ui/common/PageLoader/PageLoader.tsx'

const Root = () => {
    const { isPending } = useUser()

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {isPending ? <PageLoader /> : <Outlet />}
        </ThemeProvider>
    )
}

export default Root
