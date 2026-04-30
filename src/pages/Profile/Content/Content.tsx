import { Container } from '@mui/material'
import Menu from './Menu/Menu'

const Content = () => {
    return (
        <Container
            maxWidth="lg"
            sx={{
                display: 'flex',
                gap: 3,
                py: 4,
            }}
        >
            <Menu />
        </Container>
    )
}

export default Content
