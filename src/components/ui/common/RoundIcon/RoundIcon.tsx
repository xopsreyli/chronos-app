import type { SvgIconComponent } from '@mui/icons-material'
import { alpha, Box } from '@mui/material'

type Props = {
    Icon: SvgIconComponent
    color: string
    iconSize: number
}

const RoundIcon = ({ Icon, color, iconSize }: Props) => {
    const boxSize: number = iconSize * 2

    return (
        <Box
            sx={{
                width: boxSize,
                aspectRatio: 1,
                flexShrink: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%',
                backgroundColor: `${alpha(color, 0.1)}`,
                color,
                fontSize: iconSize,
            }}
        >
            <Icon fontSize="inherit" />
        </Box>
    )
}

export default RoundIcon
