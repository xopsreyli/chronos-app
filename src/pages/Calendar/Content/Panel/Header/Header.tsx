import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { IconButton, Stack, Typography } from '@mui/material'
import { useQueryState } from 'nuqs'
import dayjs from 'dayjs'

const Header = () => {
    const [view] = useQueryState('view', {
        defaultValue: 'upcoming',
    })
    const [date, setDate] = useQueryState('date', {
        defaultValue: dayjs().format('YYYY-MM-DD'),
        clearOnDefault: false,
    })

    const resolveTitle = () => {
        const current = dayjs(date, 'YYYY-MM-DD')
        let title: string = ''

        if (view === 'upcoming') title = 'Upcoming Events'
        else if (view === 'week')
            title = `${current.startOf('week').format('MMM D')} - ${current.endOf('week').format('MMM D, YYYY')}`
        else if (view === 'month') title = current.format('MMMM, YYYY')
        else if (view === 'year') title = current.format('YYYY')

        return title
    }

    const handleDateChange = (direction: 'prev' | 'next') => {
        const current = dayjs(date, 'YYYY-MM-DD')
        let newDate = current
        const operation = direction === 'prev' ? 'subtract' : 'add'

        if (view === 'week') newDate = current[operation](1, 'week')
        else if (view === 'month') newDate = current[operation](1, 'month')
        else if (view === 'year') newDate = current[operation](1, 'year')

        setDate(newDate.format('YYYY-MM-DD'))
    }

    return (
        <Stack
            direction="row"
            sx={{
                alignItems: 'center',
                justifyContent: 'space-between',
                mb: 3,
            }}
        >
            <Typography variant="h6">{resolveTitle()}</Typography>
            <Stack
                direction="row"
                spacing={1}
                useFlexGap
                sx={{
                    visibility: view === 'upcoming' ? 'hidden' : 'visible',
                }}
            >
                <IconButton
                    size={'small'}
                    onClick={() => handleDateChange('prev')}
                >
                    <ChevronLeftIcon />
                </IconButton>
                <IconButton
                    size={'small'}
                    onClick={() => handleDateChange('next')}
                >
                    <ChevronRightIcon />
                </IconButton>
            </Stack>
        </Stack>
    )
}

export default Header
