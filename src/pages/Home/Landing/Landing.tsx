import { Container } from '@mui/material'
import Intro from './Intro/Intro.tsx'
import Views from './Views/Views.tsx'

const Landing = () => {
    return (
        <Container maxWidth="lg">
            <Intro />
            <Views />
        </Container>
    )
}

export default Landing
