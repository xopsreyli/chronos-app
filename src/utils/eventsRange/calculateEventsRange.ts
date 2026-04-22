import dayjs from 'dayjs'

const calculateEventsRange = (view: string, date: string) => {
    const currentDate = dayjs(date, 'YYYY-MM-DD')
    let from = currentDate
    let to = currentDate

    if (view === 'upcoming') {
        from = dayjs()
        to = from.add(2, 'day')
    } else if (view === 'week') {
        from = currentDate.startOf('week')
        to = currentDate.endOf('week')
    } else if (view === 'month') {
        from = currentDate.startOf('month')
        to = currentDate.endOf('month')
    } else if (view === 'year') {
        from = currentDate.startOf('year')
        to = currentDate.endOf('year')
    }

    return [from.format('YYYY-MM-DD'), to.format('YYYY-MM-DD')]
}

export default calculateEventsRange
