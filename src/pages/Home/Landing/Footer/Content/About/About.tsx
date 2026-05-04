import { Box, Typography, useColorScheme } from '@mui/material'
import Logo from '../../../../../../components/ui/common/Logo/Logo.tsx'
import { DARK, LIGHT, SYSTEM } from '../../../../../../enums/theme/enums.ts'

const About = () => {
    const { mode, systemMode } = useColorScheme()
    const resolvedMode = mode === SYSTEM ? systemMode : mode
    const logoThemeMode = resolvedMode === LIGHT ? DARK : LIGHT
    const logoIconColor =
        resolvedMode === LIGHT ? 'primary.light' : 'primary.dark'

    return (
        <Box>
            <Box
                data-mui-color-scheme={logoThemeMode}
                sx={{
                    mb: 2,
                }}
            >
                <Logo
                    icon={{
                        color: logoIconColor,
                        size: 28,
                    }}
                    nameSize={16}
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
