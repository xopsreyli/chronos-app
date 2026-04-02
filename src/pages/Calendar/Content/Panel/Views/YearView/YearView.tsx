import { Grid } from '@mui/material'
import MonthCard from './MonthCard/MonthCard.tsx'

const MONTHS: string[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
]

const YearView = () => {
    return (
        <Grid container columns={4} spacing={2}>
            {MONTHS.map((month) => (
                <Grid size={1} key={month}>
                    <MonthCard month={month} />
                </Grid>
            ))}
        </Grid>
    )
}

export default YearView
