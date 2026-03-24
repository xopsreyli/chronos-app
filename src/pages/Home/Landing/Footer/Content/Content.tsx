import { Stack } from '@mui/material'
import About from './About/About.tsx'
import Navigation from './Navigation/Navigation.tsx'

const Content = () => {
    return (
        <Stack
            direction="row"
            sx={{
                justifyContent: 'space-between',
            }}
        >
            <About />
            <Navigation />
        </Stack>
    )
}

export default Content
