import { Box, Button, Stack, Typography } from '@mui/material'
import { Link as RRLink } from 'react-router'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import OutlinedButtonLink from '../../../../../components/ui/common/OutlinedButtonLink/OutlinedButtonLink.tsx'

const Content = () => {
    return (
        <Stack spacing={3} useFlexGap>
            <Typography variant="h1">
                Organize Your Time,{' '}
                <Box
                    component="span"
                    sx={{
                        color: 'primary.main',
                    }}
                >
                    Amplify Your Life
                </Box>
            </Typography>
            <Typography
                color="text.secondary"
                sx={{
                    fontSize: '1.25rem',
                    lineHeight: '1.7',
                }}
            >
                Manage your calendars, events, reminders, and tasks all in one
                place. Stay on top of your schedule with our intuitive and
                powerful calendar app.
            </Typography>
            <Stack
                direction="row"
                spacing={2}
                useFlexGap
                sx={{
                    mt: 1.5,
                }}
            >
                <Button
                    to="/signup"
                    component={RRLink}
                    variant="contained"
                    color="primary"
                    size="large"
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                        textTransform: 'capitalize',
                        fontSize: '1rem',
                        py: 1.5,
                        px: 4,
                    }}
                >
                    start free today
                </Button>
                <OutlinedButtonLink href="/signin" text="Sign In" />
            </Stack>
        </Stack>
    )
}

export default Content
