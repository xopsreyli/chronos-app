import { Toolbar, Stack, Grid } from '@mui/material'
import Content from './Content/Content.tsx'
import Calendar from './Calendar/Calendar.tsx'

const Intro = () => {
    return (
        <Stack
            component="section"
            sx={{
                height: '100vh',
            }}
        >
            <Toolbar />
            <Grid
                container
                spacing={6}
                sx={{
                    flex: 1,
                    alignItems: 'center',
                }}
            >
                <Grid size={6}>
                    <Content />
                </Grid>
                <Grid size={6}>
                    <Calendar />
                </Grid>
            </Grid>
        </Stack>
    )
}

export default Intro
