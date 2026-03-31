import { Stack } from '@mui/material'
import Sidebar from './Sidebar/Sidebar.tsx'

const Calendar = () => {
    return (
        <>
            <Stack direction="row">
                <Sidebar />
            </Stack>
        </>
    )
}

export default Calendar
