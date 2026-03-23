import { Container } from '@mui/material'
import Intro from './Intro/Intro.tsx'
import Views from './Views/Views.tsx'
import Features from './Features/Features.tsx'

const Landing = () => {
    return (
        <Container maxWidth="lg">
            <Intro />
            <Features />
            <Views />
        </Container>
    )
}

export default Landing
