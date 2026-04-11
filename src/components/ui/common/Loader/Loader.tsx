import { Box, CircularProgress } from '@mui/material'

type Props = {
    isFullScreen?: boolean
}

const Loader = ({ isFullScreen = false }: Props) => {
    return (
        <Box
            sx={{
                height: isFullScreen ? '100vh' : 'auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <CircularProgress aria-label="Loading…" />
        </Box>
    )
}

export default Loader
