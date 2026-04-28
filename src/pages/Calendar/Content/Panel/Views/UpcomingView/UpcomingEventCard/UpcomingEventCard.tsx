import { Box, Card, CardContent, Stack, Typography } from '@mui/material'
import RoundIcon from '../../../../../../../components/ui/common/RoundIcon/RoundIcon.tsx'
import EventIcon from '@mui/icons-material/Event'
import Tag from './Tag/Tag.tsx'
import type { Event } from '../../../../../../../types/events/types.ts'
import {
    ARRANGEMENT,
    REMINDER,
    TASK,
} from '../../../../../../../enums/events/enums.ts'
import dayjs from 'dayjs'
import useDrawerStore from '../../../../../../../stores/useDrawerStore/useDrawerStore.ts'
import EventDetails from '../../../../../../../components/ui/app/EventDetails/EventDetails.tsx'

type Props = {
    event: Event
}

const UpcomingEventCard = ({ event }: Props) => {
    const open = useDrawerStore((state) => state.open)

    const handleClick = () => {
        open('right', <EventDetails event={event} />)
    }

    return (
        <Card
            onClick={handleClick}
            elevation={0}
            sx={{
                cursor: 'pointer',
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
                            {event.title}
                        </Typography>
                        <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{
                                height: '1lh',
                                display: '-webkit-box',
                                WebkitBoxOrient: 'vertical',
                                WebkitLineClamp: 1,
                                overflow: 'hidden',
                                mb: 1,
                            }}
                        >
                            {event.description}
                        </Typography>
                        <Stack
                            direction="row"
                            spacing={1}
                            useFlexGap
                            sx={{
                                alignItems: 'center',
                            }}
                        >
                            {event.type === ARRANGEMENT &&
                                (() => {
                                    const from = dayjs(event.from)
                                    const to = dayjs(event.to)
                                    const isSameDate = from.isSame(to, 'day')

                                    if (isSameDate) {
                                        return (
                                            <>
                                                <Tag
                                                    label={from.format(
                                                        'ddd, MMM DD',
                                                    )}
                                                />
                                                <Tag
                                                    label={`${from.format('hh:mm A')} - ${to.format('hh:mm A')}`}
                                                    color={'#7FFF94'}
                                                />
                                            </>
                                        )
                                    }

                                    const isSameYear = from.isSame(to, 'year')
                                    const label = isSameYear
                                        ? `${from.format('DD MMM')} - ${to.format('DD MMM, YYYY')}`
                                        : `${from.format('DD MMM, YYYY')} - ${to.format('DD MMM, YYYY')}`

                                    return <Tag label={label} />
                                })()}
                            {event.type === REMINDER && (
                                <>
                                    <Tag
                                        label={dayjs(event.dateTime).format(
                                            'ddd, MMM DD',
                                        )}
                                    />
                                    <Tag
                                        label={dayjs(event.dateTime).format(
                                            'hh:mm A',
                                        )}
                                        color={'#7FFF94'}
                                    />
                                </>
                            )}
                            {event.type === TASK && (
                                <Tag
                                    label={dayjs(event.dateTime).format(
                                        'ddd, MMM DD',
                                    )}
                                />
                            )}
                        </Stack>
                    </Box>
                </Stack>
            </CardContent>
        </Card>
    )
}

export default UpcomingEventCard
