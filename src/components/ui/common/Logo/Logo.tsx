import { Link, Stack, Typography } from '@mui/material'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import { Link as RRLink } from 'react-router'

type IconProps = {
    color?: string,
    size?: number
}

type Props = {
    icon?: IconProps,
    nameSize?: number
    themeMode?: 'light' | 'dark'
}

const Logo = ({
    icon = {
        color: 'primary.main',
        size: 32,
    },
    nameSize = 18,
    themeMode = 'light',
              }: Props) => {
    const isDark: boolean = themeMode === 'dark'

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
                        color: isDark ? '#fff' : 'text.primary',
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
