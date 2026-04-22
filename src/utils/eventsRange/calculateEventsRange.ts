import dayjs from 'dayjs'

const calculateEventsRange = (view: string, date: string) => {
    const currentDate = dayjs(date, 'DD-MM-YYYY')
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

    return [from.format('DD-MM-YYYY'), to.format('DD-MM-YYYY')]
}

export default calculateEventsRange
