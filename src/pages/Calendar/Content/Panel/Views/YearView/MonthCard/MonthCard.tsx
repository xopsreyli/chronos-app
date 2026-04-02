import { Card, CardContent, Typography } from '@mui/material'

type Props = {
    month: string
}

const MonthCard = ({ month }: Props) => {
    return (
        <Card
            elevation={0}
            sx={{
                cursor: 'pointer',
                border: '1px solid',
                borderColor: 'grey.100',
                transition: 'all 0.2s ease',
                '&:hover': {
                    borderColor: 'primary.light',
                    transform: 'scale(1.02)',
                },
            }}
        >
            <CardContent>
                <Typography
                    sx={{
                        fontWeight: 500,
                        mb: 2,
                    }}
                >
                    {month}
                </Typography>
                <Typography
                    color="text.secondary"
                    sx={{
                        fontSize: '0.75rem',
                    }}
                >
                    0 events
                </Typography>
            </CardContent>
        </Card>
    )
}

export default MonthCard
