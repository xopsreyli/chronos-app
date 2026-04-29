import { alpha, Chip, Stack, Typography } from '@mui/material'
import type { SvgIconComponent } from '@mui/icons-material'
import useEventColor from '../../../../../hooks/ui/useEventColor/useEventColor.ts'
import type { EventType } from '../../../../../types/events/types.ts'

type Props = {
    Icon: SvgIconComponent
    eventType: EventType
    amount?: number
}

const StatItem = ({ Icon, eventType, amount = 0 }: Props) => {
    const color = useEventColor(eventType)

    return (
        <Stack
            direction="row"
            sx={{
                justifyContent: 'space-between',
                alignItems: 'center',
            }}
        >
            <Stack
                direction="row"
                spacing={1}
                useFlexGap
                sx={{
                    alignItems: 'center',
                }}
            >
                <Icon
                    sx={{
                        color: color,
                        fontSize: 18,
                    }}
                />
                <Typography
                    variant="body2"
                    sx={{
                        textTransform: 'Capitalize',
                    }}
                >
                    {eventType}
                </Typography>
            </Stack>
            <Chip
                label={amount}
                size="small"
                sx={{
                    color: color,
                    backgroundColor: alpha(color, 0.1),
                }}
            />
        </Stack>
    )
}

export default StatItem
