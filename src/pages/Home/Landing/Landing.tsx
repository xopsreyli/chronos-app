import { Container } from '@mui/material'
import Intro from './Intro/Intro.tsx'
import Views from './Views/Views.tsx'
import Features from './Features/Features.tsx'
import Footer from './Footer/Footer.tsx'

const Landing = () => {
    return (
        <>
            <Container component="main" maxWidth="lg">
                <Intro />
                <Features />
                <Views />
            </Container>
            <Footer />
        </>
    )
}

export default Landing
