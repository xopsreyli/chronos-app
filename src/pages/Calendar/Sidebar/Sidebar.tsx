import { Divider, Drawer, Stack, Toolbar } from '@mui/material'
import CalendarInfo from './CalendarInfo/CalendarInfo.tsx'
import Overview from './Overview/Overview.tsx'
import Menu from './Menu/Menu.tsx'

const Sidebar = () => {
    const WIDTH: number = 280

    return (
        <Drawer
            variant="persistent"
            open
            sx={{
                width: WIDTH,
                flexShrink: 0,
                zIndex: (theme) => theme.zIndex.appBar - 1,
                '& .MuiPaper-root': {
                    width: WIDTH,
                    borderColor: 'grey.100',
                },
                '& .MuiPaper-root::-webkit-scrollbar': {
                    display: 'none',
                },
            }}
        >
            <Toolbar />
            <Stack
                spacing={4}
                useFlexGap
                divider={<Divider orientation="horizontal" flexItem />}
                sx={{
                    p: 3,
                }}
            >
                <CalendarInfo />
                <Overview />
                <Menu />
            </Stack>
        </Drawer>
    )
}

export default Sidebar
