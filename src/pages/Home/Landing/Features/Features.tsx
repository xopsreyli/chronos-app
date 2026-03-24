import { Stack, Typography } from '@mui/material'
import SectionLabel from '../../../../components/ui/landing/SectionLabel/SectionLabel.tsx'
import Cards from './Cards/Cards.tsx'

const Features = () => {
    return (
        <Stack
            id="features"
            spacing={2}
            useFlexGap
            component="section"
            sx={{
                alignItems: 'center',
                my: 10,
            }}
        >
            <SectionLabel label="Features" />
            <Typography
                variant="h3"
                sx={{
                    textTransform: 'capitalize',
                }}
            >
                Everything You Need
            </Typography>
            <Typography
                align="center"
                color="text.secondary"
                sx={{
                    maxWidth: '500px',
                }}
            >
                Powerful features to help you manage your time effectively and
                stay on top of your commitments.
            </Typography>
            <Cards />
        </Stack>
    )
}

export default Features
