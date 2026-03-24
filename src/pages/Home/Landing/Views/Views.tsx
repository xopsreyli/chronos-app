import { Stack, Typography } from '@mui/material'
import SectionLabel from '../../../../components/ui/landing/SectionLabel/SectionLabel.tsx'
import Cards from './Cards/Cards.tsx'

const Views = () => {
    return (
        <Stack
            id="views"
            spacing={2}
            useFlexGap
            component="section"
            sx={{
                alignItems: 'center',
                my: 10,
            }}
        >
            <SectionLabel label={'calendar views'} />
            <Typography variant="h3">Multiple Ways to View</Typography>
            <Typography
                align="center"
                color="text.secondary"
                sx={{
                    maxWidth: '480px',
                }}
            >
                Switch between different calendar views to find what works best
                for you.
            </Typography>
            <Cards />
        </Stack>
    )
}

export default Views
