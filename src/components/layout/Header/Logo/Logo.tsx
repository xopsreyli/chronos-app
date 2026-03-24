import { Link, Stack, Typography } from '@mui/material'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import { Link as RRLink } from 'react-router'

const Logo = () => {
    return (
        <Link to={'/'} component={RRLink} underline="none">
            <Stack
                direction="row"
                spacing={1}
                useFlexGap
                sx={{
                    alignItems: 'center',
                }}
            >
                <CalendarMonthIcon
                    sx={{
                        color: 'primary.main',
                        fontSize: 32,
                    }}
                />
                <Typography
                    sx={{
                        color: 'text.primary',
                        fontSize: '1.125rem',
                        fontWeight: 'bold',
                        textTransform: 'capitalize',
                    }}
                >
                    chronos
                </Typography>
            </Stack>
        </Link>
    )
}

export default Logo
