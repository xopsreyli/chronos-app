import { type TASK } from '../../../enums/events/enums.ts'

export type Task = {
    id: number
    calendarId: number
    userId: number
    type: typeof TASK
    title: string
    description: string
    dateTime: Date
}
