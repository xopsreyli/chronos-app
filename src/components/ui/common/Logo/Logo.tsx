import { Link, Stack, Typography } from '@mui/material'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import { Link as RRLink } from 'react-router'

type IconProps = {
    color?: string
    size?: number
}

type Props = {
    icon?: IconProps
    nameSize?: number
}

const Logo = ({
    icon = {
        color: 'primary.main',
        size: 32,
    },
    nameSize = 18,
}: Props) => {
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
                        color: icon.color,
                        fontSize: icon.size,
                    }}
                />
                <Typography
                    sx={{
                        color: 'text.primary',
                        fontSize: nameSize,
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
