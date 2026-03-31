import { Stack } from '@mui/material'
import Sidebar from './Sidebar/Sidebar.tsx'
import Content from './Content/Content.tsx'

const Calendar = () => {
    return (
        <Stack direction="row">
            <Sidebar />
            <Content />
        </Stack>
    )
}

export default Calendar
