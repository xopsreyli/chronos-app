import { Card, CardContent, Stack, Typography } from '@mui/material'
import Event from './Event/Event'

type Props = {
    weekDay: string
    date: number
}

const DayCard = ({ weekDay, date }: Props) => {
    return (
        <Card
            elevation={0}
            sx={{
                cursor: 'pointer',
                aspectRatio: 1,
                overflow: 'visible',
                flex: 1,
                border: '1px solid',
                borderColor: 'grey.100',
                transition: 'all 0.2s ease',
                '&:hover': {
                    borderColor: 'primary.light',
                    transform: 'scale(1.02)',
                },
            }}
        >
            <CardContent
                sx={{
                    p: 1.5,
                    '&:last-child': {
                        p: 1.5,
                    },
                }}
            >
                <Typography
                    color="text.secondary"
                    sx={{
                        fontSize: 12,
                        fontWeight: 600,
                        letterSpacing: '0.05em',
                        mb: 0.5,
                    }}
                >
                    {weekDay}
                </Typography>
                <Typography
                    variant="subtitle2"
                    sx={{
                        mb: 1,
                    }}
                >
                    {date}
                </Typography>
                <Stack spacing={0.5} useFlexGap>
                    <Event title={'Team Meeting'} />
                </Stack>
            </CardContent>
        </Card>
    )
}

export default DayCard
