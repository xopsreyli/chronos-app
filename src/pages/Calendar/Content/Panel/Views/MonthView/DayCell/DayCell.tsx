import { Box, Stack, Typography } from '@mui/material'
import EventIndicator from './EventIndicator/EventIndicator.tsx'
import { useQueryState } from 'nuqs'
import dayjs from 'dayjs'
import { DAY } from '../../../../../../../enums/views/enums.ts'

type Props = {
    day: number
    isArrangement: boolean
    isReminder: boolean
    isTask: boolean
}

const DayCell = ({ day, isArrangement, isReminder, isTask }: Props) => {
    const [, setView] = useQueryState('view')
    const [date, setDate] = useQueryState('date', {
        defaultValue: dayjs().format('YYYY-MM-DD'),
    })
    const current = dayjs(date)
    const today = dayjs()
    const isCurrentDay = current.isSame(today, 'month') && day === today.date()

    const handleClick = () => {
        setDate(current.set('date', day).format('YYYY-MM-DD'))
        setView(DAY)
    }

    return (
        <Box
            onClick={handleClick}
            sx={{
                cursor: 'pointer',
                position: 'relative',
                aspectRatio: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: isCurrentDay ? '#7FFFD4' : 'grey.50',
                borderRadius: 2,
                transition: 'all 0.2s ease',
                '&:hover': {
                    backgroundColor: isCurrentDay ? '#4dd9a8' : 'grey.100',
                },
            }}
        >
            <Typography
                component={'span'}
                variant={'body2'}
                sx={{
                    color: isCurrentDay ? '#fff' : 'inherit',
                    fontWeight: isCurrentDay ? 'bold' : 'normal',
                }}
            >
                {day}
            </Typography>
            <Stack
                direction={'row'}
                spacing={1}
                useFlexGap
                sx={{
                    position: 'absolute',
                    bottom: 8,
                }}
            >
                {isArrangement && <EventIndicator color={'#7FFFD4'} />}
                {isReminder && <EventIndicator color={'#7FFFD4'} />}
                {isTask && <EventIndicator color={'#7FFFD4'} />}
            </Stack>
        </Box>
    )
}

export default DayCell
