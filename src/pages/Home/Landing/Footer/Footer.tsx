import { Box, Container, Divider } from '@mui/material'
import Content from './Content/Content.tsx'
import Rights from './Rights/Rights.tsx'

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: 'grey.900',
                py: 6,
            }}
        >
            <Container maxWidth="lg">
                <Content />
                <Divider
                    sx={{
                        backgroundColor: 'grey.800',
                        mt: 6,
                        mb: 4,
                    }}
                />
                <Rights />
            </Container>
        </Box>
    )
}

export default Footer
