import { Box, CircularProgress } from '@mui/material'

const PageLoader = () => {
    return (
        <Box
            sx={{
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <CircularProgress aria-label="Loading…" />
        </Box>
    )
}

export default PageLoader
