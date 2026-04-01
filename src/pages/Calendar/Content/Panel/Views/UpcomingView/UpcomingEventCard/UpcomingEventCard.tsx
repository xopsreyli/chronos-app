import { Box, Card, CardContent, Stack, Typography } from '@mui/material'
import RoundIcon from '../../../../../../../components/ui/common/RoundIcon/RoundIcon.tsx'
import EventIcon from '@mui/icons-material/Event'
import Tag from './Tag/Tag.tsx'

const UpcomingEventCard = () => {
    return (
        <Card
            elevation={0}
            sx={{
                border: '1px solid',
                borderColor: 'grey.100',
                borderLeft: '4px solid',
                borderLeftColor: 'primary.main',
                transition: 'all 0.2s ease',
                '&:hover': {
                    backgroundColor: 'grey.50',
                    transform: 'translateX(4px)',
                },
            }}
        >
            <CardContent
                sx={{
                    px: 3,
                    py: 2,
                    '&:last-child': {
                        pb: 2,
                    },
                }}
            >
                <Stack
                    direction="row"
                    spacing={2}
                    useFlexGap
                    sx={{
                        alignItems: 'flex-start',
                    }}
                >
                    <RoundIcon
                        Icon={EventIcon}
                        color={'#7FFFD4'}
                        iconSize={20}
                    />
                    <Box>
                        <Typography
                            component={'h5'}
                            sx={{
                                fontWeight: '600',
                            }}
                        >
                            Team Meeting
                        </Typography>
                        <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{
                                mb: 1,
                            }}
                        >
                            Weekly sync with the team
                        </Typography>
                        <Stack
                            direction="row"
                            spacing={1}
                            useFlexGap
                            sx={{
                                alignItems: 'center',
                            }}
                        >
                            <Tag label={'Tue, Mar 10'} />
                            <Tag
                                label={'10:00 AM - 11:00 AM'}
                                color={'#7FFF94'}
                            />
                        </Stack>
                    </Box>
                </Stack>
            </CardContent>
        </Card>
    )
}

export default UpcomingEventCard
