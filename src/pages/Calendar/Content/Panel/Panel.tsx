import { Paper } from '@mui/material'
import Header from './Header/Header.tsx'
// import UpcomingView from './Views/UpcomingView/UpcomingView.tsx'
// import WeekView from './Views/WeekView/WeekView.tsx'
import MonthView from './Views/MonthView/MonthView.tsx'
// import YearView from './Views/YearView/YearView.tsx'

const Panel = () => {
    return (
        <Paper
            component="section"
            elevation={0}
            sx={{
                border: '1px solid',
                borderColor: 'grey.100',
                boxShadow: '0 2px 12px rgba(0, 0, 0, 0.06)',
                p: 4,
            }}
        >
            <Header />
            <MonthView />
        </Paper>
    )
}

export default Panel
