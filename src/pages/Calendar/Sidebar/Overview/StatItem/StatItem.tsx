import { Chip, Stack, Typography } from '@mui/material'
import type { SvgIconComponent } from '@mui/icons-material'

type Props = {
    Icon: SvgIconComponent
    name: string
    amount: number
}

const StatItem = ({ Icon, name, amount }: Props) => {
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
                        fontSize: 18,
                    }}
                />
                <Typography
                    variant="body2"
                    sx={{
                        textTransform: 'Capitalize',
                    }}
                >
                    {name}
                </Typography>
            </Stack>
            <Chip label={amount} size="small" />
        </Stack>
    )
}

export default StatItem
