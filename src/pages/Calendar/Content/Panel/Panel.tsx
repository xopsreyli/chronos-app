import { Paper } from '@mui/material'
import UpcomingView from './Views/UpcomingView/UpcomingView.tsx'
import Header from './Header/Header.tsx'

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
            <UpcomingView />
        </Paper>
    )
}

export default Panel
