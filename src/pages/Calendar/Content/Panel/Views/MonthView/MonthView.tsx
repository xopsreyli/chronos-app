import { Grid, Typography } from '@mui/material'
import DayCell from './DayCell/DayCell.tsx'

const WEEK_DAYS: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const DAYS: number[] = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
]

const MonthView = () => {
    return (
        <Grid container columns={7} spacing={0.5}>
            {WEEK_DAYS.map((weekDay) => (
                <Grid key={weekDay} size={1}>
                    <Typography
                        align={'center'}
                        color={'text.secondary'}
                        sx={{
                            fontSize: '0.875rem',
                            fontWeight: 600,
                            letterSpacing: '0.05em',
                            p: 1,
                        }}
                    >
                        {weekDay}
                    </Typography>
                </Grid>
            ))}
            {DAYS.map((day) => (
                <Grid key={day} size={1}>
                    <DayCell date={day} />
                </Grid>
            ))}
        </Grid>
    )
}

export default MonthView
