import { Container } from '@mui/material'
import Menu from './Menu/Menu'
import Main from './Main/Main.tsx'

const Content = () => {
    return (
        <Container
            maxWidth="lg"
            sx={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 3,
                py: 4,
            }}
        >
            <Menu />
            <Main />
        </Container>
    )
}

export default Content
