import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { IconButton, Stack, Typography } from '@mui/material'

const Header = () => {
    return (
        <Stack
            direction="row"
            sx={{
                alignItems: 'center',
                justifyContent: 'space-between',
                mb: 3,
            }}
        >
            <Typography variant="h6">Upcoming Events</Typography>
            <Stack direction="row" spacing={1} useFlexGap>
                <IconButton size={'small'}>
                    <ChevronLeftIcon />
                </IconButton>
                <IconButton size={'small'}>
                    <ChevronRightIcon />
                </IconButton>
            </Stack>
        </Stack>
    )
}

export default Header
