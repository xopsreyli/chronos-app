import type { ReactElement } from 'react'
import { useQueryState } from 'nuqs'
import { Paper } from '@mui/material'
import Header from './Header/Header.tsx'
import UpcomingView from './Views/UpcomingView/UpcomingView.tsx'
import WeekView from './Views/WeekView/WeekView.tsx'
import MonthView from './Views/MonthView/MonthView.tsx'
import YearView from './Views/YearView/YearView.tsx'

const VIEWS: Record<string, ReactElement> = {
    upcoming: <UpcomingView />,
    week: <WeekView />,
    month: <MonthView />,
    year: <YearView />,
}

const Panel = () => {
    const [view] = useQueryState('view', {
        defaultValue: 'upcoming',
    })

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
            {VIEWS[view]}
        </Paper>
    )
}

export default Panel
