import { Box, Typography } from '@mui/material'
import Logo from "../../../../../../components/ui/common/Logo/Logo.tsx";

const About = () => {
    return (
        <Box>
            <Box
                sx={{
                    mb: 2,
                }}
            >
                <Logo
                    icon={{
                        color: 'primary.light',
                        size: 28,
                    }}
                    nameSize={16}
                    themeMode="dark"
                />
            </Box>
            <Typography
                variant="body2"
                color="grey.400"
                sx={{
                    maxWidth: 300,
                }}
            >
                Your personal calendar companion for organizing life, work, and
                everything in between.
            </Typography>
        </Box>
    )
}

export default About
