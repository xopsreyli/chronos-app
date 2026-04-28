import dayjs from 'dayjs'
import {MONTH, UPCOMING, WEEK, YEAR} from "../../enums/views/enums.ts";
import type {View} from "../../types/views/types.ts";

const calculateEventsRange = (view: View, date: string): [string, string] => {
    const currentDate = dayjs(date, 'YYYY-MM-DD')
    let from = currentDate
    let to = currentDate

    if (view === UPCOMING) {
        from = dayjs().startOf('day')
        to = from.add(2, 'day').endOf('day')
    } else if (view === WEEK) {
        from = currentDate.startOf('week')
        to = currentDate.endOf('week')
    } else if (view === MONTH) {
        from = currentDate.startOf('month')
        to = currentDate.endOf('month')
    } else if (view === YEAR) {
        from = currentDate.startOf('year')
        to = currentDate.endOf('year')
    }

    return [from.toISOString(), to.toISOString()]
}

export default calculateEventsRange
